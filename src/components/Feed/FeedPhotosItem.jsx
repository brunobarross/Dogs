import React from 'react';
import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = ({ photo, id }) => {
  return (
    <li className={`${styles.photo} animeLeft`}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
