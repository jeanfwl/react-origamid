import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={{ display: 'flex', gap: '1rem' }}>
      <p>
        <NavLink to="/" activeClassName={null}>
          Produtos
        </NavLink>
      </p>
      <p>
        <NavLink to="contato" activeClassName={null}>
          Contato
        </NavLink>
      </p>
    </nav>
  );
};

export default Header;
