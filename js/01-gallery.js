import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

//1.Рендеринг

const galleryWrapperRef = document.querySelector(".gallery");
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

//2.Реалізація делегування на ul.gallery і отримання url великого зображення.
const allGalleryItems = document.querySelectorAll(".gallery a");
console.log(allGalleryItems);

allGalleryItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const imageUrl = item.getAttribute("href");
    console.log(imageUrl);

    const modalCreated = basicLightbox.create(`
    <img src="${imageUrl}" width="400" height="400">
`);

    modalCreated.show();

    window.addEventListener("keydown", (event) => {
      console.log(event.key);
      if (event.key === "Escape") {
        modalCreated.close();
      }
    });
  });
});

//перевірка підключення basicLightbox

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `);

// instance.show();
