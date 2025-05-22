// Seleccion de elementos en el DOM

// getElementById

let especial = document.getElementById("especial")

console.log(especial);

especial.style.color = "red"

let element = document.getElementById("another")

if (!element) {
    alert("No hay ningun elemento con el Id another")
}

let list_elements = document.querySelectorAll("li")

console.log(list_elements);

for (let i = 0; i < list_elements.length; i++) {
    list_elements[i].style.fontSize="2rem"    
}

for (const element of list_elements) {
    element.style.fontSize="2.5rem"
}

for (const item of list_elements.values()) {
    item.style.fontSize="3rem"
}

list_elements.forEach(element => {
    element.style.fontSize="0.5rem"
});

let cuerpo = document.body

cuerpo.style.backgroundColor = "blue"