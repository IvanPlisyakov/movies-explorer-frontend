import React from 'react';
import './Movies.css';

import { useRouteMatch } from 'react-router-dom';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function Movies(props) {
  const { path } = useRouteMatch();
  React.useEffect(() => {
    localStorage.setItem('path', path);
  }, []);

  const [screenWidth, setScreenWidth] = React.useState(document.documentElement.clientWidth);
  function handleWindowResize() {
    setScreenWidth(document.documentElement.clientWidth);
  }
  window.addEventListener('resize', handleWindowResize);

  function handleButtonSave(card) {
    const movie = {
      id: String(card.id),
      country: String(card.country),
      director: String(card.director),
      duration: String(card.duration),
      year: String(card.year),
      description: String(card.description),
      image: `https://api.nomoreparties.co${card.image.url}`,
      trailer: String(card.trailerLink),
      thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`,
      nameRU: String(card.nameRU),
      nameEN: String(card.nameEN),
    };
    console.log(movie);
    props.saveMovie(movie);
  }

  const [filterMovies, setFilterMovies] = React.useState('');

  const [preloaderReadyMoviesIsActive, setPreloaderReadyMoviesIsActive] = React.useState(false);

  function filterReadyMovies(string, shortMovieIs) {
    setPreloaderReadyMoviesIsActive(true);
    const filtReadyMovies = props.readyMovies.filter((movie) => {
      return (movie.nameRU.indexOf(string) > -1) && ((movie.duration > 40) !== shortMovieIs);
    });
    setFilterMovies(filtReadyMovies);
    setTimeout(setPreloaderReadyMoviesIsActive, 500, false);
  }

  const [quantityMovies, setQuantityMovies] = React.useState(0);

  function countingNumberMovies() {
    if (quantityMovies === 0) {
      switch (true) {
        case screenWidth >= 1262:
          return setQuantityMovies(12);
        case screenWidth <= 1262 && screenWidth >= 740:
          return setQuantityMovies(8);
        default:
          return setQuantityMovies(5);
      }
    }

    switch (true) {
      case screenWidth >= 1262:
        return setQuantityMovies(quantityMovies + 3);
      case screenWidth <= 1262 && screenWidth >= 740:
        return setQuantityMovies(quantityMovies + 2);
      default:
        return setQuantityMovies(quantityMovies + 2);
    }
  }

  React.useEffect(() => {
    countingNumberMovies();
    props.getAllMovies();
  }, []);

  function returnMoviesContent() {
    if ((props.preloaderMoviesIsActive && preloaderReadyMoviesIsActive)
      || preloaderReadyMoviesIsActive) {
      return <Preloader />;
    }
    if (typeof filterMovies === 'string') {
      return <p className="movies__text movies__text_opacity">Пожалуйста, сделайте запрос</p>;
    }
    if (filterMovies.slice(0, quantityMovies).length === 0) {
      console.log(filterMovies);
      return <p className="movies__text">Фильмы не найдены</p>;
    }
    return <MoviesCardList cards={filterMovies.slice(0, quantityMovies)} handleButtonSave={handleButtonSave} type={'movies'} />;
  }

  const content = returnMoviesContent();

  return (
    <div className="movies">
      <Header />
      <SearchForm filterReadyMovies={filterReadyMovies}/>
      {content}
      {props.preloaderMoviesIsActive
      || filterMovies.length <= quantityMovies
        ? <></>
        : <button className="movies__more" onClick={countingNumberMovies}>Ещё</button>
      }
      <Footer />
    </div>
  );
}

export default Movies;

/*
  function countingNumberMovies() {
    if (quantityMovies === 0) {
      switch (true) {
        case screenWidth >= 1262:
          return setQuantityMovies(12);
        case screenWidth <= 1262 && screenWidth >= 740:
          return setQuantityMovies(8);
        default:
          return setQuantityMovies(5);
      }
    }

    switch (true) {
      case screenWidth >= 1262:
        return setQuantityMovies(quantityMovies + 3);
      case screenWidth <= 1262 && screenWidth >= 740:
        return setQuantityMovies(quantityMovies + 2);
      default:
        return setQuantityMovies(quantityMovies + 2);
    }
  }

  function getReadyMovies() {
    countingNumberMovies();
    console.log(readyMovies);
    setCountMovies(readyMovies.slice(0, quantityMovies));
    console.log(countMovies);
  }

  function createReadyMovies(moviesData, savedMoviesData) {
    const rdyMovies = moviesData.map((movie) => {
      const savedIs = savedMoviesData
        .some((savedMovie) => Number(movie.id) === Number(savedMovie.id));

      movie.saved = savedIs ? true : false;
      return movie;
    });
    console.log(rdyMovies);
    return Promise.resolve()
      .then(() => {
        setReadyMovies(rdyMovies);
        return 'foo';
      });
  }
*/

/*
function createReadyMovies(moviesData, savedMoviesData) {
    const rdyMovies = moviesData.map((movie) => {
      const savedIs = savedMoviesData
        .some((savedMovie) => Number(movie.id) === Number(savedMovie.id));

      movie.saved = savedIs ? true : false;
      return movie;
    });

    countingNumberMovies();
    console.log(quantityMovies);
    setReadyMovies(rdyMovies.slice(0, 12));
  } */
