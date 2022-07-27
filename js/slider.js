import {minTypePrice} from './form-validation.js';

const SLIDER_RANGE = {
  min: 0,
  max: 100000,
};

const SLIDER_START = 1000;
const SLIDER_STEP = 10;

const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('#price');
const type = document.querySelector('#type');

noUiSlider.create(sliderElement, {
  range: {
    min: SLIDER_RANGE.min,
    max: SLIDER_RANGE.max,
  },
  start: SLIDER_START,
  step: SLIDER_STEP,
  connect: 'lower',
});

type.addEventListener('change', () => {
  sliderElement.noUiSlider.set(minTypePrice[type.value]);
  valueElement.value = '';
  valueElement.placeholder = Math.floor(sliderElement.noUiSlider.get());
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = Math.floor(sliderElement.noUiSlider.get());
});

valueElement.placeholder = 1000;
valueElement.value = '';
