import './index.css';

import FormValidator from '../components/FormValidator.js';
import * as sharedData from '../utils/constants.js';
import { getCard } from '../utils/utils.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const validatorEditForm = new FormValidator(sharedData.config, sharedData.formEditProfile);
const validatorAddCardForm = new FormValidator(sharedData.config, sharedData.formAddCard);
const popupWithImage = new PopupWithImage('.gallery');
const userInfo = new UserInfo({
      profileName: '.profile__name',
      profileJob: '.profile__description'
});
const popupEditForm = new PopupWithForm(
      '.popup_edit',
      function handleFormEditSubmit(data) {
        userInfo.setUserInfo(data);
        popupEditForm.close();
      });
const popupAddForm = new PopupWithForm(
      '.popup_add',
      function handleFormAddSubmit(data) {
        const cardGenerated = getCard(data, popupWithImage);

        cardsList.addItem(cardGenerated);

        popupAddForm.close();
});

validatorEditForm.enableValidation();
validatorAddCardForm.enableValidation();

// выводим на страницу первоначальный набор карточек
const cardsList = new Section({
  items: sharedData.initialCards,
  renderer: (cardItem) => {
    const cardGenerated = getCard(cardItem, popupWithImage);
    cardsList.addItem(cardGenerated);
  }
},
sharedData.cardsContainer
);

cardsList.renderItems();
// выводим на страницу первоначальный набор карточек

sharedData.buttonEdit.addEventListener('click', () => {
  validatorEditForm.resetErrors();
  const data = userInfo.getUserInfo();

  sharedData.nameInput.value = data.name;
  sharedData.jobInput.value = data.description;

  popupEditForm.open();
});
sharedData.buttonAdd.addEventListener('click', () => {
  validatorAddCardForm.resetErrors();
  validatorAddCardForm.toggleButtonState();

  popupAddForm.open();
});
popupWithImage.setEventListeners();
popupEditForm.setEventListeners();
popupAddForm.setEventListeners();
