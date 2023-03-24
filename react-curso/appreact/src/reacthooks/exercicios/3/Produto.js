import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const { dados, limparDados } = React.useContext(GlobalContext);
  return (
    <div>
      <ul>
        {dados &&
          dados.map((produto) => <li key={produto.id}>{produto.nome}</li>)}
      </ul>
      <button onClick={() => limparDados()}>Limpar dados</button>
    </div>
  );
};

export default Produto;
