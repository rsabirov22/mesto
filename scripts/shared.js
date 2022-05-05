export const gallery = document.querySelector('.gallery');
export const galleryImg = gallery.querySelector('.gallery__img');
export const gallerydescr = gallery.querySelector('.gallery__description');

export function closePopup(popup) {
  popup.classList.remove('popup_opened');

  document.removeEventListener('keydown', handleEscape);
  popup.removeEventListener('click', handleClickOutside);
}

export function handleClickOutside (evt) {
  const popup = evt.currentTarget;

  if (evt.target === evt.currentTarget) {
    closePopup(popup);
	}
}

export function handleEscape (evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');

    closePopup(popup);
  }
}

export function openPopup(popup) {
  popup.classList.add('popup_opened');

  document.addEventListener('keydown', handleEscape);
  popup.addEventListener('click', handleClickOutside);
}
