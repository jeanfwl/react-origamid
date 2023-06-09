import React from 'react';
import URL from './URL';

// const TOKEN_POST = {
//   endpoint: '/jwt-auth/v1/token',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: {
//     username: '',
//     password: '',
//   },
// };

const TokenPost = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [token, setToken] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch(URL + 'jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setToken(json.token);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={({ target }) => setUsername(target.value)}
        value={username}
        placeholder="username"
      />
      <input
        type="text"
        onChange={({ target }) => setPassword(target.value)}
        value={password}
        placeholder="password"
      />
      <p style={{ wordBreak: 'break-all' }}>{token}</p>
      <button>Enviar</button>
    </form>
  );
};

export default TokenPost;
