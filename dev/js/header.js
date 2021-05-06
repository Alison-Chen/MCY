<<<<<<< HEAD
const navSlide = () => {
    const burgerMenu = document.querySelector(".burgerMenu");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".burgerMenu span");

    burgerMenu.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
        if(burger.className.includes("toggle")){
            menu.textContent = "CLOSE";
        }else{
            menu.textContent = "MENU";
        }
    })

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ""
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 1}s`;
        }
    })
}

=======
const navSlide = () => {
    const burgerMenu = document.querySelector(".burgerMenu");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".burgerMenu span");

    burgerMenu.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
        if(burger.className.includes("toggle")){
            menu.textContent = "CLOSE";
        }else{
            menu.textContent = "MENU";
        }
    })

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ""
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 1}s`;
        }
    })
}

>>>>>>> 38ffdf6b1bed2488966008da4d1325c702a2b24b
navSlide();