class MoviesApi {
  constructor(data) {
    this._baseUrlBeatFilm = data.baseUrlBeatFilm;
    this._baseUrl = data.baseUrl;
    this._headers = data.headers;
  }

  _sendStandartThen(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _sendStandartCatch(err) {
    console.log(err);
  }

  /* _renderLoading(isLoading, func) {
    if (isLoading) {
      func(true);
    } else {
      func(false);
    }
  } */

  getInitialMovies() {
    // this._renderLoading(true, renderFunc);
    return fetch(`${this._baseUrlBeatFilm}`, {
      method: 'GET',
      headers: {
        ...this._headers,
      },
    })
      .then((res) => this._sendStandartThen(res))
      .catch((err) => { this._sendStandartCatch(err); });
  /* .finally(() => {
        //   this._renderLoading(false, renderFunc);
        }); */
  }

  getInitialSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((res) => this._sendStandartThen(res))
      .catch((err) => { this._sendStandartCatch(err); });
  }

  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify(movie),
    })
      .then((res) => this._sendStandartThen(res))
      .catch((err) => { this._sendStandartCatch(err); });
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((res) => this._sendStandartThen(res))
      .catch((err) => { this._sendStandartCatch(err); });
  }
}

export const moviesApi = new MoviesApi({
  baseUrlBeatFilm: 'https://api.nomoreparties.co/beatfilm-movies', // 'http://localhost:3000',//'http://motherShaker.students.nomoredomains.monster',//'https://auth.nomoreparties.co',
  baseUrl: 'https://api.deadinside.students.nomoredomains.monster', // 'https://api.deadinside.students.nomoredomains.monster',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
