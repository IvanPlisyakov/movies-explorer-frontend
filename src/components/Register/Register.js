import React from 'react';
import './Register.css';

import Header from '../Header/Header';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';

function Register(props) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  function clearInputs() {
    setName('');
    setEmail('');
    setPassword('');
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.handleSubmitLogin({
      name,
      email,
      password,
    });

    clearInputs();
  }

  return (
  <>
    <Header />
    <section className="register">
      <div className="register__column">
        <form className="form" name="registration">
          <label className="form__label">
            <p className="form__text">Имя</p>
            <input className="form__input" name="registration" id="name-input" type="text" value={name} onChange={handleNameChange}/>
            <span className="form__error" id="name-input-error"></span>
          </label>
          <label className="form__label">
            <p className="form__text">E-mail</p>
            <input className="form__input" name="registration" id="email-input" type="email" value={email} onChange={handleEmailChange}/>
            <span className="form__error" id="email-input-error"></span>
          </label>
          <label className="form__label">
            <p className="form__text">Пароль</p>
            <input className="form__input" name="registration" id="password-input" type="password" value={password} onChange={handlePasswordChange}/>
            <span className="form__error" id="password-input-error"></span>
          </label>
        </form>
        <div className="register__air-block"></div>
        <ButtonSubmit
          handleSubmit={handleSubmit}
          buttonText="Зарегистрироваться"
          text="Уже зарегистрированы?"
          link__link="./signin"
          link__text="Войти"
        />
      </div>
    </section>
  </>
  );
}

export default Register;
