import React from 'react';
import imgContato from '../img/contato.jpg';
import Head from './Head';
import styles from './Contato.module.css';

const Contato = () => {
  return (
    <div className={`${styles.contato} animeLeft`}>
      <Head title="Contato" />
      <img src={imgContato} alt="Prédio" />
      <div>
        <h1>Contato</h1>
        <ul className={styles.dados}>
          <li>jeanttalar@gmail.com</li>
          <li>(42) 9 9999-9999</li>
          <li>Mallet - PR</li>
        </ul>
      </div>
    </div>
  );
};

export default Contato;
