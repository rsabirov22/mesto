import './index.css';

import FormValidator from '../components/FormValidator.js';
import * as sharedData from '../utils/constants.js';
import { getCard } from '../utils/utils.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupConfirm from '../components/PopupConfirm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const api = new Api(
  {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
    headers: {
    authorization: 'c06528dd-39b3-409c-b174-a8e7550ae360',
    'Content-Type': 'application/json'
    }
  }
);
let userId;
const validatorEditForm = new FormValidator(sharedData.config, sharedData.formEditProfile);
const validatorAddCardForm = new FormValidator(sharedData.config, sharedData.formAddCard);
const validatorChangeAvatarForm = new FormValidator(sharedData.config, sharedData.formChangeAvatar);
const popupWithImage = new PopupWithImage('.gallery');
const userInfo = new UserInfo({
      profileName: '.profile__name',
      profileJob: '.profile__description',
      profileAvatar: '.profile__avatar'
});
// Загрузка информации о пользователе
api.getProfile()
  .then((data) => {
    userInfo.setUserInfo(data);
    userId = data._id;
  })
  .catch(err => console.log(err));
// Загрузка информации о пользователе
const popupEditForm = new PopupWithForm(
      '.popup_edit',
      function handleFormEditSubmit(data) {

        popupEditForm.renderLoading(true, 'Сохранить');

        api.patchProfile(data)
          .then((data) => {
            userInfo.setUserInfo(data);
            popupEditForm.close();
          })
          .catch(err => console.log(err))
          .finally(() => {
            popupEditForm.renderLoading(false, 'Сохранить');
          });
});

const popupChangeAvatar = new PopupWithForm(
      '.popup_avatar',
      function handleFormChangeAvatarSubmit(data) {

        popupChangeAvatar.renderLoading(true, 'Сохранить');

        api.patchAvatar(data)
          .then((data) => {
            userInfo.setUserInfo(data);
            popupChangeAvatar.close();
          })
          .catch(err => console.log(err))
          .finally(() => {
            popupChangeAvatar.renderLoading(false, 'Сохранить');
          });
});

const popupConfirmDelete = new PopupConfirm('.popup_confirm');

validatorEditForm.enableValidation();
validatorAddCardForm.enableValidation();
validatorChangeAvatarForm.enableValidation();

// выводим на страницу первоначальный набор карточек
api.getInitialCards()
  .then((data) => {

    const reversed = data.reverse();

    const cardsList = new Section({
      items: reversed,
      renderer: (cardItem) => {
        const cardGenerated = getCard(cardItem, popupWithImage, api, popupConfirmDelete, userId);
        cardsList.addItem(cardGenerated);
      }
    },
    sharedData.cardsContainerSelector
    );

    cardsList.renderItems();

    // Добавление карточки на сервер
    const popupAddForm = new PopupWithForm(
      '.popup_add',
      function handleFormAddSubmit(data) {

        popupAddForm.renderLoading(true, 'Создать');

        api.postCard(data)
          .then((card) => {
            const cardGenerated = getCard(card, popupWithImage, api, popupConfirmDelete, userId);

            cardsList.addItem(cardGenerated);
            popupAddForm.close();
          })
          .catch(err => console.log(err))
          .finally(() => {
            popupAddForm.renderLoading(false, 'Создать');
          });
    });

    popupAddForm.setEventListeners();

    sharedData.buttonAdd.addEventListener('click', () => {
      validatorAddCardForm.resetErrors();
      validatorAddCardForm.toggleButtonState();

      popupAddForm.open();
    });
    // Добавление карточки на сервер
  })
  .catch((err) => {
    console.log(err);
  });
// выводим на страницу первоначальный набор карточек

sharedData.buttonEdit.addEventListener('click', () => {
  validatorEditForm.resetErrors();

  const data = userInfo.getUserInfo();

  sharedData.nameInput.value = data.name;
  sharedData.jobInput.value = data.about;

  popupEditForm.open();
});
sharedData.changeAvatarContainer.addEventListener('click', () => {
  validatorChangeAvatarForm.resetErrors();
  validatorChangeAvatarForm.toggleButtonState();

  popupChangeAvatar.open();
});

popupWithImage.setEventListeners();
popupEditForm.setEventListeners();
popupChangeAvatar.setEventListeners();
popupConfirmDelete.setEventListeners();
