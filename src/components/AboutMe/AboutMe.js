import React from 'react';
import './AboutMe.css';

import ImageMe from '../../images/about-me__image.jpg';// ../../images/

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-project__column">
        <div className="about-project__header">
          <h2 className="about-project__title">Студент</h2>
        </div>
        <div className="about-me__me">
          <div className="about-me__text">
            <h3 className="about-me__text-name">Иван</h3>
            <p className="about-me__text-info">Фронтенд-разработчик, 17 лет</p>
            <p className="about-me__text-about">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          </div>
          <img className="about-me__image" src={ImageMe} alt="Фотография Ивана" />
          <div className="about-me__links">
            <a className="about-me__link" href="https://vk.com/vanishx9" target="_blank" rel="noreferrer">VK</a>
            <a className="about-me__link" href="https://github.com/IvanPlisyakov" target="_blank" rel="noreferrer">Github</a>
          </div>
        </div>
        <h4 className="about-me__portfolio">Портфолио</h4>
        <div className="about-me__portfolio-links">
          <a className="about-me__portfolio-link" href="https://ivanplisyakov.github.io/how-to-learn/" target="_blank" rel="noreferrer">
            <p className="about-me__portfolio-text">Статичный сайт</p>
            <p className="about-me__portfolio-icon">&#8599;</p>
          </a>
          <a className="about-me__portfolio-link" href="https://ivanplisyakov.github.io/russian-travel/" target="_blank" rel="noreferrer">
            <p className="about-me__portfolio-text">Адаптивный сайт</p>
            <p className="about-me__portfolio-icon">&#8599;</p>
          </a>
          <a className="about-me__portfolio-link" href="https://ivanplisyakov.github.io/mesto/" target="_blank" rel="noreferrer">
            <p className="about-me__portfolio-text">Одностраничное приложение</p>
            <p className="about-me__portfolio-icon">&#8599;</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
