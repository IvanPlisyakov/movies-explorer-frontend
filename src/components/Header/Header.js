import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './Header.css';

import logo from '../../images/header__logo.svg';
import NavTab from '../NavTab/NavTab';

function Header() {
  const { path } = useRouteMatch();
  return (
    <header className={`header ${path === '/' ? 'header_background-color' : ''} `}>
      <div className={`header__column ${path === '/signup' || path === '/signin' ? 'header__column_display_grid' : ''}`}>
        <Link to="/" className="header__logo">
          <img className="header__logo-img" src={logo} alt="Логотип" />
        </Link>
        <NavTab />
      </div>
    </header>
  );
}

export default Header;
