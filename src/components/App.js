import PopupWithForm from './PopupWithForm';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
//import './index.css';

function App() {
  return (
    <div className="page">
      <div className="view popup popup_hidden">
        <div className="view__frame">
          <button className="btn btn_close view__btn-close" type="button"></button>
          <img
            className="view__image"
            src="<%=require('./images/louise.png')%>"
            alt="imagen seleccionada"
          />
          <p className="view__title">nombre de la imagen</p>
        </div>
      </div>

      <PopupWithForm id='form-delete' title='Estas seguro/a ?' containerClass='form__body_confirm' submitText='Sí'>
      </PopupWithForm>
      
      <PopupWithForm id='form-profile-img' title='Cambiar foto de perfil' containerClass='form__body_avatar' submitText='Guardar'>
        <div className="form__input-container">
          <input name="text" type="url" className="input form__text" id="profile-img-input-text" placeholder="Link" required />
          <span className="form__error"             id="profile-img-input-text-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm id='form-edit' title='Editar perfil' submitText='Guardar'>
        <div className="form__input-container">
          <input name="name" type="text" className="input form__name" id="edit-input-name" placeholder="Nombre" required minLength="2" maxLength="40" />
          <span className="form__error"             id="edit-input-name-error"></span>
        </div>

        <div className="form__input-container">
          <input name="text" type="text" className="input form__text" id="edit-input-text" placeholder="Acerca de mi" required minLength="2" maxLength="200" />
          <span className="form__error"             id="edit-input-text-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm id='form-add' title='Crear tarjeta nueva' submitText='Guardar'>
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

      <Main />

      <Footer />

      <template id="template-card">
        <div className="card">
          <button className="btn btn_delete btn_delete_hidden"></button>
          <img className="card__image" src="<%=require('./images/louise.png')%>" alt="Template" />
          <div className="card__description">
            <p className="card__text">nombre de la imagen</p>
            <div>
              <button className="btn btn_like"></button>
              <p className="card__likes-count">0</p>
            </div>
          </div>
        </div>
      </template>
    </div>
  );
}

/*
<form className="form popup popup_hidden" id="form-delete">
  <div className="form__body form__body_confirm">
    <button className="btn btn_close form__btn-close" type="button"></button>
    <h2 className="form__title">Estas seguro/a ?</h2>

    <button type="submit" className="btn btn_submit form__btn-submit">
      Sí
    </button>
  </div>
</form>

<form className="form popup popup_hidden" id="form-profile-img">
  <div className="form__body form__body_avatar">
    <button className="btn btn_close form__btn-close" type="button"></button>
    <h2 className="form__title">Cambiar foto de perfil</h2>

    <div className="form__input-container">
      <input name="text" type="url" className="input form__text" id="profile-img-input-text" placeholder="Link" required />
      <span className="form__error"             id="profile-img-input-text-error"></span>
    </div>

    <button type="submit" className="btn btn_submit form__btn-submit">
      Guardar
    </button>
  </div>
</form>

<form className="form popup popup_hidden" id="form-edit">
  <div className="form__body">
    <button className="btn btn_close form__btn-close" type="button"></button>
    <h2 className="form__title">Edit Profile</h2>

    <div className="form__input-container">
      <input name="name" type="text" className="input form__name" id="edit-input-name" placeholder="Nombre" required minLength="2" maxLength="40" />
      <span className="form__error"             id="edit-input-name-error"></span>
    </div>

    <div className="form__input-container">
      <input name="text" type="text" className="input form__text" id="edit-input-text" placeholder="Acerca de mi" required minLength="2" maxLength="200" />
      <span className="form__error"             id="edit-input-text-error"></span>
    </div>

    <button type="submit" className="btn btn_submit form__btn-submit">
      Guardar
    </button>
  </div>
</form>

<form className="form popup popup_hidden" id="form-add">
  <div className="form__body">
    <button className="btn btn_close form__btn-close" type="button"></button>
    <h2 className="form__title">Add a new Card</h2>

    <div className="form__input-container">
      <input name="name" type="text" className="input form__name" id="add-input-name" placeholder="Nombre" required minLength="2" maxLength="30" />
      <span className="form__error"             id="add-input-name-error"></span>
    </div>

    <div className="form__input-container">
      <input name="text" type="url" className="input form__text" id="add-input-text" placeholder="Link" required />
      <span className="form__error"             id="add-input-text-error"></span>
    </div>
    
    <button type="submit" className="btn btn_submit form__btn-submit">
      Guardar
    </button>
  </div>
</form>
*/

export default App;
