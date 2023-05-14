import React from 'react';
import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ smallImg, bigImg }) {
  return (
    <li className={css.ImageGalleryItem}>
      <img src={smallImg} alt="" className={css.ImageGalleryItem__image} />
    </li>
  );
}
