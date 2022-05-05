class FormValidator {
  constructor(settings, formElement) {
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formElement = formElement;
  }

  // Добавляет на инпуты класс с ошибкой
_showInputError(inputElement, errorMessage) {
  const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add(this._inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(this._errorClass);
};

// Удаляем с инпутов класс с ошибкой
_hideInputError(inputElement) {
  // Находим элемент ошибки
  const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorClass);
  errorElement.textContent = '';
};

// проверяем валидность поля
_isValid(inputElement) {

  if (!inputElement.validity.valid) {
    // showInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    this._showInputError(inputElement, inputElement.validationMessage);
  } else {
    // hideInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    this._hideInputError(inputElement);
  }
};

// Функция принимает массив полей
_hasInvalidInput(inputList) {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true
    return !inputElement.validity.valid;
  })
};

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять
_toggleButtonState(inputList, buttonElement) {
  // Если есть хотя бы один невалидный инпут
  if (this._hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add(this._inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove(this._inactiveButtonClass);
    buttonElement.removeAttribute('disabled', 'disabled');
  }
};

// Отслеживаем изменения в инпутах
_setEventListeners() {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    // Найдём в текущей форме кнопку отправки
  const buttonElement = this._formElement.querySelector(this._submitButtonSelector);

  // Обойдём все элементы полученной коллекции
  inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      this._isValid(inputElement)
      // Вызовем toggleButtonState и передадим ей массив полей и кнопку
      this._toggleButtonState(inputList, buttonElement);
    });
  });
};

enableValidation() {

  this._formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

  this._setEventListeners();

};

}

export default FormValidator;
