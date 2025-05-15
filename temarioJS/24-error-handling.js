// manejo de errores

// produce una excepcion
let myObject;
// console.log(myObject.email)

// tratamiento de errores

// try-catch

try {
    // codigo que intenta ejecutar
    console.log(myObject.email);
    console.log("finaliza la ejecucion sin errores");
} catch {
    // bloque de error
    console.log("se ha producido un error");
}
try {
    // codigo que intenta ejecutar
    console.log(myObject);
    console.log("finaliza la ejecucion sin errores");
} catch {
    // bloque de error
    console.log("se ha producido un error");
}

// captura del error
try {
    // codigo que intenta ejecutar
    console.log(myObject.email);
} catch (error) {
    // bloque de error
    console.log("se ha producido un error", error.message);
}

// finally, el codigo dentro de ese bloque se ejecuta siempre

try {
    console.log(myObject.email);
} catch (error) {
    console.log("se ha producido un error", error.message);
} finally {
    console.log("este codigo se ejecuta siempre");
}

// lanzamiento de errores

// throw

function sum(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operacion solo suma numeros");
    }
    // if (!Number.isNaN(a)) {
    // console.log("Es un numero")
    // }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operacion solo suma numeros enteros");
    }
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se esta intentando sumar cero", a, b);
    }
    return a + b;
}

try {
    console.log(sum("5", 10));
    console.log(sum(5, 10));
    console.log(sum("5", "10"));
    console.log(sum(5, "10"));
} catch (error) {
    console.log("se ha producido un error:", error.message);
}

// throw new Error("Se ha producido un error");

// capturar varios tipos de errores

try {
    // console.log(sum("5", 10));
    console.log(sum(5.5, 10));
} catch (error) {
    if (error instanceof TypeError) {
        console.log("se ha producido un error de tipo:", error.message);
    } else if (error instanceof Error) {
        console.log("se ha producido un error:", error.message);
    }
}

// crear excepciones personalizadas

class SumZeroIntegerError extends Error {
    constructor(message,a,b) {
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}

try {
    console.log(sum(0, 10));
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
    error.printNumbers()
}