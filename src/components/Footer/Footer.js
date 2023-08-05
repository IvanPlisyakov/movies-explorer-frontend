import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

import { TranslationContext } from '../../contexts/translationContext.js';
import { translations } from '../../utils/constants.js';

function Footer() {
  const translationContext = React.useContext(TranslationContext);
  return (
    <footer className="footer">
      <p className="footer__text">{translations[translationContext].main.footer[0]}</p>
      <div className="footer__info">
        <p className="footer__copyright">&copy;2021</p>
        <div className="footer__links">
          <a className="footer__link" href="https://praktikum.yandex.ru/profile/web/" target="_blank" rel="noreferrer">{translations[translationContext].main.footer[1]}</a>
          <a className="footer__link" href="https://github.com/IvanPlisyakov" target="_blank" rel="noreferrer">Github</a>
          <a className="footer__link" href="https://vk.com/vanishx9" target="_blank" rel="noreferrer">VK</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
