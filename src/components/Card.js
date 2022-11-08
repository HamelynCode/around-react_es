import { useState } from "react";

export default function Card(props){
  const card = props.card;

  function handleClick() {
    props.onCardClick(props.card);
  }

  return(
    <div className="card">
      <button className="btn btn_delete btn_delete_hidden"></button>
      <img className="card__image" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="card__description">
        <p className="card__text">{card.name}</p>
        <div>
          <button className="btn btn_like"></button>
          <p className="card__likes-count">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}
