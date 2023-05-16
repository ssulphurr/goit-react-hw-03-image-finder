import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images }) {
  return (
    <>
      {images.length > 0 && (
        <ul className={css.ImageGallery}>
          {images.map(({ id, webformatURL, largeImageURL, tags }) => {
            return (
              <ImageGalleryItem
                key={id}
                smallImg={webformatURL}
                bigImg={largeImageURL}
                tags={tags}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array,
};
