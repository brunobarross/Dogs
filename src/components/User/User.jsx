import React, { useContext } from 'react';
import UserHeader from './UserHeader';
import { Routes, Route } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './userStats';
import { userContext } from '../../UserContext';
import NotFound from '../NotFound';
import Head from '../Helper/Head';

const User = () => {
  const { data } = React.useContext(userContext);

  return (
    <section className="container">
      <Head title="Minha conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />}></Route>
        <Route path="postar" element={<UserPhotoPost />}></Route>
        <Route path="estatisticas" element={<UserStats />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
