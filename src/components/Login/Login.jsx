import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { userContext } from '../../UserContext';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import styles from './Login.module.css';
import NotFound from '../NotFound';
import Head from '../Helper/Head';

const Login = () => {
  const { login } = React.useContext(userContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <Head title="Login" />
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
