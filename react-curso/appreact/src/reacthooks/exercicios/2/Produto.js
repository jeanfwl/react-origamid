import React from 'react';

const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (produto) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((r) => r.json())
        .then((json) => setDados(json));
    }
  }, [produto]);

  if (dados) {
    return (
      <section>
        <h1>{dados.nome}</h1>
        <p>Preço: R$ {dados.preco}</p>
        <img src={dados.fotos[0].src} alt="Imagem Produto" />
      </section>
    );
  }

  return null;
};

export default Produto;
