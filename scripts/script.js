const initialCards = [
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

const cardsContainer = document.querySelector('.elements');
const container = document.querySelector('.content');
const editButton = container.querySelector('.profile__edit-button');
const addButton = container.querySelector('.profile__add-button');
const profileName = container.querySelector('.profile__name');
const profileJob = container.querySelector('.profile__description');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const closeEditButton = popupEdit.querySelector('.popup_edit .popup__close-btn');
const closeAddButton = popupAdd.querySelector('.popup_add .popup__close-btn');
const nameInput = popupEdit.querySelector('#nickname');
const jobInput = popupEdit.querySelector('#job');
const mestoNameInput = popupAdd.querySelector('#card-name');
const mestoImgLink = popupAdd.querySelector('#img-link');
const formElement = popupEdit.querySelector('.form');
const addCardForm = popupAdd.querySelector('.form_add-card');
const gallery = document.querySelector('.gallery');
const galleryImg = gallery.querySelector('.gallery__img');
const gallerydescr = gallery.querySelector('.gallery__description');
const closeGalleryButton = gallery.querySelector('.gallery__close-btn');

const createCard = (element) => {
  const template = document.querySelector('#card');
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
    gallery.classList.add('gallery_opened');
    galleryImg.src = element.link;
    gallerydescr.textContent = element.name;
  });

  return card;
}

function openPopupEdit() {
  popupEdit.classList.add('popup_opened');

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function openPopupAdd() {
  popupAdd.classList.add('popup_opened');
}

function closePopupEdit() {
  popupEdit.classList.remove('popup_opened');
}

function closePopupAdd() {
  popupAdd.classList.remove('popup_opened');
}

function closePopupGallery() {
  gallery.classList.remove('gallery_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopupEdit();
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
  closePopupAdd();
}

const elements = initialCards.map(function(el) {
  return createCard(el);
})

cardsContainer.append(...elements)

editButton.addEventListener('click', openPopupEdit);
addButton.addEventListener('click', openPopupAdd);
closeEditButton.addEventListener('click', closePopupEdit);
closeAddButton.addEventListener('click', closePopupAdd);
closeGalleryButton.addEventListener('click', closePopupGallery);
formElement.addEventListener('submit', formSubmitHandler);
addCardForm.addEventListener('submit', formSubmitAddHandler);