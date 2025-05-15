// 1. Crea un función que utilice error correctamente

function comprobarNumeroIntegro(a) {
    if (!Number.isInteger(a)) {
        throw new Error("No es un numero integro");
    }
}

try {
    console.log(comprobarNumeroIntegro(5.5));
} catch (error) {
    console.error("Se ha producido un error:", error.message);
}