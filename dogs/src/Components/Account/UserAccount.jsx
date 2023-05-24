import React from 'react';
import UserHeader from './UserHeader';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserStats from './UserStats';
import UserPhotoPost from './UserPhotoPost';

const Account = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="postar" element={<UserPhotoPost />} />
      </Routes>
    </section>
  );
};

export default Account;
