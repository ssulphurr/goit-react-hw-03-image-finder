import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  render() {
    return createPortal(
      <div className={css.Overlay}>
        <div className={css.Modal}>
          <img src={this.props.bigImg} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
