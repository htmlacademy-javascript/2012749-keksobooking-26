// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// math.floor - округляет в меньшую сторону
// math.random - задает случайное значение от 0 до 1

function randomInt(min, max) {
  if (max===min) {
    return `Минимальное и максимальное число равны. Единственный подходящий ответ: ${min}`;
  }
  else {
    if (min>max) { //Минимальное число больше максимального, находим диапазон от min до max
      let mid = min;
      min = max;
      max = mid;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
// toFixed - сводит число до необходимого количества знаков после запятой

function randomFloat(min, max, point) {
  if (max===min) {
    return `Минимальное и максимальное число равны. Единственный подходящий ответ: ${min}`;
  }
  else {
    if (min>max) { //Минимальное число больше максимального, находим диапазон от min до max
      let mid = min;
      min = max;
      max = mid;
    }
    let result = Math.random() * (max - min + 1) + min;
    return result.toFixed(point);
  }
}

randomInt();
randomFloat();
