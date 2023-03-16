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

const Header = ({ logado, nome, direitos }) => {
  console.log(direitos);
  if (logado) {
    return <header>Bem vindo {nome}!</header>
  } else {
    return <header>Login</header>
  }
};

const App = () => {
  const logado = true;
  const nome = 'Jean';
  const direitos = ['Usuário', 'Administrador'];


  return (
    <div>
      <Titulo texto="Exemplos" cor="gray" />
      <Titulo>
        <p>teste</p>
      </Titulo>
      <br />
      <Input id="teste" name="teste" className="teste" />
      <Header logado={logado} nome={nome} direitos={direitos} />
    </div>
  );
};

export default App;
