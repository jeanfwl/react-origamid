import React from 'react';
import Head from './Head';
import { useParams } from 'react-router-dom';
import styles from './Produto.module.css';

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [erro, setErro] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto() {
      try {
        setLoading(true);
        setErro(null);
        const res = await fetch(
          `https://ranekapi.origamid.dev/json/api/produto/${id}`,
        );
        const json = await res.json();
        setProduto(json);
      } catch (error) {
        setErro('Ocorreu um erro ao buscar o produto');
      } finally {
        setLoading(false);
      }
    }
    fetchProduto();
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (erro) return <p>{erro}</p>;
  if (produto === null) return null;

  return (
    <div className={`${styles.produto} animeLeft`}>
      <Head title={produto.nome} />
      <div className={styles.imagens}>
        {produto.fotos.map(({ titulo, src }, index) => (
          <img key={index} src={src} alt={titulo} />
        ))}
      </div>
      <div>
        <h2>{produto.nome}</h2>
        <span className={styles.preco}>
          {Number(produto.preco).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </div>
  );
};
export default Produto;
