// eslint-disable-next-line no-unused-vars
import { form } from './form-status.js';

const titleForm = form.querySelector('#title');
const priceForm = form.querySelector('#price');
const roomNumForm = form.querySelector('#room_number');
const capacityForm = form.querySelector('#capacity');
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_LENGHT = 100000;

const validateTitle = () => {
  if (titleForm.value.length < MIN_TITLE_LENGTH || titleForm.value.length > MAX_TITLE_LENGTH) {
    titleForm.setCustomValidity(`Минимальная длина: ${MIN_TITLE_LENGTH} символов. Максимальная длина: ${MAX_TITLE_LENGTH} символов.`);
  } else {titleForm.setCustomValidity('');}
  titleForm.reportValidity();
};

const validatePrice = () => {
  if (priceForm.value > MAX_PRICE_LENGHT) {
    priceForm.setCustomValidity(`Максимальная цена за ночь: ${MAX_PRICE_LENGHT}.`);
  } else {priceForm.setCustomValidity('');}
  priceForm.reportValidity();
};

const validateCapacityNum = () => {
  if (roomNumForm.value === '1' && capacityForm.value !== '1') {
    capacityForm.setCustomValidity('1 комната - 1 гость');
  } else if (roomNumForm.value === '2' && capacityForm.value !== '1' && capacityForm.value !== '2') {
    capacityForm.setCustomValidity('2 комнаты - от 1 до 2 гостей');
  } else if (roomNumForm.value === '3' && capacityForm.value === '0') {
    capacityForm.setCustomValidity('3 комнаты - от 1 до 3 гостей');
  } else if (roomNumForm.value === '100' && capacityForm.value !== '0') {
    capacityForm.setCustomValidity('100 комнат - не для гостей');
  } else {capacityForm.setCustomValidity('');}
  capacityForm.reportValidity();
};

titleForm.addEventListener('input', validateTitle);
priceForm.addEventListener('input', validatePrice);
roomNumForm.addEventListener('change', validateCapacityNum);
capacityForm.addEventListener('change', validateCapacityNum);
