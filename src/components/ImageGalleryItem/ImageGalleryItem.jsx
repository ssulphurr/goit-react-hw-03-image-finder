import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { smallImg, bigImg } = this.props;
    return (
      <li className={css.ImageGalleryItem} onClick={this.toggleModal}>
        <img src={smallImg} alt="" className={css.ImageGalleryItem__image} />
        {this.state.showModal && <Modal bigImg={bigImg} />}
      </li>
    );
  }
}
