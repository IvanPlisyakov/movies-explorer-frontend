import React from 'react';
import './Movies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function Movies(props) {
  const [preloaderIsActive, setPreloaderIsActive] = React.useState(true);

  return (
    <div className="movies">
      <Header />
      <SearchForm />
      {preloaderIsActive === true
        ? <MoviesCardList cards={props.cards} type={'movies'} />
        : <Preloader />
      }
      <Footer />
    </div>
  );
}

export default Movies;
