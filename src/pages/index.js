import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import * as sharedData from '../utils/constants.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Popup from '../components/Popup.js';
import UserInfo from '../components/UserInfo.js';

const validatorEditForm = new FormValidator(sharedData.config, sharedData.formEditProfile);
const validatorAddCardForm = new FormValidator(sharedData.config, sharedData.formAddCard);
const popupAdd = new Popup(sharedData.popupAdd);
const popupEdit = new Popup(sharedData.popupEdit);
const popupGallery = new Popup(sharedData.gallery);
const popupCard = new PopupWithImage(sharedData.gallery);
const userInfo = new UserInfo({ profileName:sharedData.profileName, profileJob: sharedData.profileJob });
const popupEditForm = new PopupWithForm(
      sharedData.popupEdit,
      function handleFormEditSubmit(data) {
        userInfo.setUserInfo(data);
        popupEditForm.close();
      });
const popupAddForm = new PopupWithForm(
      sharedData.popupAdd,
      function handleFormAddSubmit(data) {
        const newCard = new Card(
              data,
              '#card',
              function handleCardClick(url, text) {
                popupCard.open(url, text, sharedData.gallery);
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
            popupCard.open(url, text, sharedData.gallery);
          }
    );
    return card.generateCard();
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

  popupEdit.open();
});
sharedData.buttonAdd.addEventListener('click', () => {
  validatorAddCardForm.toggleButtonState(sharedData.inputListAddCard, sharedData.buttonElementAddCard);

  popupAdd.open();
});
popupGallery.setEventListeners();
popupEditForm.setEventListeners();
popupAddForm.setEventListeners();
