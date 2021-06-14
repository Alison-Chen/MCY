const navSlide = () => {
    const burgerMenu = document.querySelector(".burgerMenu");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".burgerMenu p");
    const n = document.querySelector("nav");

    burgerMenu.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
        if(burger.className.includes("toggle")){
            menu.textContent = "CLOSE";
            // n.style.backgroundColor = "#fff";
        }else{
            menu.textContent = "MENU";
            // n.style.backgroundColor = "inherit";
        }
    })

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ""
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 1}s`;
        }
    })

    document.addEventListener("click",function(e){
        if(!nav.contains(e.target) && !burgerMenu.contains(e.target)){
            nav.classList.remove("nav-active")
            menu.textContent = "MENU"
            burger.classList.remove("toggle")
        }
    })
}

navSlide();


