import React from 'react';

const Produto = ({ produto }) => {
  if (produto) {
    return (
      <section>
        <h1>{produto.nome}</h1>
        <p>Preço: R$ {produto.preco}</p>
        <img src={produto.fotos[0].src} alt="Imagem Produto" />
      </section>
    );
  }
  return null;
};

export default Produto;
