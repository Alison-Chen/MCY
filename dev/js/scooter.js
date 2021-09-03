new Vue({
    el: "#app",
    data: {
        scooters: [],
        newArrivals: {},
        slider: {},
        categories: [],
        filter: []
    },
    methods: {
        getProductId(index){
            sessionStorage.setItem("no", index);
        },
        getCategory(e){
            this.scooters = this.filter;
            this.scooters = this.filter.filter(scooter => {
                if(e.target.value !== 'all'){
                    return scooter.prod_type === e.target.value
                }else{
                    return this
                }
            })
        }
    },
    mounted(){
        //ajax
        axios
            .get('./php/scooter.php')
            .then(response => {
                response.data.map(data => data.url = `./scooterdetail.html?id=${data['prod_no']}`);
                this.scooters = response.data; //全部機車
                this.filter = response.data;
                
                let latest = [...response.data].sort((old, last) => {
                    return new Date(last['prod_ondate']) - new Date(old['prod_ondate'])
                }) //將上架機車從新到舊排列

                this.slider = [... latest].splice(0,3);
                this.newArrivals = [... latest].splice(0,2);

                response.data.forEach(data => this.categories.push(data.prod_type));
                this.categories = Array.from(new Set(this.categories));
            })
            .catch(function (error) { // 請求失敗處理
                console.log(error);
            });
    },
    updated(){
        //slider animation
        let tl = new TimelineMax();
        // $refs放在mounted階段會出現undefined $refs定位在v-if v-for等的dom節點，這些判斷下dom還沒被渲染
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
            speed: 1500,
            on: {
                slideChange: function () {
                    tl.restart();
                },
            },
        });
    }
})