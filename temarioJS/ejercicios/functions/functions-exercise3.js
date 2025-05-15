// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let contador = 0
let myString = "hola"
let vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú']

const myFunc = function(string){
    let myStringMin = string.toLowerCase()
    for(let i = 0; i < myStringMin.length; i++){
        let caracter = myStringMin[i]
        if (vocales.includes(caracter)) {
            contador++
        }
    }
    return contador
}

console.log(myFunc(myString))