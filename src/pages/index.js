import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import * as sharedData from '../utils/constants.js';
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
        const newCard = new Card(
              data,
              '#card',
              function handleCardClick(url, text) {
                popupWithImage.open(url, text);
              }
        );
        const cardCreated = newCard.generateCard();
        const cardsContainer = sharedData.container.querySelector(sharedData.cardsContainer);

        cardsContainer.prepend(cardCreated);
        popupAddForm.close();
});

validatorEditForm.enableValidation();
validatorAddCardForm.enableValidation();

// выводим на страницу первоначальный набор карточек
const cardsList = new Section({
  items: sharedData.initialCards,
  renderer: (cardItem) => {
    const card = new Card(
          cardItem,
          '#card',
          function handleCardClick(url, text) {
            popupWithImage.open(url, text);
          }
    );
    const cardGenerated = card.generateCard();
    cardsList.addItem(cardGenerated);
  }
},
sharedData.cardsContainer
);

cardsList.renderItems();
// выводим на страницу первоначальный набор карточек

sharedData.buttonEdit.addEventListener('click', () => {
  const data = userInfo.getUserInfo();

  sharedData.nameInput.value = data.name;
  sharedData.jobInput.value = data.description;

  popupEditForm.open();
});
sharedData.buttonAdd.addEventListener('click', () => {
  validatorAddCardForm.toggleButtonState(sharedData.inputListAddCard, sharedData.buttonElementAddCard);

  popupAddForm.open();
});
popupWithImage.setEventListeners();
popupEditForm.setEventListeners();
popupAddForm.setEventListeners();
