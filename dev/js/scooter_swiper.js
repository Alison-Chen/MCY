let tl = new TimelineMax();

    tl.to(".right", 1.6, {
        delay: 0,
        height: "100vh",
        ease: Expo.easeInOut
    })

    // tl.from(".slogan", 1.6, {
    //     delay: -1,
    //     opacity: 0,
    //     y: -20,
    //     ease: Expo.easeInOut
    // })

    tl.to(".product-text", 3, {
        delay: -1.8,
        opacity: 1,
        top: "15%",
        ease: Expo.easeInOut,
    })

    tl.to(".product-img", 3, {
        delay: -1.5,
        opacity: 1,
        ease: Expo.easeInOut,
    })

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
        delay: 9000,
        disableOnInteraction: false,
    },
    // speed: 1500,
    on:{
        slideChange: function(){
            tl.restart();
        },
    },
});
