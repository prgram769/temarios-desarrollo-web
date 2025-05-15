// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let myArray = [1,2,3,4,5]
let [myValue1,myValue2,myValue3,myValue4,myValue5,myValue6 = 0] = myArray

console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)
console.log(myValue5)
console.log(myValue6)
