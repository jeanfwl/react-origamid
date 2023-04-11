import React from 'react';
import styled from 'styled-components';

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto = styled.div`
  flex: 1;
`;

const Titulo = styled.h1`
  font-size: 2rem;
  color: tomato;
`;

const Preco = styled.p`
  font-size: 1.5rem;
  color: green;
`;

const App = () => {
  return (
    <ProdutosContainer>
      <Produto>
        <Titulo>Papel toalha</Titulo>
        <Preco>R$ 123,00</Preco>
      </Produto>
      <Produto>
        <Titulo>Papel higiênico</Titulo>
        <Preco>R$ 122,00</Preco>
      </Produto>
    </ProdutosContainer>
  );
};

export default App;
