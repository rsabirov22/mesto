class FormValidator {
  constructor(settings, formElement) {
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
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
toggleButtonState() {
  // Если есть хотя бы один невалидный инпут
  if (this._hasInvalidInput(this._inputList)) {
    // сделай кнопку неактивной
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', 'disabled');
  } else {
    // иначе сделай кнопку активной
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.removeAttribute('disabled', 'disabled');
  }
};

// Отслеживаем изменения в инпутах
_setEventListeners() {
  // Обойдём все элементы полученной коллекции
  this._inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      this._isValid(inputElement)
      // Вызовем toggleButtonState и передадим ей массив полей и кнопку
      this.toggleButtonState();
    });
  });
};

resetErrors() {
  this._inputList.forEach((inputElement) => {
    this._hideInputError(inputElement);
  });
}

enableValidation() {
  this._setEventListeners();
};

}

export default FormValidator;
