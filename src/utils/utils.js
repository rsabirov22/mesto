import Card from '../components/Card.js';

export function getCard(data, popupWithImage, api, popupConfirmDelete) {
  const card = new Card(
    data,
    '#card',
    function handleCardClick(url, text) {
      popupWithImage.open(url, text);
    },
    function handlePutLike(id) {
      api.putLike(id)
        .then((data) => {
          console.log(data);
        })
        .catch(err => console.log(err));
    },
    function handleDeleteLike(id) {
      api.deleteLike(id)
        .then((data) => {
          console.log(data);
        })
        .catch(err => console.log(err));
    },
    function handleDeleteCard(id, element) {
      popupConfirmDelete.open()
        .then(() => {
          api.deleteCard(id)
            .then(() => {
              element.remove();
              element = null;
            })
            .catch(err => console.log(err));
      });
    }
  );

  return card.generateCard();
}

export const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`)
}
