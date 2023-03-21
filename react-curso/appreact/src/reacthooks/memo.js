import React from 'react';

function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c;
}

const App = () => {
  const [contador, setContador] = React.useState(0);
  const valor = React.useMemo(() => {
    return operacaoLenta();
  }, []);
  console.log(valor);

  return (
    <div>
      <button onClick={() => setContador(contador + 1)}>{contador}</button>
    </div>
  );
};

export default App;
