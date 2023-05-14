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
      this.setState({ searchInput: this.props.searchInput });
    }
    if (prevState.searchInput !== this.state.searchInput) {
      const response = await api.fetchImages(this.state.searchInput);

      try {
        this.setState({ images: response.data.hits });
      } catch (error) {}
    }
  }

  render() {
    return <ul className={css.ImageGallery}></ul>;
  }
}
