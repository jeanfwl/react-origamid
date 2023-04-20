import React from 'react';
import { useParams } from 'react-router-dom';
import Head from './Head';

const ProdutoDetalhe = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const params = useParams();

  React.useEffect(() => {
    async function fetchProduto() {
      const { id } = params;
      setLoading(true);
      const res = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${id}`,
      );
      const json = await res.json();
      setProduto(json);
      setLoading(false);
    }
    fetchProduto();
  }, [params]);

  return (
    <>
      {loading && <p>Carregando...</p>}
      {loading === false && produto && (
        <>
          <Head title={produto.nome} />
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              {produto.fotos.map(({ titulo, src }, index) => (
                <img key={index} src={src} alt={titulo} />
              ))}
            </div>
            <div>
              <h2>{produto.nome}</h2>
              <p>
                {Number(produto.preco).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>
              <p>{produto.descricao}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProdutoDetalhe;
