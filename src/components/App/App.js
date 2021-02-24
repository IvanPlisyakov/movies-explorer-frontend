import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';// ../contexts/CurrentUserContext.js
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

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
  const [currentUser, setCurrentUser] = React.useState({
    name: 'соска Вера',
    email: 'dotaboss2017@mail.ru',
    loggedIn: true,
  });

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies cards={massCards} />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies cards={massSavedCards} />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
