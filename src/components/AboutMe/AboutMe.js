import React from 'react';
import './AboutMe.css';

import { TranslationContext } from '../../contexts/translationContext.js';
import { translations } from '../../utils/constants.js';

import ImageMe from '../../images/about-me__image.jpg';// ../../images/

function AboutMe() {
  const translationContext = React.useContext(TranslationContext);
  return (
    <section className="about-me">
      <div className="about-project__column">
        <div className="about-project__header">
          <h2 className="about-project__title">{translations[translationContext].main.aboutMe[0]}</h2>
        </div>
        <div className="about-me__me">
          <div className="about-me__text">
            <h3 className="about-me__text-name">{translations[translationContext].main.aboutMe[1]}</h3>
            <p className="about-me__text-info">{translations[translationContext].main.aboutMe[2]}</p>
            <p className="about-me__text-about">{translations[translationContext].main.aboutMe[3]}</p>
          </div>
          <img className="about-me__image" src={ImageMe} alt="Фотография Ивана" />
          <div className="about-me__links">
            <a className="about-me__link" href="https://vk.com/vanishx9" target="_blank" rel="noreferrer">VK</a>
            <a className="about-me__link" href="https://github.com/IvanPlisyakov" target="_blank" rel="noreferrer">Github</a>
          </div>
        </div>
        <h4 className="about-me__portfolio">{translations[translationContext].main.aboutMe[4]}</h4>
        <div className="about-me__portfolio-links">
          <a className="about-me__portfolio-link" href="https://ivanplisyakov.github.io/how-to-learn/" target="_blank" rel="noreferrer">
            <p className="about-me__portfolio-text">{translations[translationContext].main.aboutMe[5]}</p>
            <p className="about-me__portfolio-icon">&#8599;</p>
          </a>
          <a className="about-me__portfolio-link" href="https://ivanplisyakov.github.io/russian-travel/" target="_blank" rel="noreferrer">
            <p className="about-me__portfolio-text">{translations[translationContext].main.aboutMe[6]}</p>
            <p className="about-me__portfolio-icon">&#8599;</p>
          </a>
          <a className="about-me__portfolio-link" href="https://ivanplisyakov.github.io/mesto/" target="_blank" rel="noreferrer">
            <p className="about-me__portfolio-text">{translations[translationContext].main.aboutMe[7]}</p>
            <p className="about-me__portfolio-icon">&#8599;</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
