import {
  // eslint-disable-next-line no-unused-vars
  similarAds
} from './ad-data.js';

// eslint-disable-next-line no-unused-vars
const map = document.querySelector('.map__canvas');
const cardTemplate = document.querySelector('#card').content;
const popupCard = cardTemplate.querySelector('.popup');
const PHOTO_WIDTH = 45;
const PHOTO_HEIGHT = 40;

const typesOfHousing = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const renderFeatures = (features, container) => {
  if (features) {
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();
    features.forEach((feature) => {
      const element = document.createElement('li');
      element.classList.add('popup__feature');
      element.classList.add(`popup__feature--${feature}`);
      fragment.appendChild(element);
    });
    container.appendChild(fragment);
    return;
  }
  container.classList.add('.visually-hidden');
};

const renderPhotos = (photos, container) => {
  if (photos) {
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();
    photos.forEach((photo) => {
      const element = document.createElement('img');
      element.classList.add('popup__photo');
      element.src = photo;
      element.width = PHOTO_WIDTH;
      element.height = PHOTO_HEIGHT;
      fragment.appendChild(element);
    });
    container.appendChild(fragment);
    return;
  }
  container.classList.add('.visually-hidden');
};

const cardRender = (element) => {
  const card = popupCard.cloneNode(true);
  card.querySelector('.popup__avatar').src = element.author.avatar;
  card.querySelector('.popup__title').textContent = element.offer.title;
  card.querySelector('.popup__text--address').textContent = element.offer.address;
  card.querySelector('.popup__text--price').textContent = `${element.offer.price} ₽/ночь`;
  card.querySelector('.popup__type').textContent = typesOfHousing[element.offer.type];
  card.querySelector('.popup__text--capacity').textContent = `${element.offer.rooms} комнаты для ${element.offer.guests} гостей`;
  card.querySelector('.popup__text--time').textContent =  `Заезд после ${element.offer.checkin}, выезд до ${element.offer.checkout}`;
  renderFeatures(element.offer.features, card.querySelector('.popup__features'));
  if (!element.offer.description) {
    card.querySelector('.popup__description').classList.add('visually-hidden');
  }
  else {card.querySelector('.popup__description').textContent = element.offer.description;}
  renderPhotos(element.offer.photos, card.querySelector('.popup__photos'));
  return card;
};

export {
  cardRender
};
