import React from 'react';
// import UserContext from './UserContext';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  // const usuario = React.useContext(UserContext);
  const global = React.useContext(GlobalContext);
  return (
    <div>
      <p>{global.login}</p>
      Produto: {global.contador}
      <button onClick={() => global.adicionarContador()}>Adicionar</button>
    </div>
  );
};

export default Produto;
