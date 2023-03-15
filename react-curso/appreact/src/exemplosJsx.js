import React from 'react';

const estilos = {
  color: 'blue', 
  backgroundColor: 'gray'
}

const textoBotao = 'Clique aqui';
const habilitado = false;

function soma(n1, n2) {
  return n1 + n2;
}

const configs = {
  ativado: false,
  classeAtiva: 'active',
  classeInativa: 'disabled'
}


const App = () => {
  return (
    <>
      <a className="teste" href="https://www.google.com.br" title="Esse é o link">Meu app</a>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
      <p style={estilos}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ipsam, repellat quo necessitatibus aut deleniti iste, repellendus maiores non architecto eveniet nulla assumenda dolores laborum nihil aliquam cumque molestiae tenetur.</p>

      <button className={configs.ativado ? configs.classeAtiva : configs.classeInativa}>{textoBotao} {soma(32, 32)} {configs.classeAtiva}</button>
    </>
  )
};

export default App;
