// Desarrollar un programa que permita ingresar un vector de 8 elementos, e informe:
// El valor acumulado de todos los elementos del vector.
// El valor acumulado de los elementos del vector que sean mayores a 36.
// Cantidad de valores mayores a 50.

let vector = new Array(8)
let total = 0

for (let i = 0; i < vector.length; i++) {
    let input = prompt("Ingrese un numero: ")
    numero = parseInt(input)
    vector[i] = numero
    total += numero
}

let sumaE = 0

for (const element of vector) {
    if (element >= 36) {
        sumaE += element
    }
}

let contador = 0

for (const element of vector) {
    if (element >= 50) {
        contador++
    }
}

document.writeln("Suma total de los numeros introducidos es: " + total + "<br>")
document.writeln("La suma de los elementos mayores a 36 son: " + sumaE + "<br>")
document.writeln("La cantidad de elementos mayores a 50 es: " + contador)