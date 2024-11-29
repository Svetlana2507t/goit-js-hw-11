import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
//https://pixabay.com/api/

import { API_KEY, fetchImages } from './js/pixabay-api.js';

const form = document.querySelector('.js-search-form');
const qInput = document.querySelector('#query');
let query;

form.addEventListener('submit', event => {
  event.preventDefault();
  query = qInput.value.trim();
  console.log('Submitted query:', query);
  fetchImages(query, API_KEY);
});

//fetchImages(query, API_KEY);
