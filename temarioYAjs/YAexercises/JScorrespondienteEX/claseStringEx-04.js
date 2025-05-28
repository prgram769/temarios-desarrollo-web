// Ingresar una palabra o texto por teclado y determinar si es o no una palabra palíndromo. (Palabra que se lee de igual manera de adelante hacia atrás, que de atrás hacia delante) 

let palabra = prompt("Ingresa una palabra:")

function revisarPalindromo(palabraARevisar) {
    const palabraInvertida = palabraARevisar.split("").reverse().join("")
    if (palabraARevisar === palabraInvertida) {
        document.writeln("La palabra es palindroma")
    } else {
        document.writeln("La palabra no es palindroma")
    }
}

revisarPalindromo(palabra)