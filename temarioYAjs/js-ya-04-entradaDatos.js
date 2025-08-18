// entrada de datos en js

// desde el navegador

/*let nombre
let edad

nombre = prompt("dime tu nombre")
edad = prompt("dime tu edad")

console.log(`hola ${nombre}, no sabia que tenias ${edad} años`)*/

// desde la consola

const readline = require('readline')

/* configurar la interfaz de lectura */

const r0 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/* leer datos */ 

r1.question("dime tu nombre: ",(nombreConsola) =>  {
    r1.question("dime tu edad: ",(edadConsola) => {
        console.log(`hola ${nombreConsola}, no sabia que tenias ${edadConsola} años`)
        r1.close()
    })
})

// desde consola utilizando el paquete prompt-sync

/* en la terminal:  npm install prompt-sync*/

/* 
const prompt = require('prompt-sync)()

//leer datos

let edad = prompt("dime tu edad: ")

console.log(`tienes ${edad} años`)
*/ 
