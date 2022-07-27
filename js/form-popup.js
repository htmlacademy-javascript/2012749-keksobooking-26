const successPopup = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorPopup = document.querySelector('#error').content.querySelector('.error').cloneNode(true);

const errorMessage = errorPopup.querySelector('.error__message');
const closeButton = errorPopup.querySelector('.error__button');

const isEscEvent = (evt) => evt.key === ('Escape' || 'Esc');

const removeSuccessPopup = (onKeydown) => {
  successPopup.remove();
  document.removeEventListener('keydown', onKeydown);
};

const removeErrorPopup = (onKeydown) => {
  errorPopup.remove();
  document.removeEventListener('keydown', onKeydown);
};

const showSuccessPopup = () => {
  const page = document.body;
  page.appendChild(successPopup);

  const  onKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      removeSuccessPopup(onKeydown);
    }
  };

  document.addEventListener('keydown', onKeydown);
  successPopup.addEventListener('click', () => {
    removeSuccessPopup(onKeydown);
  });
};

const showErrorPopup = () => {
  const page = document.body;
  errorMessage.textContent = 'Ошибка загрузки данных';
  page.appendChild(errorPopup);

  const onKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      removeErrorPopup(onKeydown);
    }
  };

  document.addEventListener('keydown', onKeydown);
  closeButton.addEventListener('click', () => {
    removeErrorPopup(onKeydown);
  });
  errorPopup.addEventListener('click', () => {
    removeErrorPopup(onKeydown);
  });
};

export {
  showSuccessPopup,
  showErrorPopup
};
