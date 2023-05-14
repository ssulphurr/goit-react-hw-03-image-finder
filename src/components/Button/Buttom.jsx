import React from 'react';
import css from './Button.module.css';

export default function Button({ onClick }) {
  return (
    <button type="button" className={css.Button} onClick={onClick}>
      Load more
    </button>
  );
}
