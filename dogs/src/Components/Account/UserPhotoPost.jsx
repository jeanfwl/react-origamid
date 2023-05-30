import React from 'react';
import useForm from '../../Hooks/useForm';
import styles from './UserPhotoPost.module.css';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_POST } from '../../api';
import { useNavigate } from 'react-router-dom';

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});
  const { data, loading, error, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);
    formData.append('img', img.raw);
    const token = window.localStorage.getItem('token');

    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    const file = target.files[0];
    setImg({
      raw: file,
      preview: URL.createObjectURL(file),
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
          className={styles.file}
        />
        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button>Enviar Post</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        <div
          className={styles.preview}
          style={{ backgroundImage: `url('${img.preview}')` }}
        ></div>
      </div>
    </section>
  );
};

export default UserPhotoPost;
