// 6. elimina uno concreto a tu elección

let mySet = new Set()
mySet = new Set(["rimas de bequer","libro de lengua","hola amego","las leyendas de fatema","14 de febrero"])

console.log(mySet)

mySet.add("piratas del caribe")
mySet.add("piratas del caribe")
mySet.add("el señor de los anillos")

console.log(mySet)

mySet.delete("hola amego")

console.log(mySet)
