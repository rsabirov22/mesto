export default class Popup {
  constructor(popupSelector) {
    this._selector = popupSelector;
    this._popup = document.querySelector(this._selector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleClickOutsideClose = this._handleClickOutsideClose.bind(this);
    this._popupCloseBtn = this._popup.querySelector('.popup__close-btn');
    this._galleryCloseBtn = this._popup.querySelector('.gallery__close-btn');
  }

  open() {
    this._popup.classList.add('popup_opened');

    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('click', this._handleClickOutsideClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');

    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('click', this._handleClickOutsideClose);
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
    if (this._popup.contains(this._popupCloseBtn)) {
      this._popupCloseBtn.addEventListener('click', () => {
        this.close();
      });
    } else if (this._popup.contains(this._galleryCloseBtn)) {
      this._galleryCloseBtn.addEventListener('click', () => {
        this.close();
      });
    }
  }
}
