// Elaborar una función a la cual le enviemos tres enteros y muestre el menor. 
// Confeccionar una función a la cual le envíe tres enteros y los muestre ordenados de menor a mayor. 

/* importamos el modulo */

const readline = require("readline")

/* creamos la interfaz */

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/* lectura de datos */
r1.question("Dime el primer numero: ", (n1) => {
    r1.question("Dime el segundo numero: ", (n2) => {
        r1.question("Dime el tercer numero: ", (n3) => {
            let myArray = [parseInt(n1), parseInt(n2), parseInt(n3)]
            function menor(numeros){
                numeros.sort(function (a,b){
                    return a - b
                })
                console.log(numeros[0])
            }
            function ordenMayorMenor(numeros){
                numeros.sort(function (a,b){
                    return b - a
                })
            }
            function ordenMenorMayor(numeros){
                ordenMayorMenor(numeros)
                let mayor = numeros[0]
                let resultado = ""

                for (let i = numeros[numeros.length - 1]; i <= mayor; i++) { /* ordenar desde el menor(ultimo) hasta el mayor */
                    resultado += i + " - " 
                }
                console.log(resultado.slice(0, -3)) /* eliminar el ultimo "-" */
            }
            menor(myArray)
            ordenMenorMayor(myArray)
            r1.close()
        })
    })
})