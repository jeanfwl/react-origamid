import React from 'react';

function reducer(state, action) {
  switch (action) {
    case 'AUMENTAR':
      return state + 1;
    case 'DIMINUIR':
      return state - 1;
    default:
      throw new Error('Nenhuma action encontrada!');
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  function diminuir() {
    dispatch('DIMINUIR');
  }

  function aumentar() {
    dispatch('AUMENTAR');
  }

  return (
    <div>
      <p>
        <button onClick={() => diminuir()}>-</button>
      </p>
      <p>
        <button onClick={() => aumentar()}>+</button>
      </p>
      <p>{state}</p>
    </div>
  );
};

export default App;
