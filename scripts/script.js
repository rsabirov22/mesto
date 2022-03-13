let container = document.querySelector('.content');
let editButton = container.querySelector('.profile-info__edit-button');
let profileName = container.querySelector('.profile-info__name');
let profileJob = container.querySelector('.profile-info__description');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close-btn');
let nameInput = popup.querySelector('#nickname');
let jobInput = popup.querySelector('#job');
let formElement = popup.querySelector('.form__wrapper');


function openPopup() {
  popup.classList.add('popup_opened');

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = evt.target[1].value;
  profileJob.textContent = evt.target[3].value;

  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler); 