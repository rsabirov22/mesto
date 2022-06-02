(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var n,r;return n=t,(r=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled","disabled"))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e.toggleButtonState()}))}))}},{key:"resetErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();var n=document.querySelector(".content"),r=n.querySelector(".profile__edit-button"),o=n.querySelector(".profile__add-button"),i=n.querySelector(".profile__avatar-container"),c=document.querySelector(".popup_edit"),l=document.querySelector(".popup_add"),u=document.querySelector(".popup_avatar"),a=c.querySelector(".popup__form"),s=l.querySelector(".popup__form_add-card"),f=u.querySelector(".popup__form_change-avatar"),p=c.querySelector("#nickname"),h=c.querySelector("#job"),_=(l.querySelector("#card-name"),l.querySelector("#img-link"),{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"});function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n,r,o,i,c,l){var u,a,s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a=function(e,t){t.querySelector(".element__btn").classList.contains("element__btn_active")?s._handleDeleteLike(s._id).then((function(e){s._toggleLikeIcon(t),s._updateCounter(t,e)})).catch((function(e){return console.log(e)})):s._handlePutLike(e).then((function(e){s._toggleLikeIcon(t),s._updateCounter(t,e)})).catch((function(e){return console.log(e)}))},(u="_handleLikeClick")in this?Object.defineProperty(this,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):this[u]=a,this._title=t.name,this._image=t.link,this._likes=t.likes,this._id=t._id,this._userId=r,this._ownerId=t.owner._id,this._handleCardClick=o,this._handleDeleteCard=l,this._handlePutLike=i,this._handleDeleteLike=c,this._cardSelector=n}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){this._element=this._getTemplate();var e=this._element.querySelector(".element__image"),t=this._verifyMyLike(this._likes);return this._setEventListeners(),t&&this._element.querySelector(".element__btn").classList.add("element__btn_active"),e.src=this._image,this._element.querySelector(".element__title").textContent=this._title,e.alt=this._title,this._element.querySelector(".element__counter").textContent=this._likes.length,this._ownerId===this._userId&&(this._element.querySelector(".element__del").classList.add("element__del_visible"),this._element.querySelector(".element__del").removeAttribute("disabled","disabled")),this._element}},{key:"_verifyMyLike",value:function(e){var t=[];return e.forEach((function(e){for(var n in e)t.push(e[n])})),t.includes(this._userId)}},{key:"removeElementFromDom",value:function(e){e.remove(),e=null}},{key:"_toggleLikeIcon",value:function(e){e.querySelector(".element__btn").classList.toggle("element__btn_active")}},{key:"_updateCounter",value:function(e,t){e.querySelector(".element__counter").textContent=t.likes.length}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__btn").addEventListener("click",(function(){e._handleLikeClick(e._id,e._element)})),this._element.querySelector(".element__del").addEventListener("click",(function(){e._handleDeleteCard(e._id,e._element)})),this._element.querySelector(".element__image").addEventListener("click",(function(t){e._handleCardClick(e._image,e._title)}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const v=d;function m(e,t,n,r,o){var i=new v(e,"#card",o,(function(e,n){t.open(e,n)}),(function(e){return n.putLike(e)}),(function(e){return n.deleteLike(e)}),(function(e,t){r.open().then((function(){r.renderLoading(!0,"Да"),n.deleteCard(e).then((function(){i.removeElementFromDom(t),r.close()})).catch((function(e){return console.log(e)})).finally((function(){r.renderLoading(!1,"Да")}))})).catch((function(e){return console.log(e)}))}));return i.generateCard()}var b=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))};function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selector=t,this._popup=document.querySelector(this._selector),this._handleEscClose=this._handleEscClose.bind(this),this._handleClickOutsideClose=this._handleClickOutsideClose.bind(this),this._popupCloseBtn=this._popup.querySelector(".popup__close-btn"),this._galleryCloseBtn=this._popup.querySelector(".gallery__close-btn")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose),this._popup.addEventListener("click",this._handleClickOutsideClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose),this._popup.removeEventListener("click",this._handleClickOutsideClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleClickOutsideClose",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.contains(this._popupCloseBtn)?this._popupCloseBtn.addEventListener("click",(function(){e.close()})):this._popup.contains(this._galleryCloseBtn)&&this._galleryCloseBtn.addEventListener("click",(function(){e.close()}))}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function P(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._popupSelector=e,t._gallery=document.querySelector(t._popupSelector),t._galleryImg=t._gallery.querySelector(".gallery__img"),t._gallerydescr=t._gallery.querySelector(".gallery__description"),t}return t=c,(n=[{key:"open",value:function(e,t){L(q(c.prototype),"open",this).call(this),this._galleryImg.src=e,this._galleryImg.alt=t,this._gallerydescr.textContent=t}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(E);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=x(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function x(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function U(e,t){return U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},U(e,t)}function A(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e))._popupSelector=e,n._popupWithForm=document.querySelector(n._popupSelector),n._handleFormSubmit=t,n._inputSelector=_.inputSelector,n._formSelector=_.formSelector,n._submitButtonSelector=_.submitButtonSelector,n._form=n._popupWithForm.querySelector(n._formSelector),n._submitButton=n._form.querySelector(n._submitButtonSelector),n._inputList=Array.from(n._form.querySelectorAll(n._inputSelector)),n}return t=c,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){var n=t.getAttribute("name"),r=t.value;e[n]=r})),e}},{key:"renderLoading",value:function(e,t){this._submitButton.textContent=e?"Сохранение...":t}},{key:"setEventListeners",value:function(){var e=this;R(D(c.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault();var n=e._getInputValues();e._handleFormSubmit(n)}))}},{key:"close",value:function(){R(D(c.prototype),"close",this).call(this),this._form.reset()}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(E);function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(){return J="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=V(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},J.apply(this,arguments)}function V(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}function W(e,t){return W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},W(e,t)}function M(e,t){if(t&&("object"===N(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}var G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&W(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(r);if(o){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return M(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._popupSelector=e,t._popupWithForm=document.querySelector(t._popupSelector),t._formSelector=_.formSelector,t._submitButtonSelector=_.submitButtonSelector,t._form=t._popupWithForm.querySelector(t._formSelector),t._submitButton=t._form.querySelector(t._submitButtonSelector),t}return t=c,(n=[{key:"open",value:function(){J(H(c.prototype),"open",this).call(this);var e=this._submitButton;return new Promise((function(t,n){e.addEventListener("click",(function(){t("Нажата кнопка Да")}))}))}},{key:"renderLoading",value:function(e,t){this._submitButton.textContent=e?"Удаление...":t}},{key:"setEventListeners",value:function(){J(H(c.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault()}))}},{key:"close",value:function(){J(H(c.prototype),"close",this).call(this),this._form.reset()}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(E);function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Q=function(){function e(t){var r=t.profileName,o=t.profileJob,i=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=n.querySelector(r),this._profileJob=n.querySelector(o),this._profileAvatar=n.querySelector(i)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileJob.textContent}}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.name,this._profileJob.textContent=e.about,this._profileAvatar.src=e.avatar}}])&&K(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Y,Z=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._token=t.headers.authorization}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._token}}).then(b)}},{key:"postCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then(b)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(b)}},{key:"patchProfile",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then(b)}},{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(b)}},{key:"patchAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then(b)}},{key:"putLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(b)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(b)}}])&&X(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-42",headers:{authorization:"c06528dd-39b3-409c-b174-a8e7550ae360","Content-Type":"application/json"}}),$=new t(_,a),ee=new t(_,s),te=new t(_,f),ne=new I(".gallery"),re=new Q({profileName:".profile__name",profileJob:".profile__description",profileAvatar:".profile__avatar"});Z.getProfile().then((function(e){re.setUserInfo(e),Y=e._id})).catch((function(e){return console.log(e)}));var oe=new z(".popup_edit",(function(e){oe.renderLoading(!0,"Сохранить"),Z.patchProfile(e).then((function(e){re.setUserInfo(e),oe.close()})).catch((function(e){return console.log(e)})).finally((function(){oe.renderLoading(!1,"Сохранить")}))})),ie=new z(".popup_avatar",(function(e){ie.renderLoading(!0,"Сохранить"),Z.patchAvatar(e).then((function(e){re.setUserInfo(e),ie.close()})).catch((function(e){return console.log(e)})).finally((function(){ie.renderLoading(!1,"Сохранить")}))})),ce=new G(".popup_confirm");$.enableValidation(),ee.enableValidation(),te.enableValidation(),Z.getInitialCards().then((function(e){var t=e.reverse(),n=new S({items:t,renderer:function(e){var t=m(e,ne,Z,ce,Y);n.addItem(t)}},".elements");n.renderItems();var r=new z(".popup_add",(function(e){r.renderLoading(!0,"Создать"),Z.postCard(e).then((function(e){var t=m(e,ne,Z,ce,Y);n.addItem(t),r.close()})).catch((function(e){return console.log(e)})).finally((function(){r.renderLoading(!1,"Создать")}))}));r.setEventListeners(),o.addEventListener("click",(function(){ee.resetErrors(),ee.toggleButtonState(),r.open()}))})).catch((function(e){console.log(e)})),r.addEventListener("click",(function(){$.resetErrors();var e=re.getUserInfo();p.value=e.name,h.value=e.about,oe.open()})),i.addEventListener("click",(function(){te.resetErrors(),te.toggleButtonState(),ie.open()})),ne.setEventListeners(),oe.setEventListeners(),ie.setEventListeners(),ce.setEventListeners()})();