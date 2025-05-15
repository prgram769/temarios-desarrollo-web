// exportacion de modulos

// funciones

export function sum(a,b) {
    return a + b
}

console.log(sum(5,7))

// propiedadaes

export const PI = 3.141632
export const name = "ruben"

// exportacion por defecto

export default function substract (a,b) {
    return a - b
}

// clases

export class Circle {
    constructor(radius) {
        this.radius = radius
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    perimeter() {
        return 2 * Math.PI * this.radius
    }
}