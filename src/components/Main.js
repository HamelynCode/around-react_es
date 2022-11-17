import { useContext, useEffect, useState } from "react";
import api from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  /*const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');*/
  const [cards, setCards] = useState([]);

  function updateCards(){
    api.getInitialCards()
      .then((cards)=>{
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(()=>{
    updateCards();
    /*
    api.getUserInfo()
    .then((info)=>{
      setUserName(info.name);
      setUserDescription(info.about);
      setUserAvatar(info.avatar);
    })
    .then(()=>{
      api.getInitialCards()
      .then((cards)=>{
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
    })
    .catch((err) => {
      console.log(err);
    });
    */
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    if(isLiked){
      api.removeLike(card._id).then((newCard)=>{
        setCards(cards.map(c => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        console.log(err);
      });
    } else {
      api.addNewLike(card._id).then((newCard)=>{
        setCards(cards.map(c => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then((newCard)=>{
      setCards(cards.filter(c => c._id !== card._id));
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <main className="main">
      <section className="profile">
        <div onClick={props.onEditAvatarClick}>
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Imágen de perfil del usuario"
          />
          <div className="profile__edit-cover"></div>
        </div>

        <div className="profile__info">
          <div className="profile__data">
            <h2 className="profile__name">{currentUser.name}</h2>
            <button className="btn btn_edit" onClick={props.onEditProfileClick}></button>
          </div>
          <p className="profile__about">{currentUser.about}</p>
        </div>

        <button className="btn btn_add profile__btn" onClick={props.onAddPlaceClick}></button>
      </section>

      <section className="elements">
        {cards.map(card =>(
          <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
          )
        )}
      </section>
    </main>
  );
}
