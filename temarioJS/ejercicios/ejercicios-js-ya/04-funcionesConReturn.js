// Confeccionar una función a la cual le envíe tres enteros y retorne el mayor de ellos. 
// Elaborar una función a la cual le envíe el valor del lado de un cuadrado y me retorne su perímetro. 
// Desarrollar una función que retorne la cantidad de dígitos que tiene una variable entera positiva de hasta 5 dígitos. 
// Elaborar una función que reciba tres enteros y retorne el promedio. 
// Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su suma. 

/* importamos el modulo */

const readline = require("readline")

/* creamos la interfaz */

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/* lectura de los datos */

r1.question("Dime el primer numero: ", (n1) => {
    r1.question("Dime el segundo numero: ", (n2) => {
        r1.question("Dime el tercer numero: ", (n3) => {
            let myArrayNums = [parseInt(n1), parseInt(n2), parseInt(n3)]
            function mayor(numbers) {
                numbers.sort(function (a, b) {
                    return b - a
                })
                console.log(numbers[0])
            }
            mayor(myArrayNums)
            r1.question("Dime el valor del lado de un cuadrado: ", (valorLado) => {
                function perímetro(value) {
                    let resultadoPerimetro = 4 * value
                    console.log(`El perimetro del cuadrado dado el lado es: ${resultadoPerimetro}`)
                }
                perímetro(valorLado)
                r1.question("Dime una cadena de caracteres de hasta 5 digitos: ", (string) => {
                    function validarCadena(cadena) {
                        if (cadena.length > 5) {
                            console.log("La cadena solo puede tener 5 caracteres")
                            r1.question("Dime otra cadena, esta vez que sea correcta: ", (newString) => {
                                validarCadena(newString)
                            })
                        } else {
                            console.log(cadena.length)
                            r1.question("Dime un numero sin coma: ", (number1) => {
                                r1.question("dime otro numero: ", (number2) => {
                                    r1.question("Dime el ultimo numero: ", (number3) => {
                                        function hallarPromedio(numero1, numero2, numero3) {
                                            let promedio = parseInt(numero1) + parseInt(numero2) + parseInt(numero3) / 3
                                            console.log(promedio)
                                        }
                                        hallarPromedio(number1, number2, number3)
                                        r1.question("Dime un numero: ", (numeroNewFunction1) => {
                                            r1.question("Dime otro numero: ", (numeroNewFunction2) => {
                                                r1.question("Dime otro numero: ", (numeroNewFunction3) => {
                                                    r1.question("Dime otro numero: ", (numeroNewFunction4) => {
                                                        r1.question("Dime otro numero: ", (numeroNewFunction5) => {
                                                            function sumarDatos(n1, n2, n3, n4, n5) {
                                                                console.log(parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4) + parseInt(n5))
                                                            }
                                                            sumarDatos(numeroNewFunction1, numeroNewFunction2, numeroNewFunction3, numeroNewFunction4, numeroNewFunction5)
                                                            r1.close()
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                    validarCadena(string)
                })
            })
        })
    })
})