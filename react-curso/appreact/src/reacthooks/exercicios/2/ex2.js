// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

import React from 'react';
import Produto from './Produto';

const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    if (produto) {
      localStorage.setItem('produto', produto);
    }
  }, [produto]);

  React.useEffect(() => {
    const produtoPref = localStorage.getItem('produto');
    if (produtoPref) setProduto(produtoPref);
  }, []);

  function handleClick({ target }) {
    const produtoPref = target.innerText;
    setProduto(produtoPref);
  }

  return (
    <div>
      <h2>Preferência: {produto}</h2>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <Produto produto={produto} />
    </div>
  );
};

export default App;
