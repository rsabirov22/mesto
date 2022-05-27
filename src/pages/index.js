import './index.css';

import FormValidator from '../components/FormValidator.js';
import * as sharedData from '../utils/constants.js';
import { getCard } from '../utils/utils.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const validatorEditForm = new FormValidator(sharedData.config, sharedData.formEditProfile);
const validatorAddCardForm = new FormValidator(sharedData.config, sharedData.formAddCard);
const validatorChangeAvatarForm = new FormValidator(sharedData.config, sharedData.formChangeAvatar);
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
const popupChangeAvatar = new PopupWithForm(
      '.popup_avatar',
      function handleFormChangeAvatarSubmit(data) {
        console.log(data);

      popupChangeAvatar.close();
});

const api = new Api(
  {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
    headers: {
    authorization: 'c06528dd-39b3-409c-b174-a8e7550ae360',
    'Content-Type': 'application/json'
    }
  }
);

validatorEditForm.enableValidation();
validatorAddCardForm.enableValidation();
validatorChangeAvatarForm.enableValidation();

// выводим на страницу первоначальный набор карточек
api.getInitialCards()
    .then((data) => {
      const cardsList = new Section({
        items: data,
        renderer: (cardItem) => {
          const cardGenerated = getCard(cardItem, popupWithImage);
          cardsList.addItem(cardGenerated);
        }
      },
      sharedData.cardsContainer
      );

      cardsList.renderItems();
    })
    .catch((err) => {
      console.log(err);
    })
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
sharedData.changeAvatarContainer.addEventListener('click', () => {
  validatorChangeAvatarForm.resetErrors();
  validatorChangeAvatarForm.toggleButtonState();

  popupChangeAvatar.open();
});

popupWithImage.setEventListeners();
popupEditForm.setEventListeners();
popupAddForm.setEventListeners();
popupChangeAvatar.setEventListeners();
