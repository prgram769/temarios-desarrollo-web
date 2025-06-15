// Obtener los elementos que se van a utilizar

let normal = document.getElementById("normal")
let simular = document.getElementById("simular")
let container = document.getElementsByClassName("container")[0]

// capturar el evento de manera "normal"

normal.addEventListener("dblclick", e => {
    alert("He hecho click en el boton del texto handler propio")
})

// crear el listener

container.addEventListener("colorChange", e => {
    e.target.style.backgroundColor = "red"
})

// capturar el evento y simular el click en el otro boton

simular.addEventListener("click", function(e) {
    
    // crear el objeto evento

    let event = new MouseEvent("dblclick")

    // simular la ejecucion del evento en el otro boton

    normal.dispatchEvent(event)

    // lanzo el evento sintetico

    let myEvent = new Event("colorChange")
    container.dispatchEvent(myEvent)
})