// Modificando estilos de elementos

// propiedad style

let special = document.getElementById("special")

special.style.color = "red"

let image = document.querySelector("img")
image.style.display = "none"
let image2 = document.querySelector("img:nth-child(2)")
image2.style.display = "none"

let images = document.querySelectorAll("img")

images.forEach(imagen => {
    imagen.classList.add("border")
    imagen.classList.add("otraAltura")
});

let noBorder = document.querySelector("img:nth-child(4)")

noBorder.classList.remove("border")