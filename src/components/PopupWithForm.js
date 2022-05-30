import Popup from './Popup.js';
import { config } from '../utils/constants.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupSelector = popupSelector;
    this._popupWithForm = document.querySelector(this._popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._inputSelector = config.inputSelector;
    this._formSelector = config.formSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._form = this._popupWithForm.querySelector(this._formSelector);
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
	}

  _getInputValues() {
    const data = {};

    this._inputList.forEach((input) => {
      const key = input.getAttribute('name');
      const value = input.value;

      data[key] = value;
    });

    return data;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = 'Сохранение...';
    } else {
      switch (this._submitButton.getAttribute('id')) {
        case 'add-submit':
          this._submitButton.textContent = 'Создать';
          break;
        case 'edit-submit':
          this._submitButton.textContent = 'Сохранить';
          break;
        case 'avatar-submit':
          this._submitButton.textContent = 'Сохранить';
          break;
      }
    }
  }

  setEventListeners() {
    super.setEventListeners()

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      const data = this._getInputValues();

      this._handleFormSubmit(data);
    });
  }

  open() {
    super.open();

    const submitButton = this._submitButton;

    if (this._popupSelector === '.popup_confirm') {

      const newPromise = new Promise((resolve, reject) => {
        submitButton.addEventListener('click', () => {
          resolve('Нажата кнопка Да');
        })
      });

      return newPromise;
   }
  }

  close() {
    super.close();

    this._form.reset();
  }
}
