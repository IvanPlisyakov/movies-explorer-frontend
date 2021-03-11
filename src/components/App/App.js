import React from 'react';
import {
  Route, Switch, useHistory,
} from 'react-router-dom';
import './App.css';
// context
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { LoggedInContext } from '../../contexts/LoggedInContext.js';
// components
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
// api
import { MainApi } from '../../utils/MainApi';
import { MoviesApi } from '../../utils/MoviesApi';

function App() {
  // api errors
  const [infoTooltip, setInfoTooltip] = React.useState({ isOpen: false, isCare: false, text: '' });

  function closeInfoTooltip() {
    setInfoTooltip({ isOpen: true, isCare: true, text: infoTooltip.text });
    setTimeout(setInfoTooltip, 0.9 * 1000, { isOpen: false, isCare: false, text: '' });
  }

  function openInfoTooltip(text) {
    setInfoTooltip({ isOpen: true, isCare: false, text });
    setTimeout(closeInfoTooltip, 10 * 1000);
  }
  // api
  const mainApi = new MainApi({
    baseUrl: 'https://api.deadinside.students.nomoredomains.monster', // 'https://auth.nomoreparties.co', // 'http://localhost:3000',//'http://motherShaker.students.nomoredomains.monster',//'https://auth.nomoreparties.co',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }, openInfoTooltip);

  const moviesApi = new MoviesApi({
    baseUrlBeatFilm: 'https://api.nomoreparties.co/beatfilm-movies', // 'http://localhost:3000',//'http://motherShaker.students.nomoredomains.monster',//'https://auth.nomoreparties.co',
    baseUrl: 'https://api.deadinside.students.nomoredomains.monster',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }, openInfoTooltip);

  function sendStandartCatch(err) {
    console.log(err);
  }
  // help
  const history = useHistory();
  // userData api
  const [currentUser, setCurrentUser] = React.useState({});

  const [loggedIn, setLoggedIn] = React.useState(false);
  function handleLogin() {
    setLoggedIn(true);
  }

  function getUserData() {
    mainApi.getContent()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => sendStandartCatch(err));
  }

  function handleSubmitLogin(inputData) {
    return mainApi.authorize(inputData.email, inputData.password)
      .then((data) => {
        if (data !== undefined) {
          if (data.token) {
            handleLogin();
            history.push('/movies');
            getUserData();
            return;
          }
        }

        openInfoTooltip('Неправлильные почта или пароль');
      })
      .catch((err) => sendStandartCatch(err));
  }

  function handleSubmitRegister(inputData) {
    return mainApi.register(inputData.name, inputData.email, inputData.password)
      .then((res) => {
        if (res) {
          history.push('/signin');
        }
      })
      .catch((err) => sendStandartCatch(err));
  }

  function changeUser(email, name) {
    mainApi.changeProfile(email, name)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => sendStandartCatch(err));
  }

  function tokenCheck() {
    if (localStorage.getItem('jwt')) {
      mainApi.getContent()
        .then((userData) => {
          setCurrentUser(userData);
          setLoggedIn(true);
          // history.push('/movies');
          if (localStorage.getItem('path')) {
            history.push(localStorage.getItem('path'));
          }
        });
    } else {
      setLoggedIn(false);
    }
  }

  React.useEffect(() => {
    tokenCheck();
  }, []);
  // moviesData api
  const [preloaderMoviesIsActive, setPreloaderMoviesIsActive] = React.useState(false);

  const [savedMovies, setSavedMovies] = React.useState([]);

  function getSavedMovies() {
    moviesApi.getInitialSavedMovies()
      .then((data) => {
        console.log(data);
        setSavedMovies(data);
      })
      .catch((err) => sendStandartCatch(err));
  }

  function getMovies() {
    setPreloaderMoviesIsActive(true);
    return moviesApi.getInitialMovies()
      .then((data) => {
        setPreloaderMoviesIsActive(false);
        return data;
      })
      .catch((err) => sendStandartCatch(err));
  }

  function getSavedMoviesPromise() {
    return moviesApi.getInitialSavedMovies()
      .then((data) => data)
      .catch((err) => sendStandartCatch(err));
  }

  const [readyMovies, setReadyMovies] = React.useState([]);

  function getAllMovies() {
    if (!localStorage.getItem('movies')) {
      Promise.all([getMovies(), getSavedMoviesPromise()])
        .then((res) => {
          const rdyMovies = res[0].map((movie) => {
            const savedIs = res[1].some((savedMovie) => Number(movie.id) === Number(savedMovie.id));

            movie.saved = savedIs;
            return movie;
          });
          setReadyMovies(rdyMovies);
          localStorage.setItem('movies', JSON.stringify(rdyMovies));
        })
        .catch((err) => sendStandartCatch(err));
    } else {
      setReadyMovies(JSON.parse(localStorage.getItem('movies')));
    }
  }

  function saveMovie(movie) {
    return moviesApi.saveMovie(movie)
      .then((data) => {
        /* const newReadyMovies = readyMovies;

        newReadyMovies[data.id].saved = true;
        console.log(newReadyMovies[data.id]);
        setReadyMovies(newReadyMovies);
        console.log(newReadyMovies); */
        console.log(data);
      })
      .catch((err) => sendStandartCatch(err));
  }

  function deleteMovie(idMovie) {
    moviesApi.deleteMovie(idMovie)
      .then((movie) => {
        if (movie) {
          const newSavedCards = savedMovies.filter((c) => {
            return c._id !== idMovie;
          });
          setSavedMovies(newSavedCards);
        }
        return Promise.reject(`Ошибка`);
      })
      .catch((err) => sendStandartCatch(err));
  }
  // path
  React.useEffect(() => {
    if (loggedIn) {
      history.push(localStorage.getItem('path'));
    }
  }, []);
  return (
  <CurrentUserContext.Provider value={currentUser}>
    <LoggedInContext.Provider value={loggedIn}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <ProtectedRoute exact
            redirect='/signin'
            stateLogin={true}
            path="/movies"
            preloaderMoviesIsActive={preloaderMoviesIsActive}
            readyMovies={readyMovies}
            getAllMovies={getAllMovies}
            saveMovie={saveMovie}
            component={Movies}
          />
          <ProtectedRoute exact
            redirect='/signin'
            stateLogin={true}
            path="/saved-movies"
            deleteMovie={deleteMovie}
            getSavedMovies={getSavedMovies}
            component={SavedMovies}
            savedMovies={savedMovies}
          />
          <ProtectedRoute exact
            redirect='/signin'
            stateLogin={true}
            path="/profile"
            setLoggedIn={setLoggedIn}
            changeUser={changeUser}
            component={Profile}
          />
          <ProtectedRoute exact
            redirect='/movies'
            stateLogin={false}
            path="/signup"
            handleSubmitLogin={handleSubmitRegister}
            component={Register}
          />
          <ProtectedRoute exact
            redirect='/movies'
            stateLogin={false}
            path="/signin"
            handleSubmitLogin={handleSubmitLogin}
            component={Login}
          />
          <Route path="*">
           <PageNotFound />
          </Route>
        </Switch>
        <InfoTooltip
          isOpen={infoTooltip.isOpen}
          isCare={infoTooltip.isCare}
          text={infoTooltip.text}
          closeInfoTooltip={closeInfoTooltip}
        />
      </div>
    </LoggedInContext.Provider>
  </CurrentUserContext.Provider>
  );
}

export default App;
