let tl = new TimelineMax();

    tl.to(".right", 3, {
        delay: 0,
        height: "100vh",
        ease: Expo.easeInOut
    }).to(".product-img", 3, {
        delay: -1.8,
        transform: "translate(-50%,-50%)",
        opacity: 1,
        ease: Expo.easeInOut,
    },'-=1').to(".product-text", 3, {
        delay: -1.8,
        opacity: 1,
        top: "15%",
        ease: Expo.easeInOut,
    },'-=1.5')

    tl.repeat(1).yoyo(true)

let swiper = new Swiper('.swiper-container', {
    grabCursor: false,
    slidesPerView: 'auto',
    centeredSlides: true,
    noSwiping: true,
    allowTouchMove: false,
    noSwipingClass: "no-swiping",
        effect: "fade",
    fadeEffect: {
        crossFade: true
    },
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
        delay: 6000,
        disableOnInteraction: false,
    },
    // speed: 1500,
    on:{
        slideChange: function(){
            tl.restart();
        },
    },
});
