import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { initialCards } from './cards.js';
import * as sharedData from './shared.js';

const container = document.querySelector('.content');
const cardsContainer = document.querySelector('.elements');
const galleryCloseButton = sharedData.gallery.querySelector('.gallery__close-btn');
const buttonEdit = container.querySelector('.profile__edit-button');
const buttonAdd = container.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupEditCloseButton = popupEdit.querySelector('.popup_edit .popup__close-btn');
const popupAddCloseButton = popupAdd.querySelector('.popup_add .popup__close-btn');
const formEditProfile = popupEdit.querySelector('.popup__form');
const formAddCard = popupAdd.querySelector('.popup__form_add-card');
const profileName = container.querySelector('.profile__name');
const profileJob = container.querySelector('.profile__description');
const nameInput = popupEdit.querySelector('#nickname');
const jobInput = popupEdit.querySelector('#job');
const mestoNameInput = popupAdd.querySelector('#card-name');
const mestoImgLink = popupAdd.querySelector('#img-link');
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
const inputListAddCard = Array.from(formAddCard.querySelectorAll(config.inputSelector));
const buttonElementAddCard = popupAdd.querySelector('#add-submit');
const validatorEditForm = new FormValidator(config, formEditProfile);
const validatorAddCardForm = new FormValidator(config, formAddCard);

validatorEditForm.enableValidation();
validatorAddCardForm.enableValidation();

function createCardObject(item) {
  // Создадим экземпляр карточки
  const card = new Card(item, '#card');
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();

  return cardElement;
};

initialCards.forEach((item) => {
  // Добавляем в DOM
  cardsContainer.append(createCardObject(item));
});

function openPropfilePopup(popupEdit) {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  sharedData.openPopup(popupEdit);
}

function openAddCardPopup(popupAdd) {
  validatorAddCardForm._toggleButtonState(inputListAddCard, buttonElementAddCard);

  sharedData.openPopup(popupAdd);
}

function handleFormSubmit (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  sharedData.closePopup(popupEdit);

}

const handleFormSubmitAdd = (event) => {
  event.preventDefault();

  const newCard = {name: null, link: null};

  newCard.name = mestoNameInput.value;
  newCard.link = mestoImgLink.value;

  cardsContainer.prepend(createCardObject(newCard));

  mestoNameInput.value = '';
  mestoImgLink.value = '';

  sharedData.closePopup(popupAdd);
}

buttonEdit.addEventListener('click', () => {
  openPropfilePopup(popupEdit);
});
buttonAdd.addEventListener('click', () => {
  openAddCardPopup(popupAdd);
});
popupEditCloseButton.addEventListener('click', () => {
  sharedData.closePopup(popupEdit);
});
popupAddCloseButton.addEventListener('click', () => {
  sharedData.closePopup(popupAdd);
});
galleryCloseButton.addEventListener('click', () => {
  sharedData.closePopup(sharedData.gallery);
});
formEditProfile.addEventListener('submit', handleFormSubmit);
formAddCard.addEventListener('submit', handleFormSubmitAdd);

