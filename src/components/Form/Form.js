import React from 'react';
import './Form.css';

function Form(props) {
  return (
    <form className="form" name={props.formName}>
      <label className="form__label">
        <p className="form__text">Имя</p>
        <input className="form__input" name={props.formName} id="name-input"/>
        <span className="form__error" id="name-input-error">vvv</span>
      </label>
      <label className="form__label">
        <p className="form__text">E-mail</p>
        <input className="form__input" name={props.formName} id="email-input"/>
        <span className="form__error" id="email-input-error">vvv</span>
      </label>
      <label className="form__label">
        <p className="form__text">Пароль</p>
        <input className="form__input" name={props.formName} id="password-input" />
        <span className="form__error" id="password-input-error">vvv</span>
      </label>
    </form>
  );
}

export default Form;
