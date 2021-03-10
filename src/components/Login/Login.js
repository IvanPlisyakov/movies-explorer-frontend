import React from 'react';
import './Login.css';

import Header from '../Header/Header';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';

function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const [formDisabledActive, setFormDisabledActive] = React.useState(false);

  function blockingForm() {
    setFormDisabledActive(true);
  }

  function unlockingForm() {
    setFormDisabledActive(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    blockingForm();

    props.handleSubmitLogin({
      email,
      password,
    })
      .then(() => {
        unlockingForm();
      });
  }
  return (
  <>
    <Header />
    <section className="login">
      <div className="login__column">
      <form className="form" name="login">
          <label className="form__label">
            <p className="form__text">E-mail</p>
            <input
              className={`form__input ${formDisabledActive ? 'form__input_disabled' : ''}`}
              name="login"
              id="email-input"
              type="email"
              value={email}
              onChange={handleEmailChange}
              disabled={formDisabledActive}
              required
            />
            <span className="form__error" id="email-input-error"></span>
          </label>
          <label className="form__label">
            <p className="form__text">Пароль</p>
            <input
              className={`form__input ${formDisabledActive ? 'form__input_disabled' : ''}`}
              name="login"
              id="password-input"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              disabled={formDisabledActive}
              required
            />
            <span className="form__error" id="password-input-error"></span>
          </label>
          <div className="login__air-block"></div>
          <ButtonSubmit
            handleSubmit={handleSubmit}
            buttonText="Войти"
            text="Ещё не зарегистрированы?"
            link__link="./signup"
            link__text="Регистрация"
            disabled={formDisabledActive}
          />
        </form>
      </div>
    </section>
  </>
  );
}

export default Login;
