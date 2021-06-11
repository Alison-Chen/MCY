TweenMax.from(".left",1.6, {
    delay: 0.6,
    height: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".right", 1.6, {
    delay: 0.8,
    height: 0,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".categories ul li", 1.6, {
    delay: 0.8,
    opacity: 0,
    height: 100,
    ease: Power3.easeInOut
},0.05)

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
