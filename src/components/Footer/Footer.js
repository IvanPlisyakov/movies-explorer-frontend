import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__info">
        <p className="footer__copyright">&copy;2021</p>
        <div className="footer__links">
          <a className="footer__link" href="https://praktikum.yandex.ru/profile/web/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          <a className="footer__link" href="https://github.com/IvanPlisyakov" target="_blank" rel="noreferrer">Github</a>
          <a className="footer__link" href="https://vk.com/vanishx9" target="_blank" rel="noreferrer">VK</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
