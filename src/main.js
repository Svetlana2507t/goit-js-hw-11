import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
iziToast.settings({
  position: 'topRight',
});

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api.js';
import {
  createMarkup,
  renderMarkup,
  clearCardContainer,
} from './js/render-functions.js';

const form = document.querySelector('.js-search-form');
const qInput = document.querySelector('#query');
const loader = document.getElementById('loader');
const cardContainer = document.querySelector('.image-cards');
export { cardContainer };
let query;
const lightbox = new SimpleLightbox('.image-cards a');

form.addEventListener('submit', event => {
  event.preventDefault();
  clearCardContainer(cardContainer);
  query = qInput.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Error',
      message: 'Please enter a searched word',
    });
    return;
  }

  //console.log('Submitted query:', query);

  // Show loader
  loader.classList.remove('disabled');
  //console.log('Loader active:', loader.classList);

  setTimeout(() => {
    fetchImages(query)
      .then(data => {
        //console.log('API Data:', data);

        if (data.hits.length === 0) {
          iziToast.warning({
            title: 'No Results',
            message: 'No images found for your query.',
          });
          clearCardContainer(cardContainer); // Clear the cardContainer if no results
          return;
        }

        const markup = createMarkup(data.hits);
        renderMarkup(cardContainer, markup); // Render markup into the list

        lightbox.refresh(); // Refresh lightbox for new elements
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        iziToast.error({
          title: 'Error',
          message: `Failed to fetch images: ${error.message}`,
        });
      })
      .finally(() => {
        // Hide loader
        loader.classList.add('disabled');
        //console.log('Loader disabled:', loader.classList);
      });
  }, 2000);
});
