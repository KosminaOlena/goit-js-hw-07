import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const markup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', markup);

// galleryContainer.addEventListener('click', onGalleryModal);

function createGalleryMarkup(images) {
    return images.map(({ preview, original, description}) => {
        return `
        <li class="gallery__item">
        <a href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>
        </li>
        `
    }).join('');
};


    const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 ,});
  
