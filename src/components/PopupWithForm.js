//import Popup from "./Popup.js";

export default function PopupWithForm(props) {
  const containerClass = `form__body ${props.containerClass}`;
  return (
    <form className="form popup popup_hidden" id={props.id}>
      <div className={containerClass}>
        <button className="btn btn_close form__btn-close" type="button"></button>
        <h2 className="form__title">{props.title}</h2>

        {props.children}

        <button type="submit" className="btn btn_submit form__btn-submit">
          {props.submitText}
        </button>
      </div>
    </form>
  );
}

/*
export default class PopupWithForm extends Popup {
  constructor({ popupSelector }, info, submitCallback) {
    super({ popupSelector }, info);

    this._inputList = Array.from(
      this._elem.querySelectorAll(info.inputSelector)
    );

    this._btnSubmit = this._elem.querySelector(info.btnSubmitSelector);

    this._submitExternalCallback = submitCallback;
    this.setEventListeners();
  }

  close() {
    super.close();
    this._elem.reset();
  }

  setEventListeners() {
    this._elem.addEventListener("submit", this._submitInternalCallback);
    super.setEventListeners();
  }

  _submitInternalCallback = (evt) => {
    this._submitExternalCallback(evt);
  };

  getInputValues() {
    const values = {};
    this._inputList.forEach((input) => (values[input.name] = input.value));
    return values;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  setSubmitButtonText(text) {
    this._btnSubmit.textContent = text;
  }
}
*/
