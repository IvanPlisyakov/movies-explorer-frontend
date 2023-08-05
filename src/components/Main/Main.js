import React from 'react';
import './Main.css';

import { useRouteMatch } from 'react-router-dom';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';

function Main() {
  const { path } = useRouteMatch();
  React.useEffect(() => {
    localStorage.setItem('path', path);
  }, []);
  return (
    <div className="main">
      <Header />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default Main;
