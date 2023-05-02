import React from 'react';
import URL from './URL';

// const TOKEN_VALIDATE_POST = {
//   endpoint: '/jwt-auth/v1/token/validate',
//   method: 'POST',
//   headers: {
//     Authorization: 'Bearer TOKEN_AQUI',
//   },
// }

const TokenValidatePost = () => {
  const [token, setToken] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch(URL + 'jwt-auth/v1/token/validate', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={({ target }) => setToken(target.value)}
        value={token}
        placeholder="token"
      />
      <button>Enviar</button>
    </form>
  );
};

export default TokenValidatePost;
