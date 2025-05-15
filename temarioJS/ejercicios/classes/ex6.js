// 6. Crea una clase que haga uso de herencia

class Saludo {
    constructor(nombre,forma) {
        this.nombre = nombre
        this.forma = forma
    }

    saludar(){
        console.log(this.nombre, "te saluda de forma", this.forma)
    }
}

class Persona extends Saludo {
    correr(){
        console.log("la persona corre")
    }
}

let myPersona = new Persona("rugby","cordial")

myPersona.saludar()
myPersona.correr()