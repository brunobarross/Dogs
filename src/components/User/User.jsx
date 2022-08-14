import React, { useContext } from 'react';
import UserHeader from './UserHeader';
import { Routes, Route } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './userStats';
import { userContext } from '../../UserContext';

const User = () => {
  const { data } = React.useContext(userContext);
  console.log(data);
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />}></Route>
        <Route path="postar" element={<UserPhotoPost />}></Route>
        <Route path="estatisticas" element={<UserStats />}></Route>
      </Routes>
    </section>
  );
};

export default User;
