// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let myArray = [5,12,8,15,3,20,7,11,9,18]
let i = 0

while (i < myArray.length) {
    if (myArray[i] > 10) {
        console.log(myArray[i])
    }
    i++
}