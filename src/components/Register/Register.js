import React from 'react';
import './Register.css';

import Header from '../Header/Header';
import Form from '../Form/Form';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import { dataInputsRegister } from '../../utils/constants';

function Register(props) {
  return (
  <>
    <Header />
    <section className="register">
      <div className="register__column">
        <Form formName="create-user" inputs={dataInputsRegister} />
        <div className="register__air-block"></div>
        <ButtonSubmit
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
