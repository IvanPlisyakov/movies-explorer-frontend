import React from 'react';
import './AboutProject.css';

import { TranslationContext } from '../../contexts/translationContext.js';
import { translations } from '../../utils/constants.js';

function AboutProject() {
  const translationContext = React.useContext(TranslationContext);
  return (
    <section className="about-project">
      <div className="about-project__column">
        <div className="about-project__header">
          <h2 className="about-project__title">{translations[translationContext].main.aboutProject[0]}</h2>
        </div>
        <div className="about-project__info">
          <div className="about-project__overlay">
            <h3 className="about-project__info-title">{translations[translationContext].main.aboutProject[1]}</h3>
            <p className="about-project__info-subtitle">{translations[translationContext].main.aboutProject[3]}</p>
          </div>
          <div className="about-project__overlay">
            <h3 className="about-project__info-title">{translations[translationContext].main.aboutProject[2]}</h3>
            <p className="about-project__info-subtitle">{translations[translationContext].main.aboutProject[4]}</p>
          </div>
        </div>
        <div className="about-project__calendar">
          <div className="about-project__calendar-item about-project__calendar-item_one-week">1 {translations[translationContext].main.aboutProject[5]}</div>
          <div className="about-project__calendar-item about-project__calendar-item_four-week">4 {translations[translationContext].main.aboutProject[6]}</div>
          <div className="about-project__calendar-item about-project__calendar-item_end">Back-end</div>
          <div className="about-project__calendar-item about-project__calendar-item_end">Front-end</div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
