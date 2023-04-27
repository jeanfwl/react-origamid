import React from 'react';
import Produtos from './Produtos';

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  return (
    <div>
      {ativo && <Produtos title="Lista de produtos" />}
      <button onClick={() => setAtivo(!ativo)}>Toggle Produtos</button>
    </div>
  );
};

export default App;
