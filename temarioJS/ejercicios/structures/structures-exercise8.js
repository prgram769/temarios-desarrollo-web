// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

let myMap = new Map()
myMap = new Map([
  ["enero",1],
  ["febrero",2],
  ["marzo",3],
  ["abril",4],
  ["mayo",5],
  ["junio",6],
  ["julio",7],
  ["agosto",8],
  ["septiembre",9],
  ["octubre",10],
  ["noviembre",11],
  ["diciembre",12],
])

console.log(myMap)
console.log(myMap.has("mayo"))
