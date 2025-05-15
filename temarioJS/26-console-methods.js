// metodos de la consola

// console

// log

console.log("hola javascript");

// error

console.error("Este es un mensaje de error ");
console.error("Error al conectarse a la base de datos:", new Error("Conexion fallida"));

// warn

console.warn("Este es un mensaje de advertencia");

// info

console.info("Este es un mensaje de informacion adicional");

// table

let myData = [
    ["Ruben", 15],
    ["Inma", 14]
]

console.table(myData);

myData = [
    {name: "Ruben", age: 15},
    {name: "Inma", age:14}
]

console.table(myData);

// group

console.group('usuario:');
console.log("Nombre: Ruben");
console.log("Edad: 15");
console.log("prueba de que aun sigue dentro del grupo");

/* a partir de ahi todos los console.log() irán dentro del grupo entonces para salir de ahí hay que finalizar el grupo */

console.groupEnd();
console.log("hola");

// time

console.time("Tiempo de ejecucion");

for (let i = 0; i < 10000; i++) {
    
}

console.timeEnd("Tiempo de ejecucion");

// assert

let age = 17

console.assert(age >= 18, "El usuario debe de ser mayor de edad")

// count

console.count("Click");
console.count("Click");
console.count("Click");
console.countReset("Click");
console.count("Click");

// trace

console.trace("Seguiento de la ejecucion");

function funcA () {
    funcB()
}

function funcB () {
    console.trace("Seguimiento de la ejecucion");
}

funcA()

// clear

// console.clear();