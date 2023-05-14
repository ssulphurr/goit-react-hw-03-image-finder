import css from './App.module.css';
import SearchForm from './Searchbar/Searchbar';

export const App = () => {
  return (
    <div className={css.App}>
      <SearchForm />
    </div>
  );
};
