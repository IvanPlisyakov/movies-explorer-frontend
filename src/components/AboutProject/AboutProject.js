import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project">
      <div className="about-project__column">
        <div className="about-project__header">
          <h2 className="about-project__title">О проекте</h2>
        </div>
        <div className="about-project__info">
          <div className="about-project__overlay">
            <h3 className="about-project__info-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__info-subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-project__overlay">
            <h3 className="about-project__info-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__info-subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about-project__calendar">
          <div className="about-project__calendar-item about-project__calendar-item_one-week">1 неделя</div>
          <div className="about-project__calendar-item about-project__calendar-item_four-week">4 недели</div>
          <div className="about-project__calendar-item about-project__calendar-item_end">Back-end</div>
          <div className="about-project__calendar-item about-project__calendar-item_end">Front-end</div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
