import React from 'react';
import './MoviesCard.css';

import saveIcon from '../../images/movies-card__save-icon.svg';
import deleteIcon from '../../images/movies-card__save-icon2.svg';

function MoviesCard(props) {
  const duration = `${Math.floor(props.card.duration / 60) === 0 ? '' : `${String(Math.floor(props.card.duration / 60))}ч`} ${props.card.duration % 60}м`;
  return (
    <div className="movies-card">
      <img className="movies-card__image" src={props.card.image} alt="Постер фильма" />
      <p className="movies-card__name">{props.card.nameRU}</p>
      <div className="movies-card__overlay-duration">
        <p className="movies-card__duration">{duration}</p>
      </div>
      <div className={`movies-card__save-button ${props.card.saved ? 'movies-card__save-button_saved' : 'movies-card__save-button_notsaved'}`}>
        { props.type === 'movies'
          && (
            props.card.saved
              ? <p className="movies-card__save-text">Сохранить</p>
              : <img className="movies-card__save-icon" src={saveIcon} alt="Галочка" />
          )
        }
        { props.type === 'saved-movies'
         && <img className="movies-card__save-icon" src={deleteIcon} alt="Крестик" />
        }
      </div>
    </div>
  );
}

export default MoviesCard;
