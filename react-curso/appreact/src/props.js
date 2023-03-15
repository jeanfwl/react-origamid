import React from 'react';

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto} children: {children}
    </h1>
  );
};

const Input = ({ id, ...props }) => {
  console.log(props);
  return (
    <p>
      <label htmlFor={id}>Teste</label>
      <input id={id} type="text" {...props} />
    </p>
  );
};

const App = () => {
  return (
    <div>
      <Titulo texto="Exemplos" cor="gray" />
      <Titulo>
        <p>teste</p>
      </Titulo>
      <br />
      <Input id="teste" name="teste" className="teste" />
    </div>
  );
};

export default App;
