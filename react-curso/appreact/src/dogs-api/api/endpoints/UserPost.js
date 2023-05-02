import React from 'react';
import URL from './URL';

// const USER_POST = {
//   endpoint: '/api/user',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: {
//     username: '',
//     password: '',
//     email: '',
//   },
// };

const UserPost = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch(URL + 'api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
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
      <input
        type="text"
        onChange={({ target }) => setEmail(target.value)}
        value={email}
        placeholder="email"
      />
      <button>Enviar</button>
    </form>
  );
};

export default UserPost;
