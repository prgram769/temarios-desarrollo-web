function showContent(e) {
    console.log(e);
    alert("El elemento se originó en  "+ e.target.id+" y ahora estoy en " + this.id)
}

let bubblingDivs = document.querySelectorAll("#bubbling div")
let capturingDivs = document.querySelectorAll("#capturing div")

bubblingDivs.forEach(function(item) {
    item.addEventListener("click", showContent)
})

capturingDivs.forEach(function(item) {
    item.addEventListener("click", showContent, true)
})

function changeColor(e) {
    console.log("He hecho click en el evento con el manejado INLINE");
    e.target.style.backgroundColor = "red"
}

let example = document.getElementById("example")

function doSomething(e) {
    console.log("He hecho click en el DIV con el ID example");
    e.target.style.color = "green"
}

example.onclick = doSomething

let listener = document.getElementById("listener")

listener.addEventListener("click", e => {
    console.log("He hecho click en el DIV con el ID listener");
    e.target.style.color = "white"
    e.target.style.backgroundColor = "blue"
})

function showMousePosition(e) {
    let x = document.getElementById("X")
    let y = document.getElementById("Y")

    x.textContent = e.pageX
    y.textContent = e.pageY
}

document.querySelector("html").addEventListener("mousemove", showMousePosition)

document.getElementById("stop").onclick = function(e) {
    document.querySelector("html").removeEventListener("mousemove", showMousePosition)
}