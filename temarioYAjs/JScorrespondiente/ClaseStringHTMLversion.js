// Clase String

// charAt(pos)

let nombre = "juan"
let primerChar = nombre.charAt(0)

document.writeln("El primer caracter de: " + nombre + " es: " + primerChar)
document.writeln("<br>")

// substring(posinicial,posfinal)

let cadena1 = "hola que tal como andas"
let cadena2 = cadena1.substring(3,10)

document.writeln("La nueva cadena extraida con substring es: " + cadena2)
document.writeln("<br>")

// indexOf(subCadena)

let nombre2 = "navarro valentin"
let pos = nombre2.indexOf("valentin")

if (pos != -1) {
    document.writeln("Esta el nombre valentin en la variable nombre")
}
document.writeln("<br>")

// toUpperCase()

let cadena3 = "hola que tal como te encuentras?"
let cadMayus = cadena3.toUpperCase()

document.writeln("toUpperCase() transforma las cadenas en mayusculas, ejemplo: " + cadMayus)
document.writeln("<br>")

// toLowerCase()

let cadMin = cadMayus.toLowerCase()

document.writeln("toLowerCase() transforma las cadenas en minuscula, ejemplo: " + cadMin)
document.writeln("<br>")

// length 

let cad3Long = cadena3.length

document.writeln("Con length se puede saber la cantidad de caracteres que tiene una cadena de caracteres, ejemplo: " + cadena3 + " tiene: " + cad3Long + " caracteres")