import React from 'react';

const Produto = ({ nome, propriedades }) => {
  return (
    <section
      style={{ border: '1px solid black', padding: '1rem', margin: '1rem 0' }}
    >
      <p>{nome}</p>
      <ul>
        {propriedades.map((prop) => (
          <li key={prop}>{prop}</li>
        ))}
      </ul>
    </section>
  );
};

export default Produto;
