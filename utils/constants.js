export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
export const container = document.querySelector('.content');
export const cardsContainer = '.elements';
export const gallery = document.querySelector('.gallery');
export const galleryImg = gallery.querySelector('.gallery__img');
export const gallerydescr = gallery.querySelector('.gallery__description');
export const galleryCloseButton = gallery.querySelector('.gallery__close-btn');
export const buttonEdit = container.querySelector('.profile__edit-button');
export const buttonAdd = container.querySelector('.profile__add-button');
export const popupEdit = document.querySelector('.popup_edit');
export const popupAdd = document.querySelector('.popup_add');
export const popupEditCloseButton = popupEdit.querySelector('.popup_edit .popup__close-btn');
export const popupAddCloseButton = popupAdd.querySelector('.popup_add .popup__close-btn');
export const formEditProfile = popupEdit.querySelector('.popup__form');
export const formAddCard = popupAdd.querySelector('.popup__form_add-card');
export const profileName = container.querySelector('.profile__name');
export const profileJob = container.querySelector('.profile__description');
export const nameInput = popupEdit.querySelector('#nickname');
export const jobInput = popupEdit.querySelector('#job');
export const mestoNameInput = popupAdd.querySelector('#card-name');
export const mestoImgLink = popupAdd.querySelector('#img-link');
export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
export const inputListAddCard = Array.from(formAddCard.querySelectorAll(config.inputSelector));
export const buttonElementAddCard = popupAdd.querySelector('#add-submit');

