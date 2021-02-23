import React from 'react';
import './SearchForm.css';

import searchFormIcon from '../../images/search-form__icon.svg';
import searchFormReset from '../../images/search-form__reset.svg';

function SearchForm() {
  const [reset, setReset] = React.useState(false);
  function checkValueInput(e) {
    if (e.target.value === '') {
      setReset(false);
    } else {
      setReset(true);
    }
  }

  const [movie, setMovie] = React.useState('');
  function handleChangeMovie(e) {
    setMovie(e.target.value);
    checkValueInput(e);
  }

  function clearInput() {
    setMovie('');
    setReset(false);
  }

  const [screenWidth, setScreenWidth] = React.useState(document.documentElement.clientWidth);
  function handleWindowResize() {
    setScreenWidth(document.documentElement.clientWidth);
  }
  window.addEventListener('resize', handleWindowResize);

  const [checkbox, setCheckbox] = React.useState(false);
  function handleCheckbox() {
    setCheckbox(!checkbox);
  }

  const searchForm = (
    <div className="search-form__form">
      <div className={`search-form__checkbox ${checkbox === true ? 'search-form__checkbox_active' : 'search-form__checkbox_inactive'}`} onClick={handleCheckbox}>
        <div className={`search-form__checkbox-item ${checkbox === true ? 'search-form__checkbox-item_active' : 'search-form__checkbox-item_inactive'}`}></div>
      </div>
      <p className="search-form__checkbox-title">Короткометражки</p>
    </div>
  );

  return (
    <section className="search-form">
      <div className="search-form__block">
        <div className="search-form__block-input">
          <img className="search-form__icon" src={searchFormIcon} alt="" />
          <input className="search-form__input" value={movie} onChange={handleChangeMovie} type="text" placeholder="Фильм" />
          <img className={`search-form__reset ${reset === false ? 'search-form__reset_inactive' : ''}`} src={searchFormReset} alt="" onClick={clearInput} />
          <div className="search-form__search"></div>
        </div>
        {screenWidth >= 723 && searchForm}
      </div>
      {screenWidth < 723 && searchForm}
      <div className="search-form__border"></div>
    </section>
  );
}

export default SearchForm;

//          <div className="search-form__reset"></div>
