// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function primoONo(num) {
    if (num <= 1) {
        return false; // Los números menores o iguales a 1 no son primos
    } else if (num <= 3) {
        return true; // 2 y 3 son primos
    } else if (num % 2 === 0 || num % 3 === 0) {
        return false; // Si es divisible por 2 o 3, no es primo
    }

    let i = 5; // Inicializamos i dentro de la función
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false; // Si es divisible por i o i+2, no es primo
        }
        i += 6; // Incrementamos i en 6
    }
    return true; // Si no se encontraron divisores, es primo
}

// Pruebas
console.log(primoONo(29)); // true
console.log(primoONo(30)); // false
console.log(primoONo(97)); // true
console.log(primoONo(1));  // false
console.log(primoONo(2));  // true
