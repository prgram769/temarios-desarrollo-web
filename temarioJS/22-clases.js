// clases

class Person {

    constructor(name,age,alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// sintaxis

let person = new Person("ruben",15,"rugby")
let person2 = new Person("paco",17,"pacofiestas")

console.log(person)
console.log(person2)
console.log(typeof person)

// valores por defecto

class DefaultPerson {
    constructor(name = "sin nombre",age = 0,alias = "sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person3 = new DefaultPerson()

console.log(person3)

let person4 = new DefaultPerson("ruben")

console.log(person4)

// acceso a propiedades

console.log(person3.alias)
console.log(person3.name)
console.log(person4.name)

person3.alias = "rugby"

console.log(person3.alias)

// funciones

class PersonWithMethod {
    constructor(name = "sin nombre",age = 0,alias = "sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }
    walk(){
        console.log("la persona camina")
    }
}

let person5 = new PersonWithMethod("ruben",15,"rugby")
person5.walk()

// propiedades privadads

class PrivatePerson {

    #bank

    constructor(name,age,alias,bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }
    pay(){
        this.#bank
    }
}

let person6 = new PrivatePerson("ruben",15,"rugby","IBAN1071470146129814")

console.log(person6.bank)
// console.log(person6.#bank)

// getter, setter

class GetPerson {

    #name
    #age
    #alias

    constructor(name,age,alias) {
        this.#name = name
        this.#age = age
        this.#alias = alias
    }

    get name() {
        return this.#name
    }
}

person7 = new GetPerson("ruben",15,"rugby")

console.log(person7.name)

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name,age,alias,bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() {
        return this.#name
    }

    set bank(newBank) {
        this.#bank = newBank
    }
}

person8 = new GetSetPerson("ruben",15,"rugby","IBAN1071470146129814")

person8.bank = ("new IBAN1234567890")

// herencia

class Animal {
    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("emite un sonido generico")
    }
}

class Dog extends Animal {

    run() {
        console.log("el perro corre")
    }
}

let myDog = new Dog("Rigby")
myDog.run()
myDog.sound()

// metodos estaticos

class MathOperations {
    static sum(a,b) {
        return a + b
    }
}

// let myClass = new MathOperations() al ser estatico no necesitamos instanciar para acceder

console.log(MathOperations.sum(5,10)) 