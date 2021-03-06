class MainApi {
  constructor(data) {
    this._baseUrl = data.baseUrl;
    this._headers = data.headers;
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
      .then((response) => {
        console.log(response);
        try {
          if (response.status === 201) {
            return response.json();
          }
        } catch (e) {
          return (e);
        }
      })
      .then((res) => res)
      .catch((err) => console.log(err));
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
      .then(((response) => response.json()))
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          return data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getContent() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  }
}

export const mainApi = new MainApi({
  baseUrl: 'https://api.deadinside.students.nomoredomains.monster', // 'https://api.deadinside.students.nomoredomains.monster', // 'http://localhost:3000',//'http://motherShaker.students.nomoredomains.monster',//'https://auth.nomoreparties.co',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
