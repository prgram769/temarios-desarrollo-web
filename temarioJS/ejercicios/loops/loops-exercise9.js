// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let num1 = 0
let num2 = 1

for (let index = 0; index < 10; index++) {
    console.log(num1)
    let resultado = num2 + num1
    num1 = num2
    num2 = resultado
}