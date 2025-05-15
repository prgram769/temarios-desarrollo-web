// 2. Añade un método a la clase que utilice las propiedades

class Saludo {
    constructor(nombre,forma) {
        this.nombre = nombre
        this.forma = forma
    }

    saludar() {
        console.log(this.nombre, "te saluda de forma", this.forma)
    }
}

let mySaludo = new Saludo("rugby","cordial")

mySaludo.saludar()