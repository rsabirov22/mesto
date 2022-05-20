import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(url, description, popupSelector) {
    super(popupSelector);
    this._url = url;
    this._description = description;
	}


}
