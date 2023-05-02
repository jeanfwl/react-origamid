import React from 'react';
import URL from './URL';

// query: ?_total=1&_page=1&_user=6
// const PHOTO_GET = {
//   endpoint: {
//     photos: '/api/photo',
//     photos_query: '/api/photo/?_total=9&_page=1&_user=0',
//     photo: '/api/photo/:id',
//   },
//   method: 'GET',
// };

const PhotoGet = () => {
  const [id, setId] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('id', id);

    const fetchPhotoUrl = id ? `api/photo/${id}` : 'api/photo';
    fetch(URL + fetchPhotoUrl, {
      method: 'GET',
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
        onChange={({ target }) => setId(target.value)}
        value={id}
        placeholder="id"
      />
      <button>Enviar (sem ou com ID)</button>
    </form>
  );
};

export default PhotoGet;
