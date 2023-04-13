import React from 'react';
import './App.css';
import Produto from './Produto';

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
      {ativo && <Produto />}
    </div>
  );
};

export default App;
