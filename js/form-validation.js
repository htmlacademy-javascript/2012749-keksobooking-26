// eslint-disable-next-line no-unused-vars
import { form } from './form-status.js';

const pristineForm = new Pristine(form, {
  classTo: 'ad-form__element', // Элемент, на который будут добавляться классы
  errorClass: 'ad-form__element--invalid', // Класс, обозначающий невалидное поле
  successClass: 'ad-form__element--valid', // Класс, обозначающий валидное поле
  errorTextParent: 'ad-form__element', // Элемент, куда будет выводиться текст с ошибкой
  errorTextTag: 'span', // Тег, который будет обрамлять текст ошибки
  errorTextClass: 'ad-form__error' // Класс для элемента с текстом ошибки
});

const titleForm = form.querySelector('#title');
const priceForm = form.querySelector('#price');
const roomNumForm = form.querySelector('#room_number');
const capacityForm = form.querySelector('#capacity');
const typeForm = form.querySelector('#type');
const timeinForm = form.querySelector('#timein');
const timeoutForm = form.querySelector('#timeout');
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_VALUE = 100000;
const roomsCapacity = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};
const minTypePrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};
const capacityErrorMessage = {
  '1': 'Одна комната - один гость',
  '2': 'Две комнаты - от одного до двух гостей',
  '3': 'Три комнаты - от одного до трёх гостей',
  '100': 'Не для гостей',
};

const validateTitle = () => titleForm.value.length >= MIN_TITLE_LENGTH && titleForm.value.length <= MAX_TITLE_LENGTH;

const validatePrice = () => priceForm.value <= MAX_PRICE_VALUE;

const validateCapacityNum = () => roomsCapacity[roomNumForm.value].includes(capacityForm.value);

const validateTypePrice = () => minTypePrice[typeForm.value] <= priceForm.value;

const getCapacityErrorMessage = () => capacityErrorMessage[roomNumForm.value];

const getTypeErrorMessage = () => `Минимальная цена за ночь: ${minTypePrice[typeForm.value]} рублей.`;

const roomCapacityChange = () => {
  pristineForm.validate(roomNumForm);
};

const typePriceChange = () => {
  pristineForm.validate(typeForm);
};

pristineForm.addValidator(titleForm, validateTitle, `От ${MIN_TITLE_LENGTH} до ${MAX_TITLE_LENGTH} символов.`);
pristineForm.addValidator(priceForm, validatePrice, `Максимальная цена за ночь ${MAX_PRICE_VALUE}.`);
pristineForm.addValidator(roomNumForm, validateCapacityNum, getCapacityErrorMessage);
pristineForm.addValidator(typeForm, validateTypePrice, getTypeErrorMessage, false);

[priceForm, capacityForm].forEach((item) => item.addEventListener('change', roomCapacityChange));
[typeForm, capacityForm].forEach((item) => item.addEventListener('change', typePriceChange));

timeinForm.addEventListener('change', () => {
  timeoutForm.value = timeinForm.value;
});

timeoutForm.addEventListener('change', () => {
  timeinForm.value = timeoutForm.value;
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristineForm.validate();
});
