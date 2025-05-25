// Confeccionar un programa que solicite el ingreso de un número y nos muestre dicho valor elevado a la tercera potencia. 

let num = parseInt(prompt("Ingresa un numero para elevarlo a la tercera potencia: "))
let potencia = Math.pow(num, 3)

document.writeln("La tercera potencia de: " + num + " es: " + potencia)