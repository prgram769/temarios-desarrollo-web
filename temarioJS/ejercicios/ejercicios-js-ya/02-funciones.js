// Confeccionar una función que solicite la carga de dos enteros (primero el menor y luego el mayor) y nos muestre desde el menor hasta el mayor de uno en uno.
// Por ejemplo si ingresamos los valores 4 y 10 luego se debe mostrar por pantalla:
// 4 5 6 7 8 9 10

/* incluimos el modulo readline */
const readline = require("readline")

/* creamos la interfaz y leemos los datos */

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function cargaDatos(){
    r1.question("Dime un numero: ", (n1) => { 
        r1.question("Dime otro numero, pero mayor: ", (n2) => {
            if (parseInt(n1) >= n2) {
                console.log("Vuelve a ejecutar el programa y elige otro primer numero")
            } else {
                let resultado = ""
                for (let i = parseInt(n1); i <= n2 ; i++) {
                    resultado += i + " - "
                }
                console.log(resultado.trim()) // (trim()) Elimina los espacios en blanco iniciales y finales y los caracteres de terminación de línea de una cadena.
            }
            r1.close()
        })
    })
}

cargaDatos()

// otra forma (con while)

/*
function cargaDatos(){
    r1.question("Dime un numero: ", (n1) => {
        r1.question("Dime otro numero, pero mayor: ", (n2) => {
            let acumulador = n1
            while (n1 < n2) {
                acumulador++
                console.log(acumulador)
                if (acumulador >= n2) {
                    break
                }
        }
        r1.close()
    })
})
}*/