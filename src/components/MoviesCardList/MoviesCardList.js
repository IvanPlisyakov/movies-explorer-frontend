import React from 'react';
import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__column">
        <div className="movies-card-list__cards">
          {props.cards.map((card, i) => (
              <MoviesCard card={card} key={i} type={props.type}/>
          ))}
        </div>
        { props.type === 'movies'
          && <button className="movies-card-list__more">Ещё</button>
        }
      </div>
    </section>
  );
}

export default MoviesCardList;
