import React from 'react';
import './Register.css';

import Header from '../Header/Header';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';

function Register(props) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [nameError, setNameError] = React.useState('Заполните это поле.');
  const [emailError, setEmailError] = React.useState('Заполните это поле.');
  const [passwordError, setPasswordError] = React.useState('Заполните это поле.');

  function checkButtonDisabled() {
    return (passwordError === '' && emailError === '' && nameError === '');
  }
  const submitButtonDisabled = checkButtonDisabled();

  function handleNameChange(e) {
    setName(e.target.value);
    setNameError(e.target.validationMessage);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
    setEmailError(e.target.validationMessage);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
    setPasswordError(e.target.validationMessage);
  }

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
      name,
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
    <section className="register">
      <div className="register__column">
        <form className="form" name="registration">
          <label className="form__label">
            <p className="form__text">Имя</p>
            <input
              className={`form__input ${formDisabledActive ? 'form__input_disabled' : ''}`}
              name="registration"
              id="name-input"
              type="text"
              value={name}
              onChange={handleNameChange}
              disabled={formDisabledActive}
              minLength="2"
              maxLength="30"
              required
            />
            <span className="form__error" id="name-input-error">{nameError}</span>
          </label>
          <label className="form__label">
            <p className="form__text">E-mail</p>
            <input
              className={`form__input ${formDisabledActive ? 'form__input_disabled' : ''}`}
              name="registration"
              id="email-input"
              type="email"
              value={email}
              onChange={handleEmailChange}
              disabled={formDisabledActive}
              required
            />
            <span className="form__error" id="email-input-error">{emailError}</span>
          </label>
          <label className="form__label">
            <p className="form__text">Пароль</p>
            <input className={`form__input ${formDisabledActive ? 'form__input_disabled' : ''}`}
              name="registration"
              id="password-input"
              type="password"
              minLength="8"
              value={password}
              onChange={handlePasswordChange}
              disabled={formDisabledActive}
              required
            />
            <span className="form__error" id="password-input-error">{passwordError}</span>
          </label>
          <div className="register__air-block"></div>
          <ButtonSubmit
            handleSubmit={handleSubmit}
            buttonText="Зарегистрироваться"
            text="Уже зарегистрированы?"
            link__link="./signin"
            link__text="Войти"
            disabled={formDisabledActive || !submitButtonDisabled}
          />
        </form>
      </div>
    </section>
  </>
  );
}

export default Register;
