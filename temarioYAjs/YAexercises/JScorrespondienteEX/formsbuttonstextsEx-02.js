// Cargar dos números en objetos de tipo text y al presionar un botón, mostrar el mayor. 

function mayor() {
    let num1 = Number(document.getElementById("n1").value)
    let num2 = Number(document.getElementById("n2").value)

    if (num1 > num2) {
        alert("El mayor es: " + num1)
    } else {
        alert("El mayor es: " + num2)
    }
}