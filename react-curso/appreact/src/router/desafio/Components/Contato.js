import React from 'react';
import imgContato from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <>
      <Head title="Contato" />
      <div style={{ display: 'flex' }}>
        <img
          src={imgContato}
          style={{ width: '300px', height: '100%' }}
          alt="Prédio"
        />
        <div>
          <ul>
            <li>jeanttalar@gmail.com</li>
            <li>(42) 9 9999-9999</li>
            <li>Mallet - PR</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contato;
