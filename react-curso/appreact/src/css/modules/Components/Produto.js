import React from 'react';
// import styles from './Produto.module.css';
import styles from './ProdutoFunc.module.css';

const Produto = () => {
  console.log(styles);
  return (
    <div>
      <h1 className={styles.titulo}>Notebook</h1>
      <p className={styles.preco}>R$ 10.000</p>
      <button className={styles.btnComprar}>Comprar</button>
    </div>
  );
};

export default Produto;
