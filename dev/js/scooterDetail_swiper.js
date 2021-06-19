let swiper = new Swiper('.swiper-container', {
    grabCursor: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    slidesPerView: 'auto',
    centeredSlides: true,
    // loop: true,
    breakpoints: {
        1920: {
            slidesPerView: 1,
            spaceBetween: 60
        },
        1028: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    },
    pagination: {
        el: 'swiper-pagination'
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 800,
});
