import Popup from './Popup.js';
import { galleryImg, gallerydescr } from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
	}

  open(url, text) {
    super.open();

    galleryImg.src = url;
    gallerydescr.textContent = text;
  }
}
