export class MainApi {
  constructor(data, errorCallback, lang) {
    this._baseUrl = data.baseUrl;
    this._headers = data.headers;
    this._errorCallback = errorCallback;
    this._lang = (lang === 'true');
  }

  _standartErrorThen(res) {
    switch (res.status) {
      case 400:
        this._errorCallback(this._lang ? 'Validation error' : 'Ошибка валидации');
        return;
      case 401:
        this._errorCallback(this._lang ? 'User is not authorised' : 'Пользователь не авторизован');
        return;
      case 404:
        this._errorCallback(this._lang ? 'Resource not found' : 'Ресурс не найден');
        return;
      case 409:
        this._errorCallback(this._lang ? 'Server conflict' : 'Конфликт на сервере');
        return;
      default:
        this._errorCallback(this._lang ? 'Error on the server' : 'Ошибка на сервере');
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

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: String(name),
        email: String(email),
        password: String(password),
      }),
    })
      .then((response) => this._standartThen(response))
      .catch((err) => this._sendStandartCatch(err));
  }

  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email: String(email),
        password: String(password),
      }),
    })
      .then((response) => this._standartThen(response))
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          return data;
        }

        return this._sendStandartCatch({ status: 404 });
      })
      .catch((err) => this._sendStandartCatch(err));
  }

  getContent() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((response) => this._standartThen(response))
      .catch((err) => this._sendStandartCatch(err));
  }

  changeProfile(email, name) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({
        email: String(email),
        name: String(name),
      }),
    })
      .then((response) => this._standartThen(response))
      .catch((err) => this._sendStandartCatch(err));
  }
}

/* export const mainApi = new MainApi({
  baseUrl: 'http://localhost:3001', // 'https://api.deadinside.students.nomoredomains.monster', // 'http://localhost:3000',//'http://motherShaker.students.nomoredomains.monster',//'https://auth.nomoreparties.co',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}); */
