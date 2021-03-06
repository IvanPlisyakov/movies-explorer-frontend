import React from 'react';
import './ButtonSubmit.css';

import { Link } from 'react-router-dom';

function ButtonSubmit(props) {
  return (
    <div className="button-submit">
      <button className="button-submit__button" onClick={props.handleSubmit}>{props.buttonText}</button>
      <div className={'button-submit__add'}>
        {props.text && <p className="button-submit__add-text">{props.text}</p>}
        { props.link__link && props.link__text
          && <Link className="button-submit__add-link" to={props.link__link === undefined ? '/' : props.link__link }>{props.link__text}</Link>
        }
      </div>
    </div>
  );
}

export default ButtonSubmit;
