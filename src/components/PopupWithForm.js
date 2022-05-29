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
    this._form = this._popupWithForm.querySelector(this._formSelector);
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

  setEventListeners() {
    super.setEventListeners()

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      const data = this._getInputValues();

      this._handleFormSubmit(data);
    });
  }

  close() {
    super.close();

    this._form.reset();
  }
}
