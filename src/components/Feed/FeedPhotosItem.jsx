import React from 'react';
import Image from '../Helper/Image';
import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handfleClick() {
    setModalPhoto(photo);
  }
  return (
    <li className={`${styles.photo} animeLeft`} onClick={handfleClick}>
      <Image src={photo.src} alt={photo.title} />
      {/* <img src={photo.src} alt={photo.title} /> */}
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
