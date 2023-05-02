import React from 'react';
import URL from './URL';

// const USER_GET = {
//   endpoint: '/api/user',
//   method: 'POST',
//   headers: {
//     Authorization: 'Bearer TOKEN_AQUI',
//   },
// };

const UserGet = () => {
  const [token, setToken] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch(URL + 'api/user', {
      method: 'GET',
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

export default UserGet;
