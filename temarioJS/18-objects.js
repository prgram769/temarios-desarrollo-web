// objects - programacion orientada a objetos

// sintaxis

let person = {
    name: "Ruben",
    age: 15,
    alias: "rugby"
}

// acceder a las propiedades

// notacion punto (Es mejor)

console.log(person.name)

// notacion de corchetes

console.log(person["name"])

// modificacion de propiedades

person.name = "ruben gonzalez"
console.log(person.name)
console.log(typeof person.age)

person.age = "18"
console.log(person.age)
console.log(typeof person.age)

// eliminacion de propiedades 

delete person.age

console.log(person)

person.email = "rugby@gmail.com"

console.log(person)

person["age"] = 18

console.log(person)

// metodos (funciones)

let person2 = {
    name: "paco",
    age: 56,
    alias: "el chocolatero",
    walk: function() {
        console.log("La persona camina")
    }
}

person2.walk()

// anidacion de objetos

let person3 = {
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
            console.log("la persona esta haciendo chocolate")
        }
    }
}

console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

// igualdad de objetos

console.log(person)

let person4 = {
    name: "ruben gonzalez",
    alias: "rugby",
    email: "rugby@gmail.com",
    age: 18
}

console.log(person4)

console.log(person == person4)
console.log(person === person4)

console.log(person.name == person4.name)

// iteracion

/*for (let value of person4) {
    console.log(value)
}*/

for (let value in person4) {
    console.log(value)
}

for (let key in person4) {
    console.log(key + ": " + person4[key])
}

/*let person5 = {
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
            console.log(`${this.name} esta haciendo chocolate`)
        }
    }
}*/

/* person5.job.work() */

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

person5.job.work()

// funciones como objetos 

function Person(name, age) { // deberia de ser una clase
    this.name = name
    this.age = age
}

let person6 = new Person("Ruben", 15)

console.log(person6)

console.log(typeof person6)
console.log(typeof person4)