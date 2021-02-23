import React from 'react';
import './Login.css';

import Header from '../Header/Header';
import Form from '../Form/Form';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import { dataInputsLogin } from '../../utils/constants';

function Login(props) {
  return (
  <>
    <Header />
    <section className="login">
      <div className="login__column">
        <Form formName="login-user" inputs={dataInputsLogin} />
        <div className="login__air-block"></div>
        <ButtonSubmit
          buttonText="Войти"
          text="Ещё не зарегистрированы?"
          link__link="./signup"
          link__text="Регистрация"
        />
      </div>
    </section>
  </>
  );
}

export default Login;
