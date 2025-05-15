// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let myArray = [1,2,3,4,5,6,7,8,9]
let multiplicacion = 1

for(let valor of myArray){
  multiplicacion *= valor
  console.log(multiplicacion) 
}
