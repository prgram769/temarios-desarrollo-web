// Modificar las propiedades de los elementos

// inner

const inner = document.getElementById("inner")

inner.innerHTML = "Hola a <b>todos!!!!</b>"

// outer

const outer = document.getElementById("outer")

outer.outerHTML = "<ul><li>A</li><li>B</li></ul>"

// innerText (texto interior)

const text = document.getElementById("text")

text.innerText = "<b>Adios a todos</b>"

// title (mostrar el mensaje que se muestra al pasar el raton por encima)

inner.title = "Mensaje al pasar por encima el raton"
inner.id = "NO"

// manipulacion de atributos

let i = document.getElementById("NO")

console.log(i.attributes);
console.log(i.hasAttributes());
console.log(i.getAttribute("id"));

i.draggable = true

i.hidden = true