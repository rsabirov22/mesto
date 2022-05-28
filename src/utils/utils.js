import Card from '../components/Card.js';

export function getCard(data, popupWithImage) {
  const card = new Card(
    data,
    '#card',
    function handleCardClick(url, text) {
      popupWithImage.open(url, text);
    }
  );

  return card.generateCard();
}

export const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject('Ошибка')
}
