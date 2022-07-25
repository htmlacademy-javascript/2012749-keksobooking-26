const DATA = 'https://26.javascript.pages.academy/keksobooking/data';
const SERVER = 'https://26.javascript.pages.academy/keksobooking';

const INTERNAL_SERVER_ERROR = 500;
const VERSION_NOT_SUPPORTED_ERROR = 505;

const createLoader = (onSuccess, onFail) => fetch(
  DATA,
  {
    method: 'GET',
    credentials: 'same-origin',
  },
)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((response) => {
    onSuccess(response);
  })
  .catch((err) => {
    onFail(`Ошибка загрузки данных: ${err}`);
  });


const sendForm = (onSuccess, onFail, body) => fetch(
  SERVER, {
    method: 'POST',
    body,
  },
)
  .then((response) => {
    if (response.ok) {
      onSuccess('Ваше объявление успешно размещено!');
    } else if (response.status >= INTERNAL_SERVER_ERROR && response.status <= VERSION_NOT_SUPPORTED_ERROR) {
      onFail('Не удалось получить данные с сервера. Попробуйте ещё раз!');
    } else {
      onFail('Не удалось отправить форму. Попробуйте ещё раз!');
    }
  })
  .catch(() => {
    onFail('Не удалось отправить форму. Попробуйте ещё раз!');
  });

export {
  createLoader, sendForm
};
