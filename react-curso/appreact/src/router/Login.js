import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  function handleClick() {
    console.log('Faz login');
    navigate('/sobre');
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleClick}>Logar</button>
    </div>
  );
};

export default Login;
