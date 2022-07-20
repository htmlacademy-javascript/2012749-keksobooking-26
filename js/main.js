/* eslint-disable no-unused-vars */
import { cardRender } from './card.js';
import { similarAds } from './ad-data.js';
import { disablePage, activatePage } from './form-status.js';
import './form-validation.js';
import {createMarkerGroup} from './map.js';
import './slider.js';

createMarkerGroup(similarAds);
