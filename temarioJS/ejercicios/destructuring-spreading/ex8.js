// 8. Usa propagación para combinar dos objetos en uno nuevo

let myPerson = {
    name: "paco",
    age: 13
}
let myPerson2 = {
    job: "estudiante",
    exp: 10
}
let myPersona = {...myPerson, ...myPerson2}

console.log(myPersona)