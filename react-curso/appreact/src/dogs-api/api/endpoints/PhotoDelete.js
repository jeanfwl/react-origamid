import React from 'react';
import URL from './URL';

// const PHOTO_DELETE = {
//   endpoint: '/api/photo/:id',
//   method: 'DELETE',
//   headers: {
//     Authorization: 'Bearer ' + token,
//   },
// };

const PhotoDelete = () => {
  const [id, setId] = React.useState('');
  const [token, setToken] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch(URL + `api/photo/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
      },
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
      <input
        type="text"
        onChange={({ target }) => setId(target.value)}
        value={id}
        placeholder="id"
      />
      <button>Excluir Foto</button>
    </form>
  );
};

export default PhotoDelete;
