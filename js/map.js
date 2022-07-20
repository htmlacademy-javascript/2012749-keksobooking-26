import {activatePage, form} from './form-status.js';
import {cardRender} from './card.js';

const COORDINATE_ROUNDING = 5;

const TOKYO = {
  lat: 35.69034,
  lng: 139.75175,
};

const ZOOM_MAP = 12;

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const pinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const map = L.map('map-canvas')
  .on('load', () => {
    activatePage();
  })
  .setView(TOKYO, ZOOM_MAP);

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

const createMarkerGroup = (ads) => {
  const markerGroup = L.layerGroup().addTo(map);
  ads.forEach((ad) => createPinAd(ad, markerGroup));
  return markerGroup;
};

export {resetMainPin, createPinAd, createMarkerGroup};
