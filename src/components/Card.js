class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._title = data.name;
    this._image = data.link;
    this._handleCardClick = handleCardClick;
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

    // Вернём элемент наружу
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.element__btn').addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._element.querySelector('.element__del').addEventListener('click', () => {
      this._element.remove();
      this._element = null;
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
