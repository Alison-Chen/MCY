new Vue({
    el: "#app",
    data: {
        scooterInfo: [],
        scooterColor:[],
        ThreeDImg: [],
        swiperImgArr: [],
        recommends:[]
    },
    methods: {
        rotateImg(e){
            const x = e.offsetX;
            const halfWidth = this.$refs.rotateImg.offsetWidth / 3;
            if (x < halfWidth / 2) {
                this.$refs.rotateImg.src = this.ThreeDImg[0][0].image
            } else if (x > halfWidth / 2 && x < halfWidth) {
                this.$refs.rotateImg.src = this.ThreeDImg[0][1].image
            } else if (x > halfWidth - 50 && x < halfWidth + 50) {
                this.$refs.rotateImg.src = this.ThreeDImg[0][2].image
            } else {
                this.$refs.rotateImg.src = this.ThreeDImg[0][3].image
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
            this.swiperImgArr = this.scooterColor[0].filter(color => color.color_code == e.target.dataset.color)
        },
        getProductId(index) {
            sessionStorage.setItem("no", index);
        },
        getColorName(name){
            this.$refs.color.innerText = name;
        }
    },
    mounted(){
        const vThis = this;
        //getSessionStorage
        const sessionId = sessionStorage.getItem("no");

        //axios
        const threeDRequest = axios.get(`./php/get3dImage.php?id=${sessionId}`);
        const productRequest = axios.get(`./php/getScooterId.php?id=${sessionId}`);
        const colorRequest = axios.get(`./php/getProductColor.php?id=${sessionId}`);
        const recommendRequest = axios.get(`./php/getRandomRecommend.php?id=${sessionId}`);
        axios.all([threeDRequest, productRequest,colorRequest,recommendRequest])
            .then(axios.spread(function(threeD,info,color,recommend){

                vThis.$set(vThis.ThreeDImg,0 ,threeD.data);
                vThis.$set(vThis.scooterInfo, 0, info.data);
                vThis.$set(vThis.scooterColor,0 ,color.data);
                vThis.$set(vThis.swiperImgArr, 0, color.data[0]);
                vThis.$set(vThis.recommends,0 ,recommend.data)
                console.log(vThis.recommends[0]);
        }))
    },
    updated(){
        new Swiper('.swiper-container', {
            // grabCursor: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",
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

//meta title && description
const sessionId = sessionStorage.getItem("no");
fetch(`./php/getType.php?id=${sessionId}`).then(res => res.json())
                            .then(data => {
                                document.title = `${data[0].prod_type}-美家園電動機車MCYMotor`;
                                let meta = document.createElement("meta");
                                meta.name = "description";
                                meta.content = data[0].prod_info;
                                document.getElementsByTagName("head")[0].appendChild(meta);
                            });