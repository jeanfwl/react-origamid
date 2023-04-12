import React from 'react';
import styled from 'styled-components';

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto = styled.div`
  flex: 1;
`;

const Titulo = styled.h1`
  font-size: 3rem;
  color: tomato;
`;

const Preco = styled.p`
  font-size: ${({ promocao }) => (promocao ? '4rem' : '2.5rem')};
  color: ${({ cor }) => cor};
  font-weight: bold;
`;

const BotaoPromocao = styled.button`
  background-color: lightseagreen;
  padding: 1rem;
  font-size: 2rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  outline: 0;
  &:hover {
    background-color: goldenrod;
  }
  &:focus {
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 1);
  }
`;

const App = () => {
  const [promocao, setPromocao] = React.useState(false);

  return (
    <>
      <BotaoPromocao onClick={() => setPromocao(!promocao)}>
        Incluir Promoção
      </BotaoPromocao>
      <ProdutosContainer>
        <Produto>
          <Titulo>Papel toalha</Titulo>
          <Preco cor="green" promocao={promocao}>
            R$ 123,00
          </Preco>
        </Produto>
        <Produto>
          <Titulo>Papel higiênico</Titulo>
          <Preco cor="blue" promocao={promocao}>
            R$ 122,00
          </Preco>
        </Produto>
      </ProdutosContainer>
    </>
  );
};

export default App;
