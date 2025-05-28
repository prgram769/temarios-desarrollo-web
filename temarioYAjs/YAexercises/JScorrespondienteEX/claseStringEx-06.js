// Cargar un String por teclado e implementar las siguientes funciones:
// a) Imprimir la primera mitad de los caracteres de la cadena.
// b) Imprimir el último carácter.
// c) Imprimirlo en forma inversa.
// d) Imprimir cada carácter del String separado con un guión.
// e) Imprimir la cantidad de vocales almacenadas.

let cadena = prompt("Ingrese una cadena de caracteres:")

// a)

function primeraMitad(str) {
    let longitud = str.length

    longitud = longitud / 2

    console.log("la longitud de la primera mitad de la cadena es: " + longitud);

    let subcad = str.substr(0, longitud)

    document.writeln("La primera mitad de la cadena de caracteres introducida es: " + subcad + "<br>");
}

primeraMitad(cadena)

// b)

function ultimoChar(str) {
    let caracter = str.split("").reverse()
    caracter = caracter[0]

    document.writeln("El ultimo caracter de la cadena de caracteres introducida es: " + caracter + "<br>");
}

ultimoChar(cadena)

// c)

function invertir(srt) {
    let cadInvertida = srt.split("").reverse().join("")

    document.writeln("La cadena de caracteres introducida, a la inversa es: " + cadInvertida + "<br>")
}

invertir(cadena)

// d)

function unirConGuion(str) {
    let cadenaUnidaConGuion = str.split("").join("-")

    document.writeln("La cadena de caracteres introducida, unida con guiones es: " + cadenaUnidaConGuion + "<br>")
}

unirConGuion(cadena)

// e)

function contarVocales(str) {
    let cantidadVocales = 0
    let vocales = ["a","e","i","o","u"]
    let texto = str.toLowerCase()

    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        if (vocales.includes(letra)) {
            cantidadVocales++;
        }
    }
    document.writeln("La cantidad de vocales que hay en la cadena de caracteres introducida es: " + cantidadVocales)
}

contarVocales(cadena)