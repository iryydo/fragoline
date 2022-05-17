/* ACCORDION */

const accordionTitles = document.querySelectorAll(".acc-title");

accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener("click", () => {
        const height = accordionTitle.nextElementSibling.scrollHeight;
        console.log(height);
        accordionTitle.classList.toggle("active-header");
        if (accordionTitle.classList.contains("active-header")) {
            accordionTitle.nextElementSibling.style.maxHeight = `${height}px`;
        } else {
            accordionTitle.nextElementSibling.style.maxHeight = "0px";
        }
    })
})

/* CLOSE BANNER */
const blackBannerButton = document.querySelector("#close-banner");

blackBannerButton.addEventListener("click", closeBanner);

function closeBanner(event) {
    this.parentNode.style.display = "none";
}

/* CAROSELLO */

const swiper = new Swiper('.swiper', {
    // Optional parameters
    enabled: true,
    speed: 400,
    initialSlide: 0,
    spaceBetween: 0,
    effect: 'slide',
    direction: 'horizontal',
    slidesPerView: 1,
    centeredSlides: true,
    centeredSlidesBounds: true,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {

        1024: {
            noSwiping: true,
        }
    },
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

/************************ TOGGLE VISUALIZATION *************************/

const toggleGalleryVisualButton = document.querySelector("#gallery-visualization");

const toggleCardVisualButton = document.querySelector("#icon-visualization");

const productsContainer = document.querySelector(".grid-container");


//aggiungi classe a grid
toggleGalleryVisualButton.addEventListener("click", toggleGalleryView);

function toggleGalleryView(event) {
    productsContainer.classList.add("gallery-mode");
    toggleGalleryVisualButton.classList.add("selected");
    toggleCardVisualButton.classList.remove("selected");
}

//rimuovi classe a grid

toggleCardVisualButton.addEventListener("click", toggleCardView);

function toggleCardView(event) {
    productsContainer.classList.remove("gallery-mode");
    toggleCardVisualButton.classList.add("selected");
    toggleGalleryVisualButton.classList.remove("selected");
}
