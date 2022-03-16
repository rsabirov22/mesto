let container = document.querySelector('.content');
let editButton = container.querySelector('.profile__edit-button');
let profileName = container.querySelector('.profile__name');
let profileJob = container.querySelector('.profile__description');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close-btn');
let nameInput = popup.querySelector('#nickname');
let jobInput = popup.querySelector('#job');
let formElement = popup.querySelector('.form');

function openPopup() {
  popup.classList.add('popup_opened');

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler); 