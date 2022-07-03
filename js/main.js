// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// math.floor - округляет в меньшую сторону
// math.random - задает случайное значение от 0 до 1

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

randomInt(1, 10);
randomFloat(1, 10, 5);
