import {activatePage, form} from './form-status.js';
import {cardRender} from './card.js';
import {createLoader} from './server.js';
import {showMapError} from './show-error.js';

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

const map = L.map('map-canvas');

const getMap = (callBackFunction) => {
  map.on('load', () => {
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

const addressForm = form.querySelector('#address');
addressForm.value = `${TOKYO.lat} ${TOKYO.lng}`;
addressForm.readOnly = true;

const resetButton = document.querySelector('button[type="reset"]');

const resetMainPin = (marker) => {
  marker.setLatLng(TOKYO);
  map.setView(TOKYO, ZOOM_MAP);
};

const getResetForm = () => {
  resetMainPin(mainPinMarker);
};

L.tileLayer(
  LeafletParameters.TILE_LAYER,
  {
    attribution: LeafletParameters.ATTRIBUTION,
  },
).addTo(map);

mainPinMarker.addTo(map);

resetButton.addEventListener('click', getResetForm);

const updateAddress = (location) => {
  const lat = location.lat.toFixed(COORDINATE_ROUNDING);
  const lng = location.lng.toFixed(COORDINATE_ROUNDING);
  addressForm.value = `${lat} ${lng}`;
};

mainPinMarker.on('moveend', (evt) => {
  updateAddress(evt.target.getLatLng());
});

const createPinAd = (ad, layer = map) => {
  const marker = L.marker(ad.location, {icon: pinIcon});
  marker
    .addTo(layer)
    .bindPopup(cardRender(ad),
      {
        keepInView: true,
      },
    );
  return marker;
};

const createPinGroup = (ads) => {
  const markerGroup = L.layerGroup().addTo(map);
  ads.forEach((ad) => createPinAd(ad, markerGroup));
  return markerGroup;
};

getMap(() => {
  activatePage();
  createLoader((json) => {
    createPinGroup(json.slice(0, SIMILAR_AD_COUNT));
  }, (error) => showMapError(error));
});

export {resetMainPin, createPinAd, createPinGroup, map, TOKYO, ZOOM_MAP, mainPinMarker, addressForm};
