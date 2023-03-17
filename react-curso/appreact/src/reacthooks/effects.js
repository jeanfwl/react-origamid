import React from 'react';

const App = () => {
  const [contador, setContador] = React.useState(0);

  React.useEffect(() => {
    console.log('Contador alterado');
  }, []);

  React.useEffect(() => {
    const titulo = 'Titulo ' + contador;
  }, []);

  return <button onClick={() => setContador(contador + 1)}>{contador}</button>;
};

export default App;
