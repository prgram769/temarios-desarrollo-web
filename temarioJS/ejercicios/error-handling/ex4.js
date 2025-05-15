// 4. Crea una excepción personalizada


function sum(a,b) {
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se esta intentando sumar cero", a, b);
    }
    return a + b
}

class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }
    printNumbers() {
        console.log(this.a, " + ", this.b);
    }
}

try {
    console.log(sum(0,10));
} catch (error) {
    console.log("Se ha producido un error:", error.message);
    error.printNumbers()
}