import React from 'react';
import './Register.css';

import Header from '../Header/Header';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';

import { FormValidator } from '../../utils/FormValidator';

const tuningValidation = {
  form: '.profile-form',
  inputTypeError: 'profile-form__user_type_error',
  inputErrorActive: 'profile-form__user-error_active',
  formInput: '.profile-form__user',
  formSubmit: '.profile-form__btn-save',
  buttonInctive: 'profile-form__btn-save_inactive',
};

function Register(props) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleNameChange = (e) => setName(e.target.value);
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
            <span className="form__error" id="name-input-error"></span>
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
            <span className="form__error" id="email-input-error"></span>
          </label>
          <label className="form__label">
            <p className="form__text">Пароль</p>
            <input className={`form__input ${formDisabledActive ? 'form__input_disabled' : ''}`}
              name="registration"
              id="password-input"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              disabled={formDisabledActive}
              required
            />
            <span className="form__error" id="password-input-error"></span>
          </label>
          <div className="register__air-block"></div>
          <ButtonSubmit
            handleSubmit={handleSubmit}
            buttonText="Зарегистрироваться"
            text="Уже зарегистрированы?"
            link__link="./signin"
            link__text="Войти"
            disabled={formDisabledActive}
          />
        </form>
      </div>
    </section>
  </>
  );
}

export default Register;
