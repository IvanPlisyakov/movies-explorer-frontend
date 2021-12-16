import React from 'react';
import './Login.css';

import Header from '../Header/Header';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import { TranslationContext } from '../../contexts/translationContext.js';
import { translations } from '../../utils/constants.js';

function Login(props) {
  const translationContext = React.useContext(TranslationContext);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [passwordError, setPasswordError] = React.useState('Заполните это поле.');
  const [emailError, setEmailError] = React.useState('Заполните это поле.');

  function checkButtonDisabled() {
    return (passwordError === '' && emailError === '');
  }
  const submitButtonDisabled = checkButtonDisabled();

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
            <span className="form__error" id="email-input-error">{emailError}</span>
          </label>
          <label className="form__label">
            <p className="form__text">{translations[translationContext].sign[1]}</p>
            <input
              className={`form__input ${formDisabledActive ? 'form__input_disabled' : ''}`}
              name="login"
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
          <div className="login__air-block"></div>
          <ButtonSubmit
            handleSubmit={handleSubmit}
            buttonText={translations[translationContext].sign[4]}
            text={translations[translationContext].sign[5]}
            link__link="./signup"
            link__text={translations[translationContext].sign[6]}
            disabled={formDisabledActive || !submitButtonDisabled}
          />
        </form>
      </div>
    </section>
  </>
  );
}

export default Login;
