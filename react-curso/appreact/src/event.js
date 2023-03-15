import React from 'react';

const App = () => {
  function handlerClickExterno(event) {
    console.log(event.target);
  }

  function handleScroll(event) {
    console.log(event);
  }
  //para eventos no window por exemplo
  window.addEventListener('scroll', handleScroll);

  return (
    <div style={{ height: '200vh' }}>
      <button onClick={handlerClickExterno}>Clique aqui cara</button>
      <button onClick={({ target }) => console.log(target)}>
        Clique aqui tambem
      </button>
    </div>
  );
};

export default App;
