// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

function createGalleryMarcup(galleryItems) {
  
  const markup = galleryItems

  .map(
      galleryItem =>
        `<a class="gallery__item" href="${galleryItem.original}">
          <img
            class="gallery__image"
            src="${galleryItem.preview}"
            alt="${galleryItem.description}"
          /></a>`
    )
    .join('\n');

  return markup;
}
const galleryContainer = document.querySelector('.gallery');

const cardsMarkup = createGalleryMarcup(galleryItems);

galleryContainer.innerHTML = cardsMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  docClose: false,
});

console.log(galleryItems);

