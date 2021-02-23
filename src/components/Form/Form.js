import React from 'react';
import './Form.css';

function Form(props) {
  return (
    <form className="form" name={props.formName}>
      {props.inputs.map((input, i) => (
          <label className="form__label" key={i}>
            <p className="form__text">{input.text}</p>
            <input className={`form__input ${input.addClass}`} name={props.formName} {...input.inputKeys} />
            <span className="form__error" id={`${input.inputKeys.id}-error`}>vvv</span>
          </label>
      ))}
    </form>
  );
}

export default Form;
