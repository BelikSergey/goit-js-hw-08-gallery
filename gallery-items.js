import galleryData from "./export.js";
console.log(galleryData);

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
const listGaleryItemsEl = document.querySelector(".js-gallery");
console.log(listGaleryItemsEl);

const marcupHTML = createMarcupGallery(galleryData);
console.log(marcupHTML);

listGaleryItemsEl.insertAdjacentHTML("beforeend", marcupHTML);

// создал разметку
function createMarcupGallery(params) {
  return params
    .map(({ preview, original, description }) => {
      return ` <li li class="gallery__item" >
    <a
        class="gallery__link"
        href="${original}"
    >
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

// Реализация делегирования на галерее ul.js - gallery и получение url большого изображения.
