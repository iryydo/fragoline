/* TOGGLE VISUALIZATION */

const toggleGalleryVisualButton = document.querySelector("#gallery-visualization");

const toggleCardVisualButton = document.querySelector("#icon-visualization");

const productsContainer = document.querySelector(".grid-container");



//aggiungi classe a grid
toggleGalleryVisualButton.addEventListener("click", toggleGalleryView);

function toggleGalleryView(event) {
    event.stopPropagation();
    productsContainer.classList.add("gallery-mode");
    toggleGalleryVisualButton.classList.add("selected");
    toggleCardVisualButton.classList.remove("selected");
}


//rimuovi classe a grid

toggleCardVisualButton.addEventListener("click", toggleCardView);

function toggleCardView(event) {
    event.stopPropagation();
    productsContainer.classList.remove("gallery-mode");
    toggleCardVisualButton.classList.add("selected");
    toggleGalleryVisualButton.classList.remove("selected");
}
