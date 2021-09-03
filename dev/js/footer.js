const scooterTypes = document.querySelectorAll(".typeCategory a");
scooterTypes.forEach(type => {
    type.addEventListener("click", () => sessionStorage.setItem("no", type.dataset.id))
})