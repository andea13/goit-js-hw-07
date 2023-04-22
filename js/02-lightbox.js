import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryWrapperRef = document.querySelector(".gallery");
const galleryLinkRef = document.querySelector(".gallery__link");
console.log(galleryLinkRef);
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryWrapperRef.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

let lightbox = new SimpleLightbox(".gallery a", {});
