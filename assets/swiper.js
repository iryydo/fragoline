const swiper = new Swiper('.swiper', {

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
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
