// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

import React from 'react';
import ButtonProduto from './ButtonProduto';
import Produto from './Produto';

const App = () => {
  const urlProdutos = [
    'https://ranekapi.origamid.dev/json/api/produto/tablet',
    'https://ranekapi.origamid.dev/json/api/produto/smartphone',
    'https://ranekapi.origamid.dev/json/api/produto/notebook',
  ];

  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  return (
    <div>
      {urlProdutos.map((url) => (
        <ButtonProduto
          key={url}
          url={url}
          setProduto={setProduto}
          setLoading={setLoading}
        />
      ))}
      {loading && <p>Carregando...</p>}
      {loading === false && <Produto produto={produto} />}
    </div>
  );
};

export default App;
