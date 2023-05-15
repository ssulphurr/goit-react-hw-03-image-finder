import React, { Component } from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import api from '../../services/api';

export default class ImageGallery extends Component {
  state = {
    searchInput: '',
    images: [],
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({
        searchInput: this.props.searchInput,
      });
    }

    if (prevState.searchInput !== this.state.searchInput) {
      this.props.resetPage();
      const response = await api.fetchImages(
        this.state.searchInput,
        this.props.page
      );

      try {
        this.setState({
          images: response.data.hits,
        });
      } catch (error) {
        console.log(error.message);
      }
    }

    if (prevProps.page !== this.props.page) {
      const response = await api.fetchImages(
        this.state.searchInput,
        this.props.page
      );

      try {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
        }));
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  render() {
    return (
      <ul className={css.ImageGallery}>
        {this.state.images.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              smallImg={webformatURL}
              bigImg={largeImageURL}
            />
          );
        })}
      </ul>
    );
  }
}
