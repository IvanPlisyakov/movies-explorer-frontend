import React from 'react';
import './PageNotFound.css';

import { useHistory } from 'react-router-dom';

function PageNotFound(props) {
  const history = useHistory();

  return (
    <section className="page-not-found">
      <div className="page-not-found__error_overlay">
        <h2 className="page-not-found__status">404</h2>
        <p className="page-not-found__text">Страница не найдена</p>
      </div>
      <p className="page-not-found__back" onClick={() => history.goBack()}>Назад</p>
    </section>
  );
}

export default PageNotFound;
