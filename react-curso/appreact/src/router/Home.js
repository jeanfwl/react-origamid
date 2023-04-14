import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bem vindo a Home</h1>
      <p>essa é a home page</p>
      <Link to="produto/notebook">Notebook</Link>
      <Link to="produto/smartphone">Smartphone</Link>
    </div>
  );
};

export default Home;
