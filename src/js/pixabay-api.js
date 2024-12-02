import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
//https://pixabay.com/api/

//let query; //user's search by word;
export const API_KEY = '47332202-20d723453e83dbf57917d8670';

export function fetchImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `https://pixabay.com/api/?${params}`;

  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    //console.log(res.statusText);
    return res.json();
  });
}
