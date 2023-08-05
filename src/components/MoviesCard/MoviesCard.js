import React from 'react';
import './MoviesCard.css';

import { TranslationContext } from '../../contexts/translationContext.js';
import { translations } from '../../utils/constants.js';

import saveIcon from '../../images/movies-card__save-icon.svg';
import deleteIcon from '../../images/movies-card__save-icon2.svg';

function MoviesCard(props) {
  const translationContext = React.useContext(TranslationContext);

  const duration = `${Math.floor(props.card.duration / 60) === 0 ? '' : `${String(Math.floor(props.card.duration / 60))}${translations[translationContext].moviesCard[0]}`} ${props.card.duration % 60}${translations[translationContext].moviesCard[1]}`;
  const [cardSavedValue, setCardSavedValue] = React.useState(props.card.saved);
  function clickButtonSave() {
    props.handleButtonSave(props.card);
    // console.log(props.handleButtonSave);
    /* .then((res) => {
        console.log(res);
      }); */
    setCardSavedValue(true);
  }

  function handleCardDelete() {
    props.deleteMovie(props.card._id, props.card.id);
  }
  return (
    <div className="movies-card">
      <img className="movies-card__image" src={`${props.type === 'movies' ? `https://api.nomoreparties.co${props.card.image == null || props.card.image === undefined ? '' : props.card.image.url}` : props.card.image}`} />
      <p className="movies-card__name">{props.card.nameRU}</p>
      <div className="movies-card__overlay-duration">
        <p className="movies-card__duration">{duration}</p>
      </div>
      { props.type === 'movies'
        && (<div className={`movies-card__save-button ${cardSavedValue ? 'movies-card__save-button_notsaved' : 'movies-card__save-button_saved'}`}>
              {cardSavedValue
                ? <img className="movies-card__save-icon" src={saveIcon} alt="Галочка" />
                : <p className="movies-card__save-text" onClick={clickButtonSave}>{translations[translationContext].moviesCard[2]}</p>}
            </div>)
      }
      { props.type === 'saved-movies'
        && (<div className={`movies-card__save-button movies-card__save-button_notsaved`} onClick={handleCardDelete}>
              <img className="movies-card__save-icon" src={deleteIcon} alt="Крестик" />
            </div>)
      }
    </div>
  );
}

export default MoviesCard;

/*  <div className={`movies-card__save-button ${cardSavedValue ?
  'movies-card__save-button_notsaved' : 'movies-card__save-button_saved'}`}>
        { props.type === 'movies'
          && (
            cardSavedValue
              ? <img className="movies-card__save-icon" src={saveIcon} alt="Галочка" />
              : <p className="movies-card__save-text" onClick={clickButtonSave}>Сохранить</p>
          )
        }
        { props.type === 'saved-movies'
         && <img className="movies-card__save-icon" src={deleteIcon} alt="Крестик" />
        }
      </div>
*/
