import React from 'react';
import './SavedMovies.css';

import { useRouteMatch } from 'react-router-dom';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
  const { path } = useRouteMatch();
  React.useEffect(() => {
    localStorage.setItem('path', path);
  }, []);

  const [filterSavedMovies, setFilterSavedMovies] = React.useState('');

  function filterReadyMovies(string, shortMovieIs) {
    const filtReadyMovies = props.savedMovies.filter((movie) => {
      return (movie.nameRU.indexOf(string) > -1) && ((movie.duration > 40) !== shortMovieIs);
    });
    setFilterSavedMovies(filtReadyMovies);
  }

  React.useEffect(() => {
    // props.getSavedMovies();
    props.getSavedMovies();
    // filterReadyMovies('', true);
    // console.log(props.savedMovies);
  }, []);

  return (
    <div className="movies">
      <Header />
      <SearchForm filterReadyMovies={filterReadyMovies}/>
      <MoviesCardList cards={filterSavedMovies === '' ? props.savedMovies : filterSavedMovies} type={'saved-movies'} deleteMovie={props.deleteMovie}/>
      <Footer />
    </div>
  );
}

export default SavedMovies;
