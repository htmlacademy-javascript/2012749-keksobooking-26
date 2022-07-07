// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// math.floor - округляет в меньшую сторону
// math.random - задает случайное значение от 0 до 1

// eslint-disable-next-line no-unused-vars
function randomInt(min, max) {
  if (max===min) {
    // eslint-disable-next-line no-console
    console.log(`randomInt: Минимальное и максимальное число равны. Единственный подходящий ответ: ${min}`);
    return -1;
  }
  if (min>max) { //Минимальное число больше максимального
    // eslint-disable-next-line no-console
    console.error('randomInt: Минимальное число больше максимального');
    return -1;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
// toFixed - сводит число до необходимого количества знаков после запятой

// eslint-disable-next-line no-unused-vars
function randomFloat(min, max, point) {
  if (max===min) {
    // eslint-disable-next-line no-console
    console.log(`randomFloat: Минимальное и максимальное число равны. Единственный подходящий ответ: ${min}`);
    return -1;
  }
  if (min>max) { //Минимальное число больше максимального
    // eslint-disable-next-line no-console
    console.error('randomFloat: Минимальное число больше максимального');
    return -1;
  }
  const result = Math.random() * (max - min + 1) + min;
  return result.toFixed(point);
}

// Функция взята из задания 4.14
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

// eslint-disable-next-line no-unused-vars
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// eslint-disable-next-line no-unused-vars
function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

// Задание 14.5

const SIMILAR_ADS_COUNT = 10;

const TITLES = [
  'Лучший выбор по мнению агентов',
  'Специальное предложение - бесплатные завтраки',
  'Без комиссии агенту',
  'Pet friendly хозяин',
  'Аппартаменты 2+1 по выгодной цене',
  'Квартира на тихой улице недалеко от центра города',
  'Аппартаменты с видом на залив',
  'Скидка при аренде на 10+ дней'
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECK_TIMES = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const DESCRIPTIONS = [
  'В аппартаментах есть все необходимое для ваших питомцев.',
  'Жилье бизнес класса со всеми удобствами.',
  'Аппартаменты с максимальной безопасностью - запороленные входные двери и сейф.',
  'Жилье в отличном районе, недалеко располагается живописный парк.',
  'Квартира с самым красивым панорамным видом в городе!',
  'Толстые стены дома обеспечат вам максимальную тишину во время отдыха.',
  'Аппартаменты располагаются в гастрономическом квартале города, лучшие рестораны и кофейни буквально за углом!'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// Источник - https://ru.stackoverflow.com/questions/1293985/%D0%9A%D0%B0%D0%BA-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2-%D1%81%D1%82%D1%80%D0%BE%D0%BA-%D0%B8%D0%B7-%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D0%BE%D0%B9-%D0%B4%D0%BB%D0%B8%D0%BD%D1%8B-%D0%B8-%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D1%8B%D1%85-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B9
function getArray (features) {
  const maxLength = features.length;
  const lengthOfArray = getRandomPositiveInteger(1, maxLength);
  const array = [];
  while (array.length < lengthOfArray) {
    const indexOfEl = getRandomPositiveInteger(0, maxLength - 1);
    const el = features[indexOfEl];
    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}

// eslint-disable-next-line no-unused-vars
const getRandomAvatar = () => {
  const result = Math.random() * (10 - 1) + 1; // Рандомное число от 1 до 10
  return `img/avatars/user${(result < 10 ? '0' : '') + (result + 1)}.png`;
};

const createAds = () => {
  const MIN_LAT = 35.65000;
  const MAX_LAT = 35.70000;
  const MIN_LNG = 139.70000;
  const MAX_LNG = 139.80000;
  const N_DIGITS = 5;
  const MIN_PRICE = 1000;
  const MAX_PRICE = 10000;
  const MIN_ROOMS = 1;
  const MAX_ROOMS = 5;
  const MIN_GUESTS = 1;
  const MAX_GUESTS = 10;
  const x = getRandomPositiveFloat(MIN_LAT, MAX_LAT, N_DIGITS);
  const y = getRandomPositiveFloat(MIN_LNG, MAX_LNG, N_DIGITS);
  return {
    author: {
      avatar: getRandomAvatar(),
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${x}, ${y}`,
      price: getRandomPositiveInteger(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomPositiveInteger(MIN_ROOMS, MAX_ROOMS),
      guests: getRandomPositiveInteger(MIN_GUESTS, MAX_GUESTS),
      checkin: getRandomArrayElement(CHECK_TIMES),
      checkout: getRandomArrayElement(CHECK_TIMES),
      features: getArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getArray(PHOTOS)
    },
    location: {
      lat: x,
      lng: y
    },
  };
};

// eslint-disable-next-line no-unused-vars
const similarAds = Array.from({length: SIMILAR_ADS_COUNT}, createAds);

// eslint-disable-next-line no-unused-expressions
similarAds;
