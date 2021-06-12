let swiper = new Swiper('.swiper-container', {
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 80,
    // loop: true,
    breakpoints: {
        1920: {
            slidesPerView: 1.5,
            spaceBetween: 60
        },
        1028: {
            slidesPerView: 1.5,
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
        delay: 2500,
        disableOnInteraction: false,
    },
});
