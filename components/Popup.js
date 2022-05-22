import { popupCloseButton,
         galleryCloseButton } from '../utils/constants.js';

export default class Popup {
  constructor(popupSelector) {
    this._selector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleClickOutsideClose = this._handleClickOutsideClose.bind(this);
  }

  open() {
    this._selector.classList.add('popup_opened');

    document.addEventListener('keydown', this._handleEscClose);
    this._selector.addEventListener('click', this._handleClickOutsideClose);
  }

  close() {
    this._selector.classList.remove('popup_opened');

    document.removeEventListener('keydown', this._handleEscClose);
    this._selector.removeEventListener('click', this._handleClickOutsideClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleClickOutsideClose (evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  setEventListeners() {
    // console.log(popupCloseButton)

    popupCloseButton.addEventListener('click', () => {
      this.close();
    });

    galleryCloseButton.addEventListener('click', () => {
      this.close();
    });
  }
}
