const template = document.querySelector('#card');
const cardsContainer = document.querySelector('.elements');
const container = document.querySelector('.content');
const buttonEdit = container.querySelector('.profile__edit-button');
const buttonAdd = container.querySelector('.profile__add-button');
const profileName = container.querySelector('.profile__name');
const profileJob = container.querySelector('.profile__description');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupEditCloseButton = popupEdit.querySelector('.popup_edit .popup__close-btn');
const popupAddCloseButton = popupAdd.querySelector('.popup_add .popup__close-btn');
const nameInput = popupEdit.querySelector('#nickname');
const jobInput = popupEdit.querySelector('#job');
const mestoNameInput = popupAdd.querySelector('#card-name');
const mestoImgLink = popupAdd.querySelector('#img-link');
const formElement = popupEdit.querySelector('.popup__form');
const cardFormAdd = popupAdd.querySelector('.popup__form_add-card');
const gallery = document.querySelector('.gallery');
const galleryImg = gallery.querySelector('.gallery__img');
const gallerydescr = gallery.querySelector('.gallery__description');
const galleryCloseButton = gallery.querySelector('.gallery__close-btn');

const createCard = (element) => {
  const card = template.content.querySelector('.element').cloneNode(true);
  const likeBtn = card.querySelector('.element__btn');

  card.querySelector('.element__title').textContent = element.name;
  card.querySelector('.element__image').src = element.link;

  card.querySelector('.element__btn').addEventListener('click', () => {
    likeBtn.classList.toggle('element__btn_active');
  });

  card.querySelector('.element__del').addEventListener('click', () => {
    card.remove();
  });

  card.querySelector('.element__image').addEventListener('click', (e) => {
    galleryImg.src = element.link;
    gallerydescr.textContent = element.name;

    openPopup(gallery);
  });

  return card;
}

function openPopup(popup) {
  popup.classList.add('popup_opened');

  document.addEventListener('keydown', (e) => {
    handleEscape(e, popup);
  });

  popup.addEventListener('click', (e) => {
    handleClickOutside(e, popup);
  });
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscape);
  popup.removeEventListener('click', handleClickOutside);
}

function handleClickOutside (evt, popup) {
  if (evt.target === evt.currentTarget) {
    closePopup(popup);
	}
}

function handleEscape (evt, popup) {
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
  const settings = {inactiveButtonClass: 'popup__button_disabled'};
  const inputList = Array.from(popupAdd.querySelectorAll('.popup__input'));
  const buttonElement = popupAdd.querySelector('#add-submit');

  toggleButtonState(inputList, buttonElement, settings);

  openPopup(popupAdd);
}

function formSubmitHandler (evt) {
  evt.preventDefault();

  const inputList = Array.from(popupEdit.querySelectorAll('.popup__input'));

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(popupEdit);
}

const renderCard = (card) => {
  cardsContainer.prepend(createCard(card));
}

const formSubmitAddHandler = (event) => {
  event.preventDefault();

  let newCard = {name: null, link: null};

  newCard.name = mestoNameInput.value;
  newCard.link = mestoImgLink.value;

  renderCard(newCard);

  mestoNameInput.value = '';
  mestoImgLink.value = '';

  closePopup(popupAdd);
}

const elements = initialCards.map(function(el) {
  return createCard(el);
})

cardsContainer.append(...elements)

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
