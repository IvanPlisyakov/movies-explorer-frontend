import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { SetLangContext } from '../../contexts/setLangContext.js';
import { TranslationContext } from '../../contexts/translationContext.js';

import './Header.css';
import logo from '../../images/header__logo.svg';
import NavTab from '../NavTab/NavTab';

function Header() {
  const { path } = useRouteMatch();
  const setLang = React.useContext(SetLangContext);
  const translationContext = React.useContext(TranslationContext);

  function handleCheckbox() {
    setLang(translationContext === 'true' ? 'false' : 'true');
  }

  return (
    <header className={`header ${path === '/' ? 'header_background-color' : ''} `}>
      <div className={`header__column ${path === '/signup' || path === '/signin' ? 'header__column_display_grid' : ''}`}>
        <div className="header__overlay">
          <Link to="/" className="header__logo">
            <img className="header__logo-img" src={logo} alt="Логотип" />
          </Link>
          <div className={`header__checkbox ${translationContext === 'true' && 'header__checkbox_active'}`} onClick={handleCheckbox}>
            <div className={`header__checkbox-item ${translationContext === 'true' && 'search-form__checkbox-item_active'}`}><span className="header__checkbox-text">{translationContext === 'true' ? "En" : "Ru"}</span></div>
          </div>
        </div>
        <NavTab />
      </div>
    </header>
  );
}

export default Header;
