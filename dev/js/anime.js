const svg = document.querySelector("svg");
const aboutUs = document.querySelector(".aboutUs");
const bound = aboutUs.getBoundingClientRect();


window.addEventListener("scroll", function(){
    if(window.scrollY > 1200){
        console.log(window.scrollY)
        svg.classList.add("animation")
    }else{
        svg.classList.remove("animation")
    }
})


//aos

AOS.init();


//loading
const loading = document.querySelector(".loading");
window.setTimeout(() => {
    loading.style.opacity = 0
    loading.style.zIndex = 0;
}, 2000);