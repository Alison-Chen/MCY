const navSlide = () => {
    const burgerMenu = document.querySelector(".burgerMenu");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const burger = document.querySelector(".burger");

    burgerMenu.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    })

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ""
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 1}s`;
        }
    })
}

navSlide();