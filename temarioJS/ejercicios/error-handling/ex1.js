// 1. Captura una excepción utilizando try-catch

let myObject

try {
    console.log(myObject.email)
} catch (error) {
    console.log("se ha producido un error:", error.message)
}