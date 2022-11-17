import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  useEffect(()=>{
    api.getUserInfo()
    .then((info)=>{
      setCurrentUser(info);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  function handleEditAvatarClick(){
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick(){
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick(){
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups(){
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card){
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function handleUpdateUser(user) {
    api.editProfile(user.name, user.about).then((info)=>{
      setCurrentUser(info);
    })
    .catch((err) => {
      console.log(err);
    });
    closeAllPopups();
  }

  function handleUpdateAvatar(data) {
    api.setProfileImage(data.avatar).then((info)=>{
      setCurrentUser(info);
    })
    .catch((err) => {
      console.log(err);
    });
    closeAllPopups();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <ImagePopup selectedCard={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />

      <PopupWithForm id='form-delete' title='Estas seguro/a ?' isOpen={false} onClose={closeAllPopups} containerClass='form__body_confirm' submitText='Sí' />
      
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

      <PopupWithForm id='form-add' title='Crear tarjeta nueva' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} submitText='Guardar'>
        <div className="form__input-container">
          <input name="name" type="text" className="input form__name" id="add-input-name" placeholder="Nombre" required minLength="2" maxLength="30" />
          <span className="form__error"             id="add-input-name-error"></span>
        </div>

        <div className="form__input-container">
          <input name="text" type="url" className="input form__text" id="add-input-text" placeholder="Link" required />
          <span className="form__error"             id="add-input-text-error"></span>
        </div>
      </PopupWithForm>

      <Header />

      <Main onEditProfileClick={handleEditProfileClick} onAddPlaceClick={handleAddPlaceClick} onEditAvatarClick={handleEditAvatarClick} onCardClick={handleCardClick} />

      <Footer />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
