import React from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';

const Home = () => {
  return (
    <div>
      <Head title="Home" content="Esse é o conteúdo de Home" />
      <h1>Bem vindo a Home</h1>
      <p>essa é a home page</p>
      <Link to="produto/notebook">Notebook</Link>
      <Link to="produto/smartphone">Smartphone</Link>
    </div>
  );
};

export default Home;
