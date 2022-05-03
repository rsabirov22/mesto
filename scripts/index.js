import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { initialCards } from './cards.js';

const container = document.querySelector('.content');
const cardsContainer = document.querySelector('.elements');
export const gallery = document.querySelector('.gallery');
export const galleryImg = gallery.querySelector('.gallery__img');
export const gallerydescr = gallery.querySelector('.gallery__description');
const galleryCloseButton = gallery.querySelector('.gallery__close-btn');
const buttonEdit = container.querySelector('.profile__edit-button');
const buttonAdd = container.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupEditCloseButton = popupEdit.querySelector('.popup_edit .popup__close-btn');
const popupAddCloseButton = popupAdd.querySelector('.popup_add .popup__close-btn');
const formElement = popupEdit.querySelector('.popup__form');
const cardFormAdd = popupAdd.querySelector('.popup__form_add-card');
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
const formList = Array.from(document.querySelectorAll(config.formSelector));

formList.forEach((form) => {
  const validator = new FormValidator(config, form);
  validator.enableValidation();
});

initialCards.forEach((item) => {
  // Создадим экземпляр карточки
  const card = new Card(item, '#card');
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();

  // Добавляем в DOM
  cardsContainer.append(cardElement);
});

function openPopup(popup) {
  popup.classList.add('popup_opened');

  document.addEventListener('keydown', handleEscape);
  popup.addEventListener('click', handleClickOutside);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');

  document.removeEventListener('keydown', handleEscape);
  popup.removeEventListener('click', handleClickOutside);
}

function handleClickOutside (evt) {
  const popup = evt.currentTarget;

  if (evt.target === evt.currentTarget) {
    closePopup(popup);
	}
}

function handleEscape (evt) {
  const popup = document.querySelector('.popup_opened');

  if (evt.key === 'Escape') {
    closePopup(popup);
  }
}

function openPropfilePopup(popupEdit) {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  openPopup(popupEdit);
}

function openAddCardPopup(popupAdd) {
  const form = popupAdd.querySelector('.popup__form_add-card');
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));
  const buttonElement = popupAdd.querySelector('#add-submit');

  const validator = new FormValidator(config, form);

  validator._toggleButtonState(inputList, buttonElement);

  openPopup(popupAdd);
}

function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(popupEdit);

}

const formSubmitAddHandler = (event) => {
  event.preventDefault();

  const newCard = {name: null, link: null};

  newCard.name = mestoNameInput.value;
  newCard.link = mestoImgLink.value;

  initialCards.unshift(newCard);

  const card = new Card(newCard, '#card');
  const cardElement = card.generateCard();

  cardsContainer.prepend(cardElement);


  mestoNameInput.value = '';
  mestoImgLink.value = '';

  closePopup(popupAdd);
}

buttonEdit.addEventListener('click', () => {
  openPropfilePopup(popupEdit);
});
buttonAdd.addEventListener('click', () => {
  openAddCardPopup(popupAdd);
});
popupEditCloseButton.addEventListener('click', () => {
  closePopup(popupEdit);
});
popupAddCloseButton.addEventListener('click', () => {
  closePopup(popupAdd);
});
galleryCloseButton.addEventListener('click', () => {
  closePopup(gallery);
});
formElement.addEventListener('submit', formSubmitHandler);
cardFormAdd.addEventListener('submit', formSubmitAddHandler);

export { openPopup };
