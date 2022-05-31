import * as sharedData from '../utils/constants.js';

class Card {
  constructor(data, cardSelector, handleCardClick, handlePutLike, handleDeleteLike, handleDeleteCard) {
    this._title = data.name;
    this._image = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handlePutLike = handlePutLike;
    this._handleDeleteLike = handleDeleteLike;
    this._cardSelector = cardSelector;
    this._cardsContainer = sharedData.container.querySelector(sharedData.cardsContainerSelector);
  }

  _getTemplate() {
  // забираем разметку из HTML и клонируем элемент
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    // вернём DOM-элемент карточки
    return cardElement;
  }

  generateCard() {
    // Запишем разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    this._setEventListeners();

    // Добавим данные
    this._element.querySelector('.element__image').src = this._image;
    this._element.querySelector('.element__title').textContent = this._title;
    this._element.querySelector('.element__image').alt = this._title;
    this._element.querySelector('.element__counter').textContent = this._likes.length;
    if (this._ownerId === '0906fd565294f9f104e3db00') {
      this._element.querySelector('.element__del').classList.add('element__del_visible');
      this._element.querySelector('.element__del').removeAttribute('disabled', 'disabled');
    }

    // Вернём элемент наружу
    return this._element;
  }

  _toggleLikeIcon(element) {
    element.querySelector('.element__btn').classList.toggle('element__btn_active');
  }

  _updateCounter(element, newData) {
    element.querySelector('.element__counter').textContent = newData.likes.length;
  }

  _handleLikeClick = (id, element) => {
    const isLiked = element.querySelector('.element__btn').classList.contains('element__btn_active');

    if (isLiked) {
      this._handleDeleteLike(this._id)
        .then((updatedData) => {
          this._toggleLikeIcon(element);
          this._updateCounter(element, updatedData);
        })
        .catch(err => console.log(err));
    } else {
      this._handlePutLike(id)
        .then((updatedData) => {
          this._toggleLikeIcon(element);
          this._updateCounter(element, updatedData);
        })
        .catch(err => console.log(err));
    }
  }

  _setEventListeners() {
    this._element.querySelector('.element__btn').addEventListener('click', () => {
      this._handleLikeClick(this._id, this._element);
    });

    this._element.querySelector('.element__del').addEventListener('click', () => {
      this._handleDeleteCard(this._id, this._element);
    });

    this._element.querySelector('.element__image').addEventListener('click', (e) => {
      this._handleCardClick(this._image, this._title);
    });
  }
}

export default Card;
