import React from 'react';

const App = () => {
  const [contador, setContador] = React.useState(0);

  function diminuir() {
    setContador(contador - 1);
  }

  function aumentar() {
    setContador(contador + 1);
  }

  return (
    <div>
      <p>
        <button onClick={() => diminuir()}>-</button>
      </p>
      <p>
        <button onClick={() => aumentar()}>+</button>
      </p>
      <p>{contador}</p>
    </div>
  );
};

export default App;
