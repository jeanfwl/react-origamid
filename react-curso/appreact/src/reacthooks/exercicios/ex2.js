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
  const [preferencia, setPreferencia] = React.useState(() => {
    return localStorage.getItem('produto');
  });

  React.useEffect(() => {
    if (preferencia)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${preferencia}`)
        .then((r) => r.json())
        .then((json) => setProduto(json));
  }, [preferencia]);

  async function handleClick(event) {
    const produto = event.target.innerText;
    localStorage.setItem('produto', produto);
    setPreferencia(produto);

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${produto}`,
    );
    const json = await response.json();
    setProduto(json);
  }

  return (
    <div>
      <h2>Preferência: {preferencia}</h2>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <Produto produto={produto} />
    </div>
  );
};

export default App;
