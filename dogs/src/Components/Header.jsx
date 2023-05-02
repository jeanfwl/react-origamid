import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <nav>
        <Link to="/" end>
          <Dogs />
        </Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </header>
  );
};

export default Header;
