// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

/* importamos el modulo */

const readline = require("readline")

/* creamos la interfaz */

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/* lectura y procesamiento de los datos */

let numeros = []
let numeros2 = []

function numerosComunes(array1,array2) {
    return array1.filter(item => array2.includes(item))
}

function pedirNumero(array, mensaje, callback) {
    r1.question(mensaje, (numero) => {
        const num = parseInt(numero);
        if (!isNaN(num)) {
            array.push(num);
            r1.question("¿Quieres otro número? (si/no): ", (respuesta) => {
                if (respuesta.toLowerCase() === "si") {
                    pedirNumero(array, "Dime un número: ", callback);
                } else {
                    array.sort((a, b) => a - b);
                    callback();
                }
            });
        } else {
            console.log("¡Debes ingresar un número!");
            pedirNumero(array, mensaje, callback);
        }
    });
}

pedirNumero(numeros, "Dime un número para el primer array: ", () => {
    pedirNumero(numeros2, "Dime un número para el segundo array: ", () => {
        const comunes = numerosComunes(numeros, numeros2);
        console.log("Elementos comunes:", comunes);
        r1.close();
    });
});