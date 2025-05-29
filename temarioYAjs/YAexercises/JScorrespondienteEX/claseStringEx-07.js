// Codifique un programa que permita cargar una oración por teclado, luego mostrar cada palabra ingresada en una línea distinta. 
/*
Por ejemplo si cargo:
	La mañana está fría.
Debe aparecer:
La
mañana
está
fría.
*/

// primero separo la oracion introducida

let oracion = prompt("Ingrese una oracion para separar las palabras por lineas distintas:")
let oracionSeparada = oracion.split(" ")

// unir la oracion separada para que deje de ser un array y se convierta en un string, tambien para separarlos en distintas lineas

let oracionTerminada = oracionSeparada.join("<br>")

console.log(oracionTerminada);

// pasar a la pantalla del navegador el resultado inicial y el resultado final

document.writeln("El resultado inicial de la oracion introducida es: " + oracion + " y el resultado final tras la division es: " + "<br>" + oracionTerminada)