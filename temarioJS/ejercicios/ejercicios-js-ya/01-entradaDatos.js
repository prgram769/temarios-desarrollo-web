// Confeccionar un programa que permita cargar el nombre de un usuario y su mail por teclado. Mostrar posteriormente los datos en la página HTML o consola con node. 

/* importar el modulo */
const readline = require("readline")

/* crear la interfaz y leer los datos */

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question("dime tu nombre de usuario: ", (user) => {
    r1.question("dime tu correo electronico: ", (mail => {
        console.log(`Tu nombre de usuario es: ${user} y tu email es: ${mail}`)
        r1.close()
    }))
}) 