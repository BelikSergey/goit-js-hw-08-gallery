import galleryData from "./export.js";
// const data = galleryData.forEach((element, inx) => {
//   console.log(`${element}   ${inx}`);
// });
// console.log(data);

let currentIndex = 0;

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
const listGaleryItemsEl = document.querySelector(".js-gallery");
// console.log(listGaleryItemsEl);

const backDropModal = document.querySelector(".js-lightbox");
// console.log(backDropModal);

const buttonClose = document.querySelector(".lightbox__button");

const imgOnBackDrop = document.querySelector(".lightbox__image");
// console.log(imgOnBackDrop);
const divBackDrop = document.querySelector(".lightbox__overlay");
// console.log(divBackDrop);

const marcupHTML = createMarcupGallery(galleryData);
listGaleryItemsEl.insertAdjacentHTML("beforeend", marcupHTML);

listGaleryItemsEl.addEventListener("click", onGalleryListClick);

buttonClose.addEventListener("click", onCloseModalW);

window.addEventListener("keydown", closeModalOnPressEsc);

divBackDrop.addEventListener("click", onCloseModalW);

// создал разметку
function createMarcupGallery(params) {
  return params
    .map(({ preview, original, description }, inx) => {
      return ` <li li class="gallery__item" >
    <a
        class="gallery__link"
        href="${original}"
    >
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            data-index="${inx}"
            alt="${description}"
        />
    </a>
</li>`;
    })
    .join("");
}
function onGalleryListClick(evt) {
  evt.preventDefault();
  //   console.log(evt.target.nodeName);
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const pictureElement = evt.target;
  const parentPictureElement = pictureElement.closest(".gallery__link");
  currentIndex = pictureElement.dataset.index;
  //   console.log(currentIndex);
  onClickOpenModal();
  createImgOnBackDrop(parentPictureElement.href, pictureElement.alt);
}
function onClickOpenModal(evt) {
  backDropModal.classList.add("is-open");
}
function onCloseModalW(evt) {
  backDropModal.classList.remove("is-open");
  imgOnBackDrop.src = "";
  imgOnBackDrop.alt = "";
  //   closeModalOfEsc();
}
function createImgOnBackDrop(src, alt) {
  imgOnBackDrop.src = src;
  imgOnBackDrop.alt = alt;
}
function closeModalOnPressEsc(evt) {
  //   console.log(evt.key);

  if (evt.key !== "Escape") {
    slider(evt);
    return;
  }

  onCloseModalW();
}

function slider(key) {
  //   if (!backDropModal.classList.add("is-open")) {
  //     return;
  //   }
  if (key.key === "ArrowRight") {
    console.log(`нажал вправо`);
    // currentIndex += 1;
    // imgOnBackDrop.src = src;
    // imgOnBackDrop.alt = alt;
  } else if (key.key === "ArrowLeft") {
    console.log(`нажал влево`);
    // currentIndex -= 1;
    // imgOnBackDrop.src = src;
    // imgOnBackDrop.alt = alt;
  }
}
