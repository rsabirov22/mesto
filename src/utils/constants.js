export const container = document.querySelector('.content');
export const cardsContainerSelector = '.elements';
export const buttonEdit = container.querySelector('.profile__edit-button');
export const buttonAdd = container.querySelector('.profile__add-button');
export const changeAvatarContainer = container.querySelector('.profile__avatar-container');
export const popupEdit = document.querySelector('.popup_edit');
export const popupAdd = document.querySelector('.popup_add');
export const popupChangeAvatar = document.querySelector('.popup_avatar');
export const formEditProfile = popupEdit.querySelector('.popup__form');
export const formAddCard = popupAdd.querySelector('.popup__form_add-card');
export const formChangeAvatar = popupChangeAvatar.querySelector('.popup__form_change-avatar');
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

