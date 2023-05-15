import React, { Component } from 'react';
import css from './App.module.css';
import SearchForm from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchInput: '',
  };

  handleFormSubmit = searchInput => {
    this.setState({ searchInput });
  };

  render() {
    return (
      <div className={css.App}>
        <SearchForm onSubmit={this.handleFormSubmit} />
        <ImageGallery searchInput={this.state.searchInput} />
      </div>
    );
  }
}
