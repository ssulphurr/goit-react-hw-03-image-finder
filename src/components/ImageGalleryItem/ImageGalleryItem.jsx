import React from 'react';
import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem() {
  return (
    <li className={css.ImageGalleryItem}>
      <img src="" alt="" className={css.ImageGalleryItem__image} />
    </li>
  );
}
