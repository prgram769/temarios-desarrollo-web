// Igual al anterior, pero que termine la aplicación sin contemplar mayúsculas ni minúsculas. Es decir que para salir se pueda teclear fin, Fin o FIN. 

let nombresArray = []
let nombres = ""
let contador = 0

while (nombres != "fin") {
    nombres = prompt("Ingresa un nombre: ")
    if (nombres.toLowerCase() == "fin") {
        break
    }
    nombresArray.push(nombres)
    contador++
}

document.writeln("Estos son los nombres recogidos: " + nombresArray + " hacen un total de " + (contador))