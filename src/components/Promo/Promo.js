import React from 'react';
import './Promo.css';

import PromoImage from '../../images/promo__image.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__column">
        <h2 className="promo__title">Учебный проект студента факультета Веб-разработки.</h2>
        <div className="promo__image-overlay">
          <img className="promo__image" src={PromoImage} alt="Красивые линии" />
        </div>
      </div>
    </section>
  );
}

export default Promo;
