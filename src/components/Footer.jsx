import React from 'react';
import styles from './Footer.module.css';
import LogoFooter from './Svgs/LogoFooter';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <LogoFooter />
      <p>Dogs. Alguns direitos reservados.</p>
    </div>
  );
};

export default Footer;
