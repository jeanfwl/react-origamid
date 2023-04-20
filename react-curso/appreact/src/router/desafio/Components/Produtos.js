import React from 'react';
import Head from './Head';
import Produto from './Produto';
import { Route, Routes } from 'react-router-dom';
import ProdutoDetalhe from './ProdutoDetalhe';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchProdutos() {
      setLoading(true);
      const res = await fetch('https://ranekapi.origamid.dev/json/api/produto');
      const json = await res.json();
      setProdutos(json);
      setLoading(false);
    }
    fetchProdutos();
  }, []);

  return (
    <>
      <Head title="Produtos" />
      {loading && <p>Carregando...</p>}
      {loading === false && produtos && (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {produtos.map((produto) => (
            <Produto key={produto.id} produto={produto} />
          ))}
        </div>
      )}
      {/* <Routes>
        <Route path="produto/:id" element={<ProdutoDetalhe />} />
      </Routes> */}
    </>
  );
};

export default Produtos;
