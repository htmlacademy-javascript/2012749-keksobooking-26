const SIMILAR_AD_COUNT = 10;
const LOW_PRICE = 10000;
const HIGH_PRICE = 50000;
const ANY_VALUE = 'any';

const priceValue = {
  LOW: 'low',
  MIDDLE: 'middle',
  HIGH: 'high',
  ANY: 'any',
};

const filters = document.querySelector('.map__filters');
const typeFilter = filters.querySelector('#housing-type');
const priceFilter = filters.querySelector('#housing-price');
const roomsFilter = filters.querySelector('#housing-rooms');
const guestsFilter = filters.querySelector('#housing-guests');
const featuresFilter = filters.querySelector('#housing-features');

const checkType = (data) => typeFilter.value === data.offer.type || typeFilter.value === ANY_VALUE;

const checkPrice = (data) => {
  switch (priceFilter.value) {
    case priceValue.LOW:
      return data.offer.price < LOW_PRICE;
    case priceValue.MIDDLE:
      return data.offer.price >= LOW_PRICE && data.offer.price <= HIGH_PRICE;
    case priceValue.HIGH:
      return data.offer.price > HIGH_PRICE;
    case priceValue.ANY:
      return true;
  }
};

const checkRooms = (data) => +roomsFilter.value === data.offer.rooms || roomsFilter.value === ANY_VALUE;

const checkGuests = (data) => +guestsFilter.value === data.offer.guests || guestsFilter.value === ANY_VALUE;

const checkFeatures = (data) => {
  const checked = Array.from(featuresFilter.querySelectorAll('input[type="checkbox"]:checked'));
  const dataFeatures = data.offer.features;
  if (dataFeatures) {
    return checked.every((feature) => dataFeatures.includes(feature.value));
  }
};

const checkFilters = (data) => data.filter((value) => checkType(value) && checkPrice(value) && checkRooms(value) && checkGuests(value) && checkFeatures(value)).slice(0, SIMILAR_AD_COUNT);
const changeFilters = (cb) => {
  filters.addEventListener('change', () => { cb(); });
};

export { checkFilters, changeFilters };
