const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('#price');

const sliderRange = {
  min: 0,
  max: 100000,
};

const sliderStart = 1000;
const sliderStep = 10;

noUiSlider.create(sliderElement, {
  range: {
    min: sliderRange.min,
    max: sliderRange.max,
  },
  start: sliderStart,
  step: sliderStep,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});
