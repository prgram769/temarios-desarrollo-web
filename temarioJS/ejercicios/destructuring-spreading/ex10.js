// 10. Combina desestructuración y propagación

let myPerson = {
    name: "dan",
    age: 47
}
let {age: myPersonAge} = myPerson
let myPerson2 = {...myPerson}

console.log(myPerson2)
console.log(myPersonAge)