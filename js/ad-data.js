// import {
//   getRandomPositiveInteger,
//   getRandomPositiveFloat,
//   getRandomArrayElement,
//   getArray
// } from './util.js';

// const SIMILAR_ADS_COUNT = 10;
// const MIN_LAT = 35.65000;
// const MAX_LAT = 35.70000;
// const MIN_LNG = 139.70000;
// const MAX_LNG = 139.80000;
// const N_DIGITS = 5;
// const MIN_PRICE = 1000;
// const MAX_PRICE = 20000;
// const MIN_ROOMS = 1;
// const MAX_ROOMS = 5;
// const MIN_GUESTS = 1;
// const MAX_GUESTS = 5;
// const MAX_AVATAR_NUM = 11;

// const TITLES = [
//   'Лучший выбор по мнению агентов',
//   'Специальное предложение - бесплатные завтраки',
//   'Без комиссии агенту',
//   'Pet friendly хозяин',
//   'Аппартаменты 2+1 по выгодной цене',
//   'Квартира на тихой улице недалеко от центра города',
//   'Аппартаменты с видом на залив',
//   'Скидка при аренде на 10+ дней'
// ];

// const TYPES = [
//   'palace',
//   'flat',
//   'house',
//   'bungalow',
//   'hotel'
// ];

// const CHECK_TIMES = [
//   '12:00',
//   '13:00',
//   '14:00'
// ];

// const FEATURES = [
//   'wifi',
//   'dishwasher',
//   'parking',
//   'washer',
//   'elevator',
//   'conditioner'
// ];

// const DESCRIPTIONS = [
//   'В аппартаментах есть все необходимое для ваших питомцев.',
//   'Жилье бизнес класса со всеми удобствами.',
//   'Аппартаменты с максимальной безопасностью - запороленные входные двери и сейф.',
//   'Жилье в отличном районе, недалеко располагается живописный парк.',
//   'Квартира с самым красивым панорамным видом в городе!',
//   'Толстые стены дома обеспечат вам максимальную тишину во время отдыха.',
//   '',
//   'Аппартаменты располагаются в гастрономическом квартале города, лучшие рестораны и кофейни буквально за углом!'
// ];

// const PHOTOS = [
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
// ];

// const getRandomAvatar = () => {
//   const result = Math.floor(Math.random() * MAX_AVATAR_NUM) + 1; // Рандомное число от 1 до 10
//   return `../img/avatars/user${(result < 10 ? '0' : '') + result}.png`;
// };

// const createAds = () => {
//   const x = getRandomPositiveFloat(MIN_LAT, MAX_LAT, N_DIGITS);
//   const y = getRandomPositiveFloat(MIN_LNG, MAX_LNG, N_DIGITS);
//   return {
//     author: {
//       avatar: getRandomAvatar(),
//     },
//     offer: {
//       title: getRandomArrayElement(TITLES),
//       address: `${x}, ${y}`,
//       price: getRandomPositiveInteger(MIN_PRICE, MAX_PRICE),
//       type: getRandomArrayElement(TYPES),
//       rooms: getRandomPositiveInteger(MIN_ROOMS, MAX_ROOMS),
//       guests: getRandomPositiveInteger(MIN_GUESTS, MAX_GUESTS),
//       checkin: getRandomArrayElement(CHECK_TIMES),
//       checkout: getRandomArrayElement(CHECK_TIMES),
//       features: getArray(FEATURES),
//       description: getRandomArrayElement(DESCRIPTIONS),
//       photos: getArray(PHOTOS)
//     },
//     location: {
//       lat: x,
//       lng: y
//     },
//   };
// };

// const similarAds = Array.from({length: SIMILAR_ADS_COUNT}, createAds);

// export {similarAds};
