//  Realizar la búsqueda de un string clave en un string fuente. Se deberá ingresar una frase o texto (fuente) y luego la clave a buscar. En caso de encontrarla, 
// imprimir la posición, de lo contrario una leyenda que indique que no está.

let cadena = prompt("ingrese una cadena de caracteres:")

if (cadena.includes("hola")) {
    let cadenaIndexada = cadena.indexOf("hola")
    document.writeln(cadenaIndexada)
} else {
    document.writeln("La palabra clave que esta buscando no esta en la cadena introducida")
}