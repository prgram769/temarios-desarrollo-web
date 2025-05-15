// 7. Crea una clase que haga uso de getters y setters

class Saludo {

    #mano
    #cara

    constructor(nombre,forma,mano,cara) {
        this.nombre = nombre
        this.forma = forma
        this.#mano = mano
        this.#cara = cara
    }
    
    get mano(){
        return this.#mano
    }

    set cara(cara) {
        this.#cara = cara
    }

    saludar() {
        console.log(this.nombre, "te saluda de forma", this.forma, "con la mano", this.#mano)
    }
}

let mySaludo = new Saludo("rugby","cordial","derecha")

mySaludo.saludar()

let mySaludo2 = new Saludo("rugby","cordial","derecha","feliz")
mySaludo.cara = ("amenazante")