export class MoviesApi {
  constructor(data, errorCallback) {
    this._baseUrlBeatFilm = data.baseUrlBeatFilm;
    this._baseUrl = data.baseUrl;
    this._headers = data.headers;
    this._errorCallback = errorCallback;
  }

  _standartErrorThen(res) {
    switch (res.status) {
      case 400:
        this._errorCallback('Ошибка валидации');
        return;
      case 401:
        this._errorCallback('Пользователь не авторизован');
        return;
      case 404:
        this._errorCallback('Ресурс не найден');
        return;
      case 409:
        this._errorCallback('Конфликт на сервере');
        return;
      default:
        this._errorCallback('Ошибка на сервере');
        return;
    }
  }

  _standartThen(res) {
    if (Number(res.status) >= 200 && Number(res.status) < 300) {
      return res.json();
    }

    this._standartErrorThen(res);
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _sendStandartCatch(err) {
    console.log(err);
  }

  getInitialMovies() {
    return fetch(`${this._baseUrlBeatFilm}`, {
      method: 'GET',
      headers: {
        ...this._headers,
      },
    })
      .then((response) => this._standartThen(response))
      .catch((err) => this._sendStandartCatch(err));
  }

  getInitialSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((response) => this._standartThen(response))
      .catch((err) => this._sendStandartCatch(err));
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
      .then((response) => this._standartThen(response))
      .catch((err) => this._sendStandartCatch(err));
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((response) => this._standartThen(response))
      .catch((err) => this._sendStandartCatch(err));
  }
}

/* export const moviesApi = new MoviesApi({
  baseUrlBeatFilm: 'https://api.nomoreparties.co/beatfilm-movies', // 'http://localhost:3000',//'http://motherShaker.students.nomoredomains.monster',//'https://auth.nomoreparties.co',
  baseUrl: 'https://api.deadinside.students.nomoredomains.monster', // 'https://api.deadinside.students.nomoredomains.monster',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}); */
