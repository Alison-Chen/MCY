const src = document.querySelector(".detailImg img").src;

let vm = new Vue({
    el: "#app",
    data: {
        type: "JY-158X",
        info: `<p>馬達:48V-800W-DC無刷馬達<br>
                電池: 52V / 13Ah鋰電池<br>
                爬坡度: 約18 %<br>
                續航力:約35~45KM<br>
                剎車:前後鼓煞<br>
                時速:25公里/小時<br>
                輪胎尺寸:14*3.2(3.0-10)<br>
                車重:60公斤(含電池)</p>`,
        src: "./images/scooter/158X/158_blue.png==./images/scooter/158X/158_blue_1.png==./images/scooter/158X/158X_black.png==./images/scooter/158X/158X_black_1.png"
    },
    methods:{
        // changeImg(e) {
        //     const detailImg = document.querySelector(".detailImg");
        //     const scooterImg = document.querySelector(".detailImg img");
        //     const detailImgHalf = detailImg.clientWidth / 2;
        //     if(e.offsetX > detailImgHalf){
        //         scooterImg.src = src;
        //     }else{
        //         scooterImg.src = "./images/scooter/158X/158_blue_1.png"
        //     }
        // }
    },
})