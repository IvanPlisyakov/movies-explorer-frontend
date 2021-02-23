import React from 'react';
import { NavLink, Link, useRouteMatch } from 'react-router-dom';
import './NavTab.css';

import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

import navTabLinkAccountIcon from '../../images/nav-tab__link-account-icon.svg';
import asideBarReset from '../../images/nav-tab__aside-bar-reset.svg';

function NavTab(props) {
  const { path } = useRouteMatch();

  const currentUser = React.useContext(CurrentUserContext);

  const [screenWidth, setScreenWidth] = React.useState(document.documentElement.clientWidth);
  function handleWindowResize() {
    setScreenWidth(document.documentElement.clientWidth);
  }
  window.addEventListener('resize', handleWindowResize);

  const [asideActive, setAsideActive] = React.useState(false);

  function handleActiveAside() {
    setAsideActive(true);
  }

  function handleInActiveAside() {
    setAsideActive(false);
  }

  function createNav() {
    if (currentUser.loggedIn) {
      if (screenWidth >= 1245) {
        return (
        <>
          <NavLink to="/movies" className="nav-tab__link-movies" activeClassName="nav-tab__link-movies_active">Фильмы</NavLink>
          <NavLink to="/saved-movies" className="nav-tab__link-movies" activeClassName="nav-tab__link-movies_active">Сохранённые фильмы</NavLink>
          <NavLink to="/profile" className="nav-tab__link-account" activeClassName="nav-tab__link-account_active">
            <p className="nav-tab__link-account-text">Аккаунт</p>
            <div className="nav-tab__link-account-overlay">
              <img className="nav-tab__link-account-icon" src={navTabLinkAccountIcon} alt="Икнока профиля" />
            </div>
          </NavLink>
        </>
        );
      }
      return (
          <div className="nav-tab__link-menu" onClick={handleActiveAside}></div>
      );
    }
    switch (path) {
      case '/signup':
        return (
            <p className="nav-tab__greeting">Добро пожаловать!</p>
        );

      case '/signin':
        return (
            <p className="nav-tab__greeting">Рады видеть!</p>
        );
      default:
        return (
          <>
            <Link to="/signup" className="nav-tab__link-register">Регистрация</Link>
            <Link to="/signin" className="nav-tab__link-login">Войти</Link>
          </>
        );
    }
  }

  const navigation = createNav();

  return (
    <>
        <nav className="nav-tab">
          {navigation}
        </nav>
        <div className={`nav-tab__aside-bar ${asideActive ? '' : 'nav-tab__aside-bar_inactive'}`}>
        <div className="nav-tab__aside-bar-shading" onClick={handleInActiveAside}></div>
        <div className="nav-tab__aside-bar-main">
          <div className="nav-tab__aside-bar__column">
            <img className="nav-tab__aside-bar-reset" src={asideBarReset} alt="" onClick={handleInActiveAside} />
            <div className="nav-tab__aside-bar-links">
              <NavLink className="nav-tab__aside-bar-link" activeClassName="nav-tab__aside-bar-link_active" exact to="/" >Главная</NavLink>
              <NavLink className="nav-tab__aside-bar-link" activeClassName="nav-tab__aside-bar-link_active" to="/movies" >Фильмы</NavLink>
              <NavLink className="nav-tab__aside-bar-link" activeClassName="nav-tab__aside-bar-link_active" to="/saved-movies" >Сохранённые фильмы</NavLink>
            </div>
          </div>
          <NavLink to="/profile" className="nav-tab__link-account nav-tab__link-account_margin" activeClassName="nav-tab__link-account_active">
            <p className="nav-tab__link-account-text">Аккаунт</p>
            <div className="nav-tab__link-account-overlay">
              <img className="nav-tab__link-account-icon" src={navTabLinkAccountIcon} alt="Икнока профиля" />
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default NavTab;
