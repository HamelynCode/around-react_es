import PopupWithImage from './PopupWithImage';
import PopupWithForm from './PopupWithForm';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

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

  return (
    <div className="page">
      <PopupWithImage selectedCard={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />

      <PopupWithForm id='form-delete' title='Estas seguro/a ?' isOpen={false} onClose={closeAllPopups} containerClass='form__body_confirm' submitText='Sí' />
      
      <PopupWithForm id='form-profile-img' title='Cambiar foto de perfil' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} containerClass='form__body_avatar' submitText='Guardar'>
        <div className="form__input-container">
          <input name="text" type="url" className="input form__text" id="profile-img-input-text" placeholder="Link" required />
          <span className="form__error"             id="profile-img-input-text-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm id='form-edit' title='Editar perfil' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} submitText='Guardar'>
        <div className="form__input-container">
          <input name="name" type="text" className="input form__name" id="edit-input-name" placeholder="Nombre" required minLength="2" maxLength="40" />
          <span className="form__error"             id="edit-input-name-error"></span>
        </div>

        <div className="form__input-container">
          <input name="text" type="text" className="input form__text" id="edit-input-text" placeholder="Acerca de mi" required minLength="2" maxLength="200" />
          <span className="form__error"             id="edit-input-text-error"></span>
        </div>
      </PopupWithForm>

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
  );
}

export default App;
