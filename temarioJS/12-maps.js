// map

// declaracion

let myMap = new Map()

console.log(myMap)

//inicializacion

myMap = new Map([
    ["name","ruben"],
    ["email","ponidesbocado@protonmail.com"],
    ["age",15],
])

console.log(myMap)

//metodos y propiedades

//set

myMap.set("alias","rugby")
myMap.set("name","ruben gonzalez")

console.log(myMap)

//get 

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

//has

console.log(myMap.has("name"))
console.log(myMap.has("surname"))

//delete

myMap.delete("email")

console.log(myMap)

//keys

console.log(myMap.keys())

//values

console.log(myMap.values())

//size

console.log(myMap.size)

//entries

console.log(myMap.entries())

//clear

myMap.clear()

console.log(myMap)

