// array

// declaracion

let myArray = []
let myArray2 = new Array()
console.log(myArray)
console.log(myArray2)

//inicializacion
myArray = [1,2,3,4]
myArray2 = new Array(1)

console.log(myArray)
console.log(myArray2)

myArray = [1,2,3,4]
myArray2 = new Array(1,2,3,4)

console.log(myArray)
console.log(myArray2)

myArray = ["ruben","gonzalez","rugby", 37, true]
myArray2 = new Array("ruben","gonzalez","rugby")

console.log(myArray)
console.log(myArray2)

//metodos comunes

myArray = []

// push y pop

myArray.push("ruben")
myArray.push("gonzalez")
myArray.push("rugby")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop())

//shift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("caarlos","paco fiestas")

console.log(myArray)

//length

console.log(myArray.length)

//clear

myArray = []
console.log(myArray)
myArray.length = 0 //alternativa a limpiar el array pero siempre es mejor la primera
console.log(myArray)

//slice

myArray.push("ruben","gonzalez","rugby", 37, true)

let myNewArray = myArray.slice(1,2)

console.log(myArray)
console.log(myNewArray)

//splice

myArray.splice(1,3)
console.log(myArray)


