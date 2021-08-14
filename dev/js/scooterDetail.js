new Vue({
    el: "#app",
    data: {
        is3D: false,
        ThreeDImg: {
            1: "./images/scooter/158X/158X_grey_1.png",
            2: "./images/scooter/158X/158X_grey.png",
            3: "./images/scooter/158X/158X_grey_2.png",
            4: "./images/scooter/158X/158X_grey_3.png"
        },
        colors: [{
            color: "blue",
            imgOne: "./images/scooter/158X/158_blue_1.png",
            imgTwo: "./images/scooter/158X/158_blue.png"
        },{
            color: "white",
            imgOne: "./images/scooter/158X/158X_white_1.png",
            imgTwo: "./images/scooter/158X/158X_white.png"
        }, {
            color: "black",
            imgOne: "./images/scooter/158X/158X_black_1.png",
            imgTwo: "./images/scooter/158X/158X_black.png"
        }, {
            color: "maroon",
            imgOne: "./images/scooter/158X/158X_red_1.png",
            imgTwo: "./images/scooter/158X/158X_red.png"
        }, {
            color: "grey",
            imgOne: "./images/scooter/158X/158X_grey_1.png",
            imgTwo: "./images/scooter/158X/158X_grey.png"
        }],
        swiperImgArr: [{
            imgOne: "./images/scooter/158X/158_blue_1.png",
            imgTwo: "./images/scooter/158X/158_blue.png"
        }],
        info: "剎車:前後鼓煞 <br>輪胎尺寸: 14 * 3.2(3.0 - 10)<br>車重: 60公斤(含電池)<br>",
        km: "35~45公里<br>續航里程(預估值)",
        speed: "25公里/小時<br>時速",
        battery: "52V/13Ah<br>可攜式鋰電池",
        watt: "800W<br>馬達"
    },
    methods: {
        rotateImg(e){
            const x = e.offsetX;
            const halfWidth = this.$refs.rotateImg.offsetWidth / 3;
            if (x < halfWidth / 2) {
                this.$refs.rotateImg.firstChild.src = this.ThreeDImg["1"]
            } else if (x > halfWidth / 2 && x < halfWidth) {
                this.$refs.rotateImg.firstChild.src = this.ThreeDImg["2"]
            } else if (x > halfWidth - 50 && x < halfWidth + 50) {
                this.$refs.rotateImg.firstChild.src = this.ThreeDImg["3"]
            } else {
                this.$refs.rotateImg.firstChild.src = this.ThreeDImg["4"]
            }
        },
        touchRotate(e){
            const x = e.targetTouches[0].pageX;
            console.log(x);
            const halfWidth = this.$refs.rotateImg.offsetWidth / 2;
            if (x < halfWidth / 2) {
                this.$refs.rotateImg.firstChild.src = this.ThreeDImg["1"]
            } else if (x > halfWidth / 2 && x < halfWidth) {
                this.$refs.rotateImg.firstChild.src = this.ThreeDImg["2"]
            } else if (x > halfWidth - 50 && x < halfWidth + 50) {
                this.$refs.rotateImg.firstChild.src = this.ThreeDImg["3"]
            } else {
                this.$refs.rotateImg.firstChild.src = this.ThreeDImg["4"]
            }
        },
        changeSwiperImg(e){
            // this.swiperImgArr = [];
            this.swiperImgArr = this.colors.filter(color => color.color == e.target.dataset.color)
        }
    },
    mounted(){
        let swiper = new Swiper('.swiper-container', {
            grabCursor: true,
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
                delay: 4000,
                disableOnInteraction: false,
            },
        });
    }
})