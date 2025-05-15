// STRINGS (cadenas de caracteres)

let myName = "carlos"
let greeting = "hola, " + myName + "!"

console.log(greeting)
console.log(typeof(greeting))

// longitud
console.log(greeting.length)

// acceso a caracteres
console.log(greeting[0])
console.log(greeting[11])

// metodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("carlos"))
console.log(greeting.includes("hola"))
console.log(greeting.includes("adios"))
console.log(greeting.slice(0, 10))
console.log(greeting.replace("carlos", "gonzalo"))

// template literals (plantillas literales)

let message = `hola, este es mi
curso de javascript`
console.log(message)

let email = "carlos@gmail.com"
console.log(`hola, ${myName}! tu email es: ${email}`)
