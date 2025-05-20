// Realizar un programa que pida la carga de dos vectores numéricos. Obtener la suma de los dos vectores, dicho resultado guardarlo en un tercer vector del mismo tamaño. Sumar componente a componente.
// El tamaño del vector es a elección. 

let v1 = new Array(3)
let v2 = new Array(3)
let v3 = new Array(3)
let total = 0
let total2 = 0

for (let i = 0; i < v1.length; i++) {
    let input = prompt("Dime un numero: ")
    v1[i] = parseInt(input)
}

for (let i = 0; i < v2.length; i++) {
    let input = prompt("Dime un numero: ")
    v2[i] = parseInt(input)
}

for (let i = 0; i < v3.length; i++) {
    v3[i] = v1[i] + v2[i]
}

document.writeln(v3)