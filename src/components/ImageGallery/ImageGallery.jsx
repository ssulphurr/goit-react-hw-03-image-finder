import React, { Component } from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import api from '../../services/api';
import { Audio } from 'react-loader-spinner';
import Button from 'components/Button/Buttom';

export default class ImageGallery extends Component {
  state = {
    searchInput: '',
    images: [],
    isLoading: false,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchInput !== this.props.searchInput) {
      this.setState({
        searchInput: this.props.searchInput,
      });
    }

    if (prevState.searchInput !== this.state.searchInput) {
      this.setState({
        images: [],
        isLoading: true,
      });

      const response = await api.fetchImages(this.state.searchInput, 1);

      try {
        this.setState({
          images: response.data.hits,
          isLoading: false,
        });
      } catch (error) {
        console.log(error.message);
      }
    }

    if (prevState.page !== this.state.page) {
      this.setState({ isLoading: true });

      const response = await api.fetchImages(
        this.state.searchInput,
        this.state.page
      );

      try {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          isLoading: false,
        }));
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  increasePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        <ul className={css.ImageGallery}>
          {images.map(({ id, webformatURL, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                smallImg={webformatURL}
                bigImg={largeImageURL}
              />
            );
          })}
        </ul>
        {isLoading ? <Audio /> : null}
        {images.length > 0 && <Button onClick={this.increasePage} />}
      </>
    );
  }
}
