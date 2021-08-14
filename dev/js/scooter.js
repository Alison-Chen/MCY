new Vue({
    el: "#app",
    data: {
        scooterCarousel: [{
            type: "158X",
            img: "./images/scooter/158X/158X_blue.png",
            color: "#022889"
        },{
            type: "158S",
            img: "./images/scooter/158S/158S_r.png",
            color: "maroon"
        },{
            type: "158A",
            img: "./images/scooter/158A/158A_w.png",
            color: "steelblue"
        },],
        newArrival: [{
            img: "./images/scooter/158X/158X_red.png",
            name: "DREAM 158X"
        },{
            img: "./images/scooter/158X/158X_black.png",
            name: "MOBILE 158S"
        }],
        products: [{
            img: "./images/scooter/166s/166s_p45l.png",
            name: "Dream 158X"
        },{
            img: "./images/scooter/158X/158X_black.png",
            name: "Dream 158X"
        },{
            img: "./images/scooter/158A/158A_w.png",
            name: "Dream 158X"
        },{
            img: "./images/scooter/166s/166s_b45l.png",
            name: "Dream 158X"
        },{
            img: "./images/scooter/158S/158S_g.png",
            name: "Dream 158X"
        },{
            img: "./images/scooter/188L/188L_bg45l.png",
            name: "Dream 158X"
        },{
            img: "./images/scooter/188L_tricycle/188L_3bk.png",
            name: "Dream 158X"
        },],
        categories: [{
            categoryName: "JY158A"
        },{
            categoryName: "JY158S"
        },{
            categoryName: "JY158X"
        }]
    },
    mounted(){
        let tl = new TimelineMax();


        tl.to(this.$refs.right, 3, {
            delay: 0,
            height: "100vh",
            ease: Expo.easeInOut
        }).to(this.$refs.productImg, 3, {
            delay: -1.8,
            opacity: 1,
            top: "40%",
            ease: Expo.easeInOut,
        }, '-=1').to(this.$refs.productText, 3, {
            delay: -1.8,
            opacity: 1,
            top: "8%",
            ease: Expo.easeInOut,
        }, '-=1.5').repeat(1).yoyo(true)

        new Swiper(this.$refs.swiperContainer, {
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
            on: {
                slideChange: function () {
                    tl.restart();
                },
            },
        });
    }
})