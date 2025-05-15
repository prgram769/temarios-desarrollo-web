// set

// declaracion

let myset = new Set()

// inicializacion

myset = new Set(["Ruben","moure","mouredev",37,true])

console.log(myset)

// metodos comunes

// add y delete

myset.add("https")

console.log(myset)

myset.delete("https")

console.log(myset)

// has

myset.has("moure")

// size

console.log(myset.size)

// convertir un set a array
let myArray = Array.from(myset)
console.log(myArray)

// convertir un array a set

myset = new Set(myArray)
console.log(myset)


//



myset.add("ruben@gmail.com")
myset.add("ruben@gmail.com")
myset.add("ruben@gmail.com")
console.log(myset)
