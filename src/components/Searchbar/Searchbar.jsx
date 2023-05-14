import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import css from './Searchbar.module.css';

export default class SearchForm extends Component {
  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm}>
          <button type="submit" className={css.SearchForm__button}>
            <span className={css.SearchForm__button__label}></span>
            <BsSearch color="black" size="24px" />
          </button>

          <input
            className={css.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
