// 5. Agrega una función e invócala

let myObject = {
    altura: 10.2,
    anchura: 5.3,
    profundidad: 7
}

console.log(myObject)

console.log(myObject.altura)
console.log(myObject.anchura)
console.log(myObject.profundidad)

myObject.cantidad = 3

console.log(myObject)
console.log(myObject.cantidad)

delete myObject.anchura

console.log(myObject)

myObject.girar = function() {
    console.log("la figura ha girado")
}

myObject.girar()