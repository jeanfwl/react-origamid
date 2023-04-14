import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Produto = () => {
  //http://localhost:3000/produto/smartphone?q=azul&memoria=16
  const params = useParams();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const memoria = searchParams.get('memoria');

  console.log(memoria); // 16
  return <h1>Produto: {params.id}</h1>;
};

export default Produto;
