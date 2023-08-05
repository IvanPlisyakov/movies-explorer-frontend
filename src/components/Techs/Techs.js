import React from 'react';

import './Techs.css';

import { TranslationContext } from '../../contexts/translationContext.js';
import { translations } from '../../utils/constants.js';

function Techs() {
  const translationContext = React.useContext(TranslationContext);
  return (
    <section className="techs">
      <div className="about-project__column about-project__column_padding_techs">
        <div className="about-project__header">
          <h2 className="about-project__title">{translations[translationContext].main.techs[0]}</h2>
        </div>
        <h2 className="techs__title">7 {translations[translationContext].main.techs[1]}</h2>
        <p className="techs__subtitle">{translations[translationContext].main.techs[2]}</p>
        <div className="techs__items">
          <div className="techs__item"><p className="techs__item-text">HTML</p></div>
          <div className="techs__item"><p className="techs__item-text">CSS</p></div>
          <div className="techs__item"><p className="techs__item-text">JS</p></div>
          <div className="techs__item"><p className="techs__item-text">React</p></div>
          <div className="techs__item"><p className="techs__item-text">Git</p></div>
          <div className="techs__item"><p className="techs__item-text">Express.js</p></div>
          <div className="techs__item"><p className="techs__item-text">mongoDB</p></div>
        </div>
      </div>
    </section>
  );
}

export default Techs;
