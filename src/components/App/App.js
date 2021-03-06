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
// api
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';

const massCards = [
  {
    image: 'https://sun9-69.userapi.com/g-fuJN4BiDOSrBJOQ6LzvFdB85NqhfeWPn_x5w/A4KhXjMGf_s.jpg',
    duration: 127,
    nameRU: 'Котики',
    saved: true,
  },
  {
    image: 'https://demotivation.ru/wp-content/uploads/2020/04/100325-yana.jpg',
    duration: 54,
    nameRU: 'ФФФФ',
    saved: false,
  },
  {
    image: 'https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotikov-60.jpg',
    duration: 127,
    nameRU: 'ФФФФФФФФФФФФФФФФФФФФФФФФФФФ vr ФФФФФФФФФФФФФФФФФФФФФФФФФФФ ФФФФФФФФФФФФФФФФФФФФФФФФФФФ ФФФФФФФФФФФФФФФФФФФФФФФФФФФ ФФФФФФФФФФФФФФФФФФФФФФФФФФФ ФФФФФФФФФФФФФФФФФФФФФФФФФФФ',
    saved: false,
  },
  {
    image: 'https://demotivation.ru/wp-content/uploads/2020/04/100325-yana.jpg',
    duration: 54,
    nameRU: 'ФФФФФФФФФФФФФФФФФФФФФФФФФФФ vr ФФФФФФФФФФФФФФФФФФФФФФФФФФФ ФФФФФФФФФФФФФФФФФФФФФФФФФФФ ФФФФФФФФФФФФФФФФФФФФФФФФФФФ ФФФФФФФФФФФФФФФФФФФФФФФФФФФ ФФФФФФФФФФФФФФФФФФФФФФФФФФФ',
    saved: true,
  },
];

const massSavedCards = [
  {
    image: 'https://sun9-69.userapi.com/g-fuJN4BiDOSrBJOQ6LzvFdB85NqhfeWPn_x5w/A4KhXjMGf_s.jpg',
    duration: 127,
    nameRU: 'Котики',
  },
  {
    image: 'https://demotivation.ru/wp-content/uploads/2020/04/100325-yana.jpg',
    duration: 54,
    nameRU: 'ФФФФ',
  },
];

function App() {
  function sendStandartCatch(err) {
    console.log(err);
  }

  const history = useHistory();

  const [loggedIn, setLoggedIn] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({});

  function handleLogin() {
    setLoggedIn(true);
  }

  function getUserData() {
    mainApi.getContent()
      .then((res) => {
        setCurrentUser(res);
      });
  }

  function handleSubmitLogin(inputData) {
    mainApi.authorize(inputData.email, inputData.password)
      .then((data) => {
        /* if (!data) {
          handleInfoTooltipBadlyOpen();
        } */
        if (data.token) {
          // handleInfoTooltipOkOpen();
          handleLogin();
          history.push('/movies');
          getUserData();
        }
      })
      .catch((err) => { console.log(err); });
  }

  function handleSubmitRegister(inputData) {
    mainApi.register(inputData.name, inputData.email, inputData.password)
      .then((res) => {
        if (res) {
          // handleInfoTooltipOkOpen();
          history.push('/signin');
        } else {
          // handleInfoTooltipBadlyOpen();
        }
      });
  }

  function tokenCheck() {
    if (localStorage.getItem('jwt')) {
      mainApi.getContent()
        .then((userData) => {
          setCurrentUser(userData);
          setLoggedIn(true);
          history.push('/movies');
        });
    } else {
      setLoggedIn(false);
    }
  }

  React.useEffect(() => {
    tokenCheck();
  }, []);

  const [preloaderMoviesIsActive, setPreloaderMoviesIsActive] = React.useState(false);

  const [savedMovies, setSavedMovies] = React.useState([]);

  function getSavedMovies() {
    moviesApi.getInitialSavedMovies()
      .then((data) => {
        console.log(data);
        setSavedMovies(data);
      })
      .catch((err) => { sendStandartCatch(err); });
  }

  function getMovies() {
    setPreloaderMoviesIsActive(true);
    return moviesApi.getInitialMovies()
      .then((data) => {
        setPreloaderMoviesIsActive(false);
        return data;
      })
      .catch((err) => { sendStandartCatch(err); });
  }

  function getSavedMoviesPromise() {
    return moviesApi.getInitialSavedMovies()
      .then((data) => data)
      .catch((err) => { sendStandartCatch(err); });
  }

  const [readyMovies, setReadyMovies] = React.useState([]);
  const [quantityMovies, setQuantityMovies] = React.useState(100);

  const [screenWidth, setScreenWidth] = React.useState(document.documentElement.clientWidth);
  function handleWindowResize() {
    setScreenWidth(document.documentElement.clientWidth);
  }
  window.addEventListener('resize', handleWindowResize);

  /* function countingNumberMovies(variable, callback) {
    if (variable === 0) {
      switch (true) {
        case screenWidth >= 1262:
          return callback(12);
        case screenWidth <= 1262 && screenWidth >= 740:
          return callback(8);
        default:
          return callback(5);
      }
    }

    switch (true) {
      case screenWidth >= 1262:
        return callback(variable + 33);
      case screenWidth <= 1262 && screenWidth >= 740:
        return callback(variable + 2);
      default:
        return callback(variable + 2);
    }
  } */

  function getAllMovies() {
    Promise.all([getMovies(), getSavedMoviesPromise()])
      .then((res) => {
        setReadyMovies(res[0].map((movie) => {
          const savedIs = res[1].some((savedMovie) => Number(movie.id) === Number(savedMovie.id));

          movie.saved = savedIs;
          return movie;
        }));
      });
  }

  function saveMovie(movie) {
    moviesApi.saveMovie(movie)
      .then((data) => {
        console.log(data);
      });
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
      });
  }

  /* React.useEffect(() => {
    // getMovies();
    console.log(getSavedMovies());
  }, []); */

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
      </div>
    </LoggedInContext.Provider>
  </CurrentUserContext.Provider>
  );
}

export default App;
