import React from 'react';

function reducer(state, { type, content }) {
  switch (type) {
    case 'REMOVER':
      return state.filter((it) => it !== content);
    case 'ADICIONAR':
      return [...state, content];
    default:
      throw new Error('Nenhuma action encontrada!');
  }
}

const ExemploReducer = () => {
  const [state, dispatch] = React.useReducer(reducer, ['Banana', 'Uva']);

  function remover() {
    dispatch({ type: 'REMOVER', content: 'Banana' });
  }

  function adicionar() {
    dispatch({ type: 'ADICIONAR', content: 'Maçã' });
  }

  return (
    <div>
      <p>
        <button onClick={() => remover()}>Remover Banana</button>
      </p>
      <p>
        <button onClick={() => adicionar()}>Adicionar Maçã</button>
      </p>
      <p>{state}</p>
    </div>
  );
};

export default ExemploReducer;
