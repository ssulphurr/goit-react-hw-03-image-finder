import React, { Component } from 'react';
import css from './App.module.css';
import SearchForm from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Buttom';

export class App extends Component {
  state = {
    searchInput: '',
    page: 1,
  };

  handleFormSubmit = searchInput => {
    this.setState({ searchInput });
  };

  increasePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div className={css.App}>
        <SearchForm onSubmit={this.handleFormSubmit} />
        <ImageGallery
          searchInput={this.state.searchInput}
          page={this.state.page}
        />
        {this.state.searchInput && <Button onClick={this.increasePage} />}
      </div>
    );
  }
}
