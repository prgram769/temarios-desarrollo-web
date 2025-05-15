// 8. Usa un bucle para invertir una cadena de texto

let myString = "hola"
let i = myString.length - 1
let invertido = ""

while(i >= 0){
  invertido += myString[i]
  i--
}
console.log(invertido)
