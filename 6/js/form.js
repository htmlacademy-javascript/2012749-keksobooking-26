const form = document.querySelector('.ad-form');
const formFieldset = form.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFilterSelect = mapFilters.querySelectorAll('select');
const mapFilterFieldset = mapFilters.querySelectorAll('fieldset');

const pageDisabled = () => {
  form.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');

  formFieldset.forEach( (filter) => {
    filter.disabled = true;
  } );
  mapFilterSelect.forEach( (filter) => {
    filter.disabled = true;
  } );
  mapFilterFieldset.forEach( (filter) => {
    filter.disabled = true;
  } );
};

pageDisabled();

const pageActive = () => {
  form.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');

  formFieldset.forEach( (filter) => {
    filter.disabled = false;
  } );
  mapFilterSelect.forEach( (filter) => {
    filter.disabled = false;
  } );
  mapFilterFieldset.forEach( (filter) => {
    filter.disabled = false;
  } );
};

pageActive();

export{
  pageDisabled,
  pageActive
};
