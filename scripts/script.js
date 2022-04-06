const template = document.querySelector('#card');
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
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openPropfilePopup(popupEdit) { 
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  openPopup(popupEdit);
} 

function formSubmitHandler (evt) {
  evt.preventDefault();

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

editButton.addEventListener('click', () => {
  openPropfilePopup(popupEdit);
});
addButton.addEventListener('click', () => {
  openPopup(popupAdd);
});
closeEditButton.addEventListener('click', () => {
  closePopup(popupEdit);
});
closeAddButton.addEventListener('click', () => {
  closePopup(popupAdd);
});
closeGalleryButton.addEventListener('click', () => {
  closePopup(gallery);
});
formElement.addEventListener('submit', formSubmitHandler);
addCardForm.addEventListener('submit', formSubmitAddHandler);