import React from 'react';
import { Link } from 'react-router-dom';

const Produto = ({ produto }) => {
  return (
    <div>
      <Link to={`/produto/${produto.id}`}>
        <img
          src={produto.fotos[0].src}
          alt={produto.fotos[0].titulo}
          style={{ width: '500px', height: '500px' }}
        />
        <h3>{produto.nome}</h3>
      </Link>
    </div>
  );
};

export default Produto;
