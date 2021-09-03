const cards = document.querySelectorAll(".card");
cards.forEach(card => card.addEventListener("click", () => sessionStorage.setItem("no", card.dataset.id)))