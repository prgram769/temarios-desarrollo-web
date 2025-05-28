// Realizar un programa que permita cargar una dirección de mail e implementar una función que verifique si el String tiene cargado el carácter @. 

let direcciónDeEmail = prompt("Ingresa una direccion de email:")

function verificarArrobaEnEmail(email) {
    if (email.includes("@")) {
        document.writeln("Sí, la direccion de correo incluye arroba, por tanto es correcta")
    } else {
        document.writeln("La direccion de correo no es correcta ya que no incluye arroba")
    }
}

verificarArrobaEnEmail(direcciónDeEmail)