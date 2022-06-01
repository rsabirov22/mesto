import Card from '../components/Card.js';

export function getCard(data, popupWithImage, api, popupConfirmDelete) {
  const card = new Card(
    data,
    '#card',
    function handleCardClick(url, text) {
      popupWithImage.open(url, text);
    },
    function handlePutLike(id) {
      return api.putLike(id);
    },
    function handleDeleteLike(id) {
      return api.deleteLike(id);
    },
    function handleDeleteCard(id, element) {
      popupConfirmDelete.open()
        .then(() => {
          popupConfirmDelete.renderLoading(true, 'Да');

          api.deleteCard(id)
            .then(() => {
              card.removeElementFromDom(element);

              popupConfirmDelete.close();
            })
            .catch(err => console.log(err))
            .finally(() => {
              popupConfirmDelete.renderLoading(false, 'Да');
            });
      })
      .catch(err => console.log(err));;
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
