// 3. Lanza una excepción genérica

let myObject

function sum(a,b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Error no es un numero entero");
    }
}

try {
    console.log(sum("5",32));
    console.log("5", "10");
} catch (error) {
    console.log("se ha producido un error:", error.message);
}