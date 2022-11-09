import { useEffect, useState } from "react";
import api from "../utils/Api";
import Card from "./Card";

export default function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(()=>{
    api.getUserInfo().then((info)=>{
      setUserName(info.name);
      setUserDescription(info.about);
      setUserAvatar(info.avatar);
    }).then(()=>{
      api.getInitialCards().then((cards)=>{
        setCards(cards);
      });
    });

  }, []);

  return (
    <>
      <section className="profile">
        <div onClick={props.onEditAvatarClick}>
          <img
            className="profile__avatar"
            src={userAvatar}
            alt="Imágen de perfil del usuario"
          />
          <div className="profile__edit-cover"></div>
        </div>

        <div className="profile__info">
          <div className="profile__data">
            <h2 className="profile__name">{userName}</h2>
            <button className="btn btn_edit" onClick={props.onEditProfileClick}></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>

        <button className="btn btn_add profile__btn" onClick={props.onAddPlaceClick}></button>
      </section>

      <section className="elements">
        {cards.map(card =>(
          <Card key={card._id} card={card} onCardClick={props.onCardClick} />
          )
        )}
      </section>
    </>
  );
}
