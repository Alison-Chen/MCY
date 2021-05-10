function changeBg() {
    const one = document.querySelector("#one");
    const two = document.querySelector("#two");
    const three = document.querySelector("#three");
    const four = document.querySelector("#four");

    const body = document.querySelector("body");

    if (document.documentElement.scrollTop >= one.offsetTop) {
        body.style.background = one.dataset.background;
    }
    if (document.documentElement.scrollTop >= two.offsetTop - 500) {
        body.style.background = two.dataset.background;
    }
    if (document.documentElement.scrollTop >= three.offsetTop - 500) {
        body.style.background = three.dataset.background;
    }
    if (document.documentElement.scrollTop >= four.offsetTop - 500) {
        body.style.background = four.dataset.background;
    }
}

window.addEventListener("scroll", changeBg);