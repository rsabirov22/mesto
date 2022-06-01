import Popup from './Popup.js';
import { config } from '../utils/constants.js'

export default class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupSelector = popupSelector;
    this._popupWithForm = document.querySelector(this._popupSelector);
    this._formSelector = config.formSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._form = this._popupWithForm.querySelector(this._formSelector);
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
	}

  open() {
    super.open();

    const submitButton = this._submitButton;

    const newPromise = new Promise((resolve, reject) => {
      submitButton.addEventListener('click', () => {
        resolve('Нажата кнопка Да');
      })
    });

    return newPromise;
  }

  renderLoading(isLoading, defaultText) {
    if (isLoading) {
      this._submitButton.textContent = 'Удаление...';
    } else {
      this._submitButton.textContent = defaultText;
    }
  }

  setEventListeners() {
    super.setEventListeners()

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  }


  close() {
    super.close();

    this._form.reset();
  }
}
