import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
//https://pixabay.com/api/

//let query; //user's search by word;
export const API_KEY = '47332202-20d723453e83dbf57917d8670';

// const params = new URLSearchParams({
// API_KEY: 47332202 - 20d723453e83dbf57917d8670,
// q: userSearch,
// image_type: "photo",
// orientation: "horizontal",
// safesearch: true
// })

//const list = document.querySelector('.list');

export function fetchImages(query, API_KEY) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo`;
  console.log(url);
  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => console.log(error));
}
