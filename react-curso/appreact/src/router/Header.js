import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log('Validar usuário');
  }, [location]);

  const activeStyle = {
    color: 'tomato',
  };
  return (
    <header>
      <nav>
        <NavLink to="/" end activeStyle={activeStyle} activeClassName={null}>
          Home
        </NavLink>
        |
        <NavLink to="sobre" activeStyle={activeStyle} activeClassName={null}>
          Sobre
        </NavLink>
        |
        <NavLink to="login" activeStyle={activeStyle} activeClassName={null}>
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
