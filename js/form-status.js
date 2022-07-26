const form = document.querySelector('.ad-form');
const formFieldset = form.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFilterSelect = mapFilters.querySelectorAll('select');
const mapFilterFieldset = mapFilters.querySelectorAll('fieldset');

const disablePage = () => {
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

const activatePage = () => {
  form.classList.remove('ad-form--disabled');

  formFieldset.forEach( (filter) => {
    filter.disabled = false;
  } );
};

const activateFilters = () => {
  mapFilters.classList.remove('map__filters--disabled');
  mapFilterSelect.forEach( (filter) => {
    filter.disabled = false;
  } );
  mapFilterFieldset.forEach( (filter) => {
    filter.disabled = false;
  } );
};

export{
  form,
  disablePage,
  activatePage,
  activateFilters
};
