import { disablePage } from './form-status.js';
import './form-validation.js';
import './slider.js';
import { getMap, uploadData } from './map.js';
import './preview-photo.js';

// Неактивное состояние страницы
disablePage();

// Загрузка карты. Переход страницы в активное состояние
getMap(uploadData);
