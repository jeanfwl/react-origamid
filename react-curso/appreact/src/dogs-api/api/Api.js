import React from 'react';
import UserPost from './endpoints/UserPost';
import TokenPost from './endpoints/TokenPost';
import TokenValidatePost from './endpoints/TokenValidatePost';
import UserGet from './endpoints/UserGet';
import PhotoPost from './endpoints/PhotoPost';
import PhotoDelete from './endpoints/PhotoDelete';
import PhotoGet from './endpoints/PhotoGet';

const Api = () => {
  return (
    <div>
      <fieldset>
        <legend>USER</legend>
        <h2>USER POST</h2>
        <UserPost />
        <h2>TOKEN POST</h2>
        <TokenPost />
        <h2>TOKEN VALIDATE POST</h2>
        <TokenValidatePost />
        <h2>USER GET</h2>
        <UserGet />
      </fieldset>
      <fieldset>
        <legend>PHOTO</legend>
        <h2>PHOTO POST</h2>
        <PhotoPost />
        <h2>PHOTO GET</h2>
        <PhotoGet />
        <h2>PHOTO DELETE</h2>
        <PhotoDelete />
      </fieldset>
    </div>
  );
};

export default Api;
