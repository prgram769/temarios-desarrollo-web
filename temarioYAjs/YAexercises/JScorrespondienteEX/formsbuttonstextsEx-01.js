//  Crear un programa que permita cargar un entero en un text y al presionar un botón nos muestre dicho valor elevado al cubo (emplear la función alert). 

function elevacion() {
    let numero = document.getElementById("num").value

    alert("El numero introducido es: " + numero + " y su valor elevado al cubo es: " + Math.pow(numero, 3))
}