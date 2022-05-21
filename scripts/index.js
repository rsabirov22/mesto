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
const galleryClose = new Popup(sharedData.gallery);
const popupClose = new Popup(sharedData.popup);
const popupAddOpen = new Popup(sharedData.popupAdd);
const popupEditOPen = new Popup(sharedData.popupEdit);
const popupCard = new PopupWithImage(sharedData.gallery);
const userInfo = new UserInfo({ profileName:sharedData.profileName, profileJob: sharedData.profileJob });
const popupEdit = new PopupWithForm(
      sharedData.popupEdit,
      function handleFormEditSubmit(data, evt) {
        userInfo.setUserInfo(data);
        popupEdit.close();
      });
const popupAdd = new PopupWithForm(
      sharedData.popupAdd,
      function handleFormAddSubmit(data) {

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

galleryClose.setEventListeners();
popupClose.setEventListeners();
sharedData.buttonEdit.addEventListener('click', () => {
  popupEditOPen.open();
});
sharedData.buttonAdd.addEventListener('click', () => {
  popupAddOpen.open();
});
popupEdit.setEventListeners();
popupAdd.setEventListeners();

// popupEdit._getInputValues();











// function createCardObject(item) {
//   // Создадим экземпляр карточки
//   const card = new Card(item, '#card');
//   // Создаём карточку и возвращаем наружу
//   const cardElement = card.generateCard();

//   return cardElement;
// };

// sharedData.initialCards.forEach((item) => {
//   // Добавляем в DOM
//   sharedData.cardsContainer.append(createCardObject(item));
// });

// function openPropfilePopup(popupEdit) {
//   sharedData.nameInput.value = sharedData.profileName.textContent;
//   sharedData.jobInput.value = sharedData.profileJob.textContent;

//   openPopup(sharedData.popupEdit);
// }

// function openAddCardPopup(popupAdd) {
//   validatorAddCardForm.toggleButtonState(sharedData.inputListAddCard, sharedData.buttonElementAddCard);

//   openPopup(sharedData.popupAdd);
// }

// function handleFormSubmit (evt) {
//   evt.preventDefault();

//   sharedData.profileName.textContent = sharedData.nameInput.value;
//   sharedData.profileJob.textContent = sharedData.jobInput.value;

//   closePopup(sharedData.popupEdit);

// }

// const handleFormSubmitAdd = (event) => {
//   event.preventDefault();

//   const newCard = {name: null, link: null};

//   newCard.name = mestoNameInput.value;
//   newCard.link = mestoImgLink.value;

//   cardsContainer.prepend(createCardObject(newCard));

//   mestoNameInput.value = '';
//   mestoImgLink.value = '';

//   closePopup(sharedData.popupAdd);
// }

// sharedData.buttonEdit.addEventListener('click', () => {
//   openPropfilePopup(sharedData.popupEdit);
// });
// sharedData.buttonAdd.addEventListener('click', () => {
//   openAddCardPopup(sharedData.popupAdd);
// });
// sharedData.popupEditCloseButton.addEventListener('click', () => {
//   closePopup(sharedData.popupEdit);
// });
// sharedData.popupAddCloseButton.addEventListener('click', () => {
//   closePopup(sharedData.popupAdd);
// });
// sharedData.galleryCloseButton.addEventListener('click', () => {
//   closePopup(sharedData.gallery);
// });
// sharedData.formEditProfile.addEventListener('submit', handleFormSubmit);
// sharedData.formAddCard.addEventListener('submit', handleFormSubmitAdd);

