import React from 'react';
import URL from './URL';

// const PHOTO_POST = {
//   endpoint: '/api/photo',
//   method: 'POST',
//   headers: {
//     Authorization: 'Bearer TOKEN',
//   },
//   body: {
//     img: 'FORM_DATA',
//     nome: '',
//     peso: '',
//     idade: '',
//   },
// };

const PhotoPost = () => {
  const [token, setToken] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [img, setImg] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('idade', idade);
    formData.append('peso', peso);
    formData.append('img', img);

    fetch(URL + 'api/photo', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={({ target }) => setToken(target.value)}
        value={token}
        placeholder="token"
      />
      <input
        type="text"
        onChange={({ target }) => setNome(target.value)}
        value={nome}
        placeholder="nome"
      />
      <input
        type="text"
        onChange={({ target }) => setIdade(target.value)}
        value={idade}
        placeholder="idade"
      />
      <input
        type="text"
        onChange={({ target }) => setPeso(target.value)}
        value={peso}
        placeholder="peso"
      />
      <input type="file" onChange={({ target }) => setImg(target.files[0])} />
      <button>Enviar</button>
    </form>
  );
};

export default PhotoPost;
