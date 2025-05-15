// funciones

// simple

function myFunction() {
    console.log("hola funcion")
}

for (let index = 0; index < 5; index++) {
    myFunction()
    
}
myFunction()

// con parametros

function myFunctionWithParams(name) {
    console.log(`hola ${name}`)
}

myFunctionWithParams("rugby")

// funciones anonimas

const myFunc2 = function(name) {
    console.log(`hola ${name}`)
}

myFunc2("rigby")

// arrow functions

const myFunc3 = (name) => {
    console.log(`hola ${name}`)
}

myFunc3("ragby")

const myFunc4 = (name) => console.log(`hola ${name}`)

myFunc4("ragby")

function sum(a,b){
    console.log(a + b)
}

sum(5,10)
sum(2)
sum()

function defaultSum(a = 0,b = 0) {
    console.log(a + b)
}

// por defecto

defaultSum()
defaultSum(5)
defaultSum(5,10)

// retorno de valores

function mult(a,b){
    return a * b 
}

mult(5,10)

console.log(mult(5,10))

// anidadas 

function extern() {
    console.log("funcion externa")
    function intern() {
        console.log("funcion interna")
    }
}

extern()
// intern() Error:fuera del scope

function extern() {
    console.log("funcion externa")
    function intern() {
        console.log("funcion interna")
    }
    intern()
}

extern()

// funciones de orden superior

function applayFunc(func, param) {
    func(param)
}

applayFunc(myFunc4, "Funcion de orden superior")

// foreach

myArray = [1,2,3,4]

myArray.forEach(function (value){
    console.log(value)
})

myArray.forEach((value) => console.log(value))