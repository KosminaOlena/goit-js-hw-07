import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const markup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', markup);

galleryContainer.addEventListener('click', onGalleryModal);


function createGalleryMarkup(images) {
    return images.map(({ preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
        </div>`
    }).join('');
};
function onGalleryModal(event) {
    
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    event.preventDefault();  
    
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`,{
		onShow: (instance) => window.addEventListener('keydown', onKeyEscPress),
		onClose: (instance) => window.removeEventListener('keydown', onKeyEscPress)
	})
    instance.show();

       function onKeyEscPress(event) {
    if (event.code === 'Escape') {
            instance.close();
        }
    }
};
