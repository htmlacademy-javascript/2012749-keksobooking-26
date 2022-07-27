const successPopup = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorPopup = document.querySelector('#error').content.querySelector('.error').cloneNode(true);

const errorMessage = errorPopup.querySelector('.error__message');
const closeButton = errorPopup.querySelector('.error__button');

const isEscEvent = (evt) => evt.key === ('Escape' || 'Esc');

const showSuccessPopup = () => {
  const page = document.body;
  page.appendChild(successPopup);

  const  onKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      successPopup.remove();
      document.removeEventListener('keydown', onKeydown);
    }
  };

  document.addEventListener('keydown', onKeydown);
  successPopup.addEventListener('click', () => {
    successPopup.remove();
    document.removeEventListener('keydown', onKeydown);
  });
};

const showErrorPopup = () => {
  const page = document.body;
  errorMessage.textContent = 'Ошибка загрузки данных';
  page.appendChild(errorPopup);

  const onKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      errorPopup.remove();
      document.removeEventListener('keydown', onKeydown);
    }
  };

  document.addEventListener('keydown', onKeydown);
  closeButton.addEventListener('click', () => {
    errorPopup.remove();
    document.removeEventListener('keydown', onKeydown);
  });
  errorPopup.addEventListener('click', () => {
    errorPopup.remove();
    document.removeEventListener('keydown', onKeydown);
  });
};

export {
  showSuccessPopup,
  showErrorPopup
};
