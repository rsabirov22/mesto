import { popupEditCloseButton,
         popupAddCloseButton,
         galleryCloseButton } from '../utils/constants.js';

export default class Popup {
  constructor(popupSelector) {
    this._selector = popupSelector;
  }

  open() {
    this._selector.classList.add('popup_opened');
  }

  close() {
    this._selector.classList.remove('popup_opened');
  }

  _handleEscClose() {
    if (evt.key === 'Escape') {
      const popup = document.querySelector('.popup_opened');

      this.close();
    }
  }

  _handleClickOutsideClose (evt) {
    const popup = evt.currentTarget;

    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  setEventListeners() {
    popupEditCloseButton.addEventListener('click', () => {
      this.close();
    });

    popupAddCloseButton.addEventListener('click', () => {
      this.close();
    });

    galleryCloseButton.addEventListener('click', () => {
      this.close();
    });
  }
}
