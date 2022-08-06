import React from 'react';
import styles from './Header.module.css';
import Logo from '../Assets/dogs.svg';
import { Link } from 'react-router-dom';
import { userContext } from '../UserContext';

const Header = () => {
  const { data, userLogout } = React.useContext(userContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Dogs - Home" className={styles.logo}>
          <img src={Logo} />
        </Link>
        {data ? (
          <Link to="/conta" className={styles.login}>
            {data.nome}
            <button onClick={userLogout}>Sair</button>
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
