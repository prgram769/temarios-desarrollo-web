// OPERADORES

// operadores aritmeticos

let a = 5
let b = 10

console.log(5 + 10) // suma
console.log(a + b) // suma
console.log(5 - 10) // resta
console.log(5 * 10) // multiplicacion 
console.log(5 / 10) // division

console.log(5 % 10) // modulo (resto de la division)
console.log(5 ** 10) // exponente

a++ //incremento
console.log(a) 

b-- // decremento
console.log(b)

// operadores de asignacion

let myVariable = 2
console.log(myVariable)
myVariable += 2 // == myVariable + 2
console.log(myVariable)

myVariable -= 2 // == myVariable - 2
myVariable *= 2 // == myVariable * 2
myVariable /= 2 // == myVariable / 2
myVariable %= 2 // == myVariable % 2
myVariable **= 2 // == myVariable ** 2

// operadores de comparacion

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == 5) // igualdad por valor
console.log(a == a)
console.log(a == "5")
console.log(a === 5) //igualdad por identidad (por tipo y valor)
console.log(a === a)
console.log(a === "5")
console.log(a != 5)
console.log(a !== "5")
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)

// truthy values (valores verdaderos)
//
// todos los numeros positivos y negativos menos el 0
// todas las cadenas de texto menos las vacias
// el boolean true
//
// falsy values (valores falsos)
//
// 0
// 0n
// null
// undefined
// NaN
// el boolean false
// cadenas de texto vacias

// operadores logicos

// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20 && 30 > 40)

// or (||)

console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 && 15 > 20 || 30 < 40)

// not (!)

console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// operadores ternarios

const isRaining = false

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")
