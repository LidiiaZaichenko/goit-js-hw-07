import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryContainer = createGalleryItems(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryContainer);

gallery.addEventListener("click", onGalleryItemsClick);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

function onGalleryItemsClick(evt) {
  evt.preventDefault();
  const isImgEl = evt.target.classList.contains("gallery__image");
  if (!isImgEl) {
    return;
  }
  const intance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`
  );
  intance.show();
}
