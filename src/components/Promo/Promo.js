import React from 'react';
import './Promo.css';

import { TranslationContext } from '../../contexts/translationContext.js';
import { translations } from '../../utils/constants.js';

import PromoImage from '../../images/promo__image.svg';

function Promo() {
  const translationContext = React.useContext(TranslationContext);

  return (
    <section className="promo">
      <div className="promo__column">
        <h2 className="promo__title">{translations[translationContext].main.promo}</h2>
        <div className="promo__image-overlay">
          <img className="promo__image" src={PromoImage} alt="Красивые линии" />
        </div>
      </div>
    </section>
  );
}

export default Promo;
