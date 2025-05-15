// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let myPerson = {
    name: "Paco",
    age: 46,
    alias: "El chocolatero"
}
let {name: nombre, age: edad} = myPerson

console.log(nombre)
console.log(edad)