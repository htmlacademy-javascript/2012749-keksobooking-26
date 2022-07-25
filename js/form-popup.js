const successPopup = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorPopup = document.querySelector('#error').content.querySelector('.error').cloneNode(true);

const errorMessage = errorPopup.querySelector('.error__message');
const closeButton = errorPopup.querySelector('.error__button');

const isEscEvent = (evt) => evt.key === ('Escape' || 'Esc');

const showSuccessPopup = () => {
  const page = document.body;
  page.appendChild(successPopup);
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      successPopup.remove();
    }
  });
  document.addEventListener('click', () => {
    successPopup.remove();
  });
};

const showErrorPopup = () => {
  const page = document.body;
  errorMessage.textContent = 'Ошибка загрузки данных';
  page.appendChild(errorPopup);
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      errorPopup.remove();
    }
  });
  closeButton.addEventListener('click', () => {
    errorPopup.remove();
  });
};

export {
  showSuccessPopup,
  showErrorPopup
};
