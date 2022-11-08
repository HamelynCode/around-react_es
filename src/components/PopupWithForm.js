export default function PopupWithForm(props) {
  const containerClass = `form__body ${props.containerClass}`;
  const fromClass = `form popup ${props.isOpen ? '':'popup_hidden'}`;
  return (
    <form className={fromClass} id={props.id}>
      <div className={containerClass}>
        <button className="btn btn_close form__btn-close" type="button" onClick={props.onClose}></button>
        <h2 className="form__title">{props.title}</h2>

        {props.children}

        <button type="submit" className="btn btn_submit form__btn-submit">
          {props.submitText}
        </button>
      </div>
    </form>
  );
}
