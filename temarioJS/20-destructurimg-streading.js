let myArray = [1,2,3,4]

let myPerson = {
    name: "ruben",
    age: 15,
    alias: "rugby"
}

myArray.push(5)
console.log(myArray)

myValue = myArray[1]
console.log(myValue)

let myName = myPerson.name
console.log(myName)

// desestructuracion

// sintaxis arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// sintaxis arrays con valores predeterminados

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

// ignorar elementos array

let [myValue10, , , myValue13] = myArray
console.log(myValue10)
console.log(myValue13)

// sintaxis objects

let {name, age, alias} = myPerson
console.log(name)
console.log(age)
console.log(alias)

// sintaxis de objetos con valores predeterminados

let {name2, age2, alias2, email = "email@email.com"} = myPerson
console.log(name2) //no existe
console.log(age2) //no existe
console.log(alias2) //no existe
console.log(email)

// sintaxis objects con nuevos nombres de variables

let {name: name3, age: age3, alias: alias3} = myPerson
console.log(name3)
console.log(age3)
console.log(alias3)

let person5 = {
    name: "paco",
    age: 56,
    alias: "el chocolatero",
    walk: function() {
        console.log("La persona camina")
    },
    job: {
        name: "chocolatero",
        exp: 35,
        work: function() {
            console.log(`la persona de ${this.exp} años de experiencia esta haciendo chocolate`)
        }
    }
}

let {name: name4, job: {name: nameJob}} = person5

console.log(name4)
console.log(nameJob)

// propagacion (...)

// sintaxis arrays

let myArray2 = [...myArray] // copia

let myArray3 = [...myArray, 5, 6]

console.log(myArray2)
console.log(myArray3)

// combinacion de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]

console.log(myArray4)

// sintaxis objects

let persona4 = {...myPerson} //copia
console.log(persona4)

let persona6 = {...myPerson, email: "rugby@gmail.com"}
console.log(persona6)