export default function Main() {
  function handleEditAvatarClick(){
    document.querySelector('#form-profile-img').classList.remove("popup_hidden");
  }
  function handleEditProfileClick(){
    document.querySelector('#form-edit').classList.remove("popup_hidden");
  }
  function handleAddPlaceClick(){
    document.querySelector('#form-add').classList.remove("popup_hidden");
  }

  return (
    <>
      <section className="profile">
        <div onClick={handleEditAvatarClick}>
          <img
            className="profile__avatar"
            src=""//"<%=require('./images/avatar.jpg')%>"
            alt="Imágen de perfil del usuario"
          />
          <div className="profile__edit-cover"></div>
        </div>

        <div className="profile__info">
          <div className="profile__data">
            <h2 className="profile__name"></h2>
            <button className="btn btn_edit" onClick={handleEditProfileClick}></button>
          </div>
          <p className="profile__about"></p>
        </div>

        <button className="btn btn_add profile__btn" onClick={handleAddPlaceClick}></button>
      </section>

      <section className="elements"></section>
    </>
  );
}
