import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import css from './Searchbar.module.css';

export default class SearchForm extends Component {
  state = {
    searchInput: '',
  };

  handleInput = e => {
    this.setState({ searchInput: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.searchInput.trim() === '') {
      this.reset();
      return alert('Fill the form to find something');
    }
    this.props.onSubmit(this.state.searchInput);
    this.reset();
  };

  reset = () => {
    this.setState({ searchInput: '' });
  };

  render() {
    return (
      <header className={css.Searchbar} onSubmit={this.onSubmit}>
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
            onChange={this.handleInput}
            value={this.state.searchInput}
          />
        </form>
      </header>
    );
  }
}
