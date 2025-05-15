// 3. Muestra los valores de las propiedades e invoca a la función

class Saludo {
    constructor(nombre,forma) {
        this.nombre = nombre
        this. forma = forma
    }

    saludar() {
        console.log(this.nombre, "te saluda de forma", this.forma)
    }
}

let mySaludo = new Saludo("rugby","cordial")

console.log(mySaludo)
mySaludo.saludar()