// const rotateBlock = document.querySelector(".secondpic");
const rotateImg = document.querySelector(".secondpic img");
let src = rotateImg.src
const rotate = (e) => {
    e.stopPropagation()
    const path = "./images/scooter/"
    const x = e.offsetX;
    const halfWidth = rotateImg.clientWidth / 2;
    if(x < halfWidth / 2){
        rotateImg.src = path + "/158X/158Xg_l.png";
    }else if(x > halfWidth / 2 && x < halfWidth){
        rotateImg.src = path + "/158X/158-g.png"; 
    }else if(x > halfWidth - 50 && x < halfWidth + 50){
        rotateImg.src = path + "/158X/158X銀背.png";
    }else{
        rotateImg.src = path + "158X/158Xg_2.png";
    }
}

rotateImg.addEventListener("mousemove", rotate);
rotateImg.addEventListener("touchmove", rotate);

rotateImg.addEventListener("mouseout", function () {
    rotateImg.src = src
})


//swiper
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
        delay: 2500,
        disableOnInteraction: false,
    },
});


//scooter changeColor
const radioBtns = document.querySelectorAll(".radio");
radioBtns.forEach(btn => btn.addEventListener("click", function(){
    const imgArr = btn.dataset.scooter.split("==")
    const swiperSlides = document.querySelectorAll(".swiper-img");
    for(let i = 0; i < imgArr.length ; i++){
        swiperSlides[i].src = imgArr[i]
    }
}))