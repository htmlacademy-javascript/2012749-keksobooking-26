import { disablePage } from './form-status.js';
import { getMap, uploadData } from './map.js';

// Неактивное состояние страницы
disablePage();

// Загрузка карты. Переход страницы в активное состояние
getMap(uploadData);
