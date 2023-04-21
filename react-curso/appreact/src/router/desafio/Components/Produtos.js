import React from 'react';
import Head from './Head';
import { Link } from 'react-router-dom';
import styles from './Produtos.module.css';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [erro, setErro] = React.useState(null);

  React.useEffect(() => {
    async function fetchProdutos() {
      try {
        setLoading(true);
        setErro(null);
        const res = await fetch(
          'https://ranekapi.origamid.dev/json/api/produto',
        );
        const json = await res.json();
        setProdutos(json);
      } catch (error) {
        setErro('Ocorreu um erro ao buscar os produtos.');
      } finally {
        setLoading(false);
      }
    }
    fetchProdutos();
  }, []);

  if (loading) return <div className="loading"></div>;
  if (erro) return <p>{erro}</p>;
  if (produtos === null) return null;
  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Head title="Produtos" />
      {produtos.map(({ id, fotos, nome }) => (
        <Link key={id} to={`produto/${id}`}>
          <img src={fotos[0].src} alt={fotos[0].titulo} />
          <h3 className={styles.titulo}>{nome}</h3>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
