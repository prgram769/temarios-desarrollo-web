// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

let myArray = [1,5,8,3,7,9,4,2,5]
let max = [0]

function mayor(array) {
    for(let i = 1; i <= myArray.length; i++){
        if(myArray[i] > max){
            max = myArray[i]
        }        
    }
    return max
}

console.log(mayor(myArray))