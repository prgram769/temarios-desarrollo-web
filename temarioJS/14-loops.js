// bucles

// for

for (let i = 0; i < 5; i++) {
  console.log("hola")
}

for (let i = 0; i < 5; i++) {
  console.log(`hola ${i}`)
}

const numbers = [1,2,3,4,5]

for (let i = 0; i < numbers.length; i++) {
  console.log(`Elemento: ${numbers[i]}`)
}

// while

let i = 0
while (i < 5) {
  console.log(`hola ${i}`)
  i++
}

// while true (bucle infinito)

//while(true) {

//}

// do while 

i = 0
do {
  console.log(`hola ${i}`)
  i++
} while(i < 5)

i = 6
do {
  console.log(`hola ${i}`)
  i++
} while(i < 5)

// for of

myArray = [1,2,3,4,]

myMap = new Map([
    ["name","ruben"],
    ["email","ponidesbocado@protonmail.com"],
    ["age",15],
])

myString = "hola"

myset = new Set(["Ruben","moure","mouredev",37,true])

for (let valor of myArray) {
  console.log(valor)
}

for (let valor of myset) {
  console.log(valor)
}

for (let valor of myMap) {
  console.log(valor)
}

for (let valor of myString) {
  console.log(valor)
}

//buenas practicas

//break y continue

for (let i = 0; i < 10; i++) {
  if (i == 5){
      continue
  } else if (i == 7) {
    break
  }
  console.log(`hola ${i}`)
}

