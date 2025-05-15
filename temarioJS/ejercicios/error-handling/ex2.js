// 2. Captura una excepción utilizando try-catch y finally

let myObject

try {
    console.log(myObject.email)
} catch (error) {
    console.log("se ha producido un error:", error.message);
} finally {
    console.log("Programa finalizado");
}