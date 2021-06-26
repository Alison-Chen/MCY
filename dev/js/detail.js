const detailImg = document.querySelector(".detailImg img");
let src = detailImg.src
const rotateImg = (e) => {
    const path = "./images/scooter/"
    const x = e.offsetX;
    const halfWidth = detailImg.clientWidth / 2;
    if(x < halfWidth / 2){
        detailImg.src = path + "/158X/158Xg_l.png";
    }else if(x > halfWidth / 2 && x < halfWidth){
        detailImg.src = path + "/158X/158-g.png"; 
    }else if(x > halfWidth - 100 && x < halfWidth + 100){
        detailImg.src = path + "/158X/158X銀背.png";
    }else{
        detailImg.src = path + "158X/158Xg_2.png";
    }
}

detailImg.addEventListener("mousemove", rotateImg);
detailImg.addEventListener("touchmove", rotateImg);

detailImg.addEventListener("mouseout", function () {
    detailImg.src = src
})
