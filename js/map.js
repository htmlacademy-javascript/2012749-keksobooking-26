import {minTypePrice} from './form-validation.js';
import {cardRender} from './card.js';
import {createLoader} from './server.js';
import {showMapError} from './show-error.js';
import {resetPreview} from './preview-photo.js';
import {checkFilters,changeFilters} from './filter.js';
import {debounce} from './util.js';
import { activatePage } from './form-status.js';
import {sliderElement} from './slider.js';

const COORDINATE_ROUNDING = 5;
const SIMILAR_AD_COUNT = 10;

const TOKYO = {
  lat: 35.69034,
  lng: 139.75175,
};

const ZOOM_MAP = 12;
const MAIN_PIN_WIDTH = 52;
const MAIN_PIN_HEIGHT = 52;
const MAIN_PIN_POSITION_X = 26;
const MAIN_PIN_POSITION_Y = 52;

const PIN_WIDTH = 40;
const PIN_HEIGHT = 40;
const PIN_POSITION_X = 20;
const PIN_POSITION_Y = 40;

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [MAIN_PIN_WIDTH, MAIN_PIN_HEIGHT],
  iconAnchor: [MAIN_PIN_POSITION_X, MAIN_PIN_POSITION_Y],
});

const pinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [PIN_WIDTH, PIN_HEIGHT],
  iconAnchor: [PIN_POSITION_X, PIN_POSITION_Y],
});

const form = document.querySelector('.ad-form');
const resetButton = document.querySelector('.ad-form__reset');
const addressForm = form.querySelector('#address');
const filterMap = document.querySelector('.map__filters');
const price = document.querySelector('#price');
const type = document.querySelector('#type');
const markers = [];

const map = L.map('map-canvas');

const getMap = (callBackFunction) => {
  map.on('load', () => {
    activatePage();
    callBackFunction();
  })
    .setView(
      TOKYO,
      ZOOM_MAP);
};

const LeafletParameters = {
  TILE_LAYER: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
};

const mainPinMarker = L.marker(
  TOKYO,
  {
    icon: mainPinIcon,
    draggable: true,
  },
);

L.tileLayer(
  LeafletParameters.TILE_LAYER,
  {
    attribution: LeafletParameters.ATTRIBUTION,
  },
).addTo(map);

const updateAddress = (location) => {
  const lat = location.lat.toFixed(COORDINATE_ROUNDING);
  const lng = location.lng.toFixed(COORDINATE_ROUNDING);
  addressForm.value = `${lat} ${lng}`;
};

const createPinAd = (ad) => {
  const marker = L.marker(ad.location, {icon: pinIcon});
  marker
    .addTo(map)
    .bindPopup(cardRender(ad),
      {
        keepInView: true,
      },
    );
  return markers.push(marker);
};

const deletePins = () => {
  markers.forEach((marker) => marker.remove());
};

const createPinGroup = (ads) => {
  ads.forEach((ad) => {
    createPinAd(ad);
  });
};

const uploadData = () => {
  createLoader((json) => {
    createPinGroup(json.slice(0, SIMILAR_AD_COUNT));
    changeFilters(debounce(() => {
      deletePins();
      createPinGroup(checkFilters(json));
    }));
  }, (error) => showMapError(error));
};

const setDefaultState = () => {
  markers.forEach((marker) => marker.bindPopup({keepInView: false,}));
  form.reset();
  filterMap.reset();
  mainPinMarker.setLatLng(
    TOKYO,
  );
  map.setView(
    TOKYO,
    ZOOM_MAP);
  addressForm.value = `${TOKYO.lat} ${TOKYO.lng}`;
  sliderElement.noUiSlider.reset();
  price.value = '';
  price.placeholder = minTypePrice[type.value];
  deletePins();
  createLoader((json) => {
    createPinGroup(json.slice(0, SIMILAR_AD_COUNT));
  }, (error) => showMapError(error));
};

const resetMainPin = (marker) => {
  marker.setLatLng(TOKYO);
  map.setView(TOKYO, ZOOM_MAP);
};

const getResetForm = () => {
  resetPreview();
  resetMainPin(mainPinMarker);
  setDefaultState();
};

addressForm.value = `${TOKYO.lat} ${TOKYO.lng}`;
addressForm.readOnly = true;

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  updateAddress(evt.target.getLatLng());
});

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  getResetForm();
});

export { setDefaultState, getMap, uploadData };
