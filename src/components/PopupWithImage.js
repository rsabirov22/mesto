import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupSelector = popupSelector;
    this._gallery = document.querySelector(this._popupSelector);
    this._galleryImg = this._gallery.querySelector('.gallery__img');
    this._gallerydescr = this._gallery.querySelector('.gallery__description');
	}

  open(url, text) {
    super.open();

    this._galleryImg.src = url;
    this._galleryImg.alt = text;
    this._gallerydescr.textContent = text;
  }
}
