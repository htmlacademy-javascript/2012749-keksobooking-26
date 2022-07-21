/* eslint-disable no-unused-vars */
import { cardRender } from './card.js';
import { similarAds } from './ad-data.js';
import { disablePage, activatePage } from './form-status.js';
import './form-validation.js';
import {createPinGroup} from './map.js';
import './slider.js';

createPinGroup(similarAds);
