class Card {
  constructor(data, cardSelector, handleCardClick, handlePutLike, handleDeleteLike, handlePopupDeleteOpen) {
    this._title = data.name;
    this._image = data.link;
    this._likes = data.likes.length;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handlePopupDeleteOpen = handlePopupDeleteOpen;
    this._handlePutLike = handlePutLike;
    this._handleDeleteLike = handleDeleteLike;
    this._cardSelector = cardSelector;
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
    this._element.querySelector('.element__counter').textContent = this._likes;
    if (this._ownerId === '0906fd565294f9f104e3db00') {
      this._element.querySelector('.element__del').classList.add('element__del_visible');
      this._element.querySelector('.element__del').removeAttribute('disabled', 'disabled');
    }

    // Вернём элемент наружу
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.element__btn').addEventListener('click', () => {
      // this._handleDeleteLike(this._id)
      this._handlePutLike(this._id)
      this._handleLikeClick();
    });

    this._element.querySelector('.element__del').addEventListener('click', () => {
      this._handlePopupDeleteOpen(this._id );
      // this._element.remove();
      // this._element = null;
    });

    this._element.querySelector('.element__image').addEventListener('click', (e) => {
      this._handleCardClick(this._image, this._title);
    });
  }

  _handleLikeClick() {
    this._element.querySelector('.element__btn').classList.toggle('element__btn_active');
  }

}

export default Card;
