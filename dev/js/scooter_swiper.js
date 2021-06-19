function animate() {
    TweenMax.from(".left", 1.6, {
        delay: 0.6,
        height: 0,
        ease: Expo.easeInOut
    })

    TweenMax.from(".right", 1.6, {
        delay: 0.8,
        height: 0,
        ease: Expo.easeInOut
    })

    TweenMax.from(".slogan", 1.6, {
        delay: 1,
        opacity: 0,
        y: -20,
        ease: Expo.easeInOut
    })


    TweenMax.from(".product-img", 3, {
        delay: 1.5,
        opacity: 0,
        ease: Expo.easeInOut,
    })

    TweenMax.from(".product-text", 3, {
        delay: 1.8,
        opacity: 0,
        top: 15,
        ease: Expo.easeInOut
    })

}

let swiper = new Swiper('.swiper-container', {
    // grabCursor: true,
    // effect: "fade",
    slidesPerView: 'auto',
    centeredSlides: true,
    noSwiping: true,
    allowTouchMove: false,
    noSwipingClass: "no-swiping",
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
    speed: 800,
    on:{
        init: function(){
            animate()
        },
        slideChange: function(){
            animate()
        }
    },
});
