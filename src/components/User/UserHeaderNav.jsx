import React from 'react';
import { NavLink } from 'react-router-dom';
import { userContext } from '../../UserContext';
import FeedSvg from '../../Assets/feed.svg';
import Sair from '../../Assets/sair.svg';
import Estatisticas from '../../Assets/estatisticas.svg';
import Adicionar from '../../Assets/adicionar.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState('');
  const { userLogout } = React.useContext(userContext);
  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <img src={FeedSvg} />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <img src={Estatisticas} />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to="/conta/postar">
        <img src={Adicionar} />
        {mobile && 'Adicionar Foto'}
      </NavLink>
      <button onClick={userLogout}>
        <img src={Sair} />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
