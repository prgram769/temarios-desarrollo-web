//  Ingresar una serie de nombres por teclado hasta que se cargue la palabra Fin, y mostrar cuántos nombres se ingresaron. 

let nombres
let nombresArray = []
let contador = 0

while (nombres != "Fin") {
    nombres = prompt("Ingresa un nombre:")
    nombresArray.push(nombres)
    contador++
}

nombresArray.pop()

document.writeln("Se ingresaron estos nombres: " + nombresArray + " hacen un total de: " + (contador - 1))