// 2. Crea una función que utilice warn correctamente

function comprobarNumero(a) {
    if (!Number.isNaN(a)) {
        console.warn("Debes de introducir un numero");
    }
}

comprobarNumero("54")