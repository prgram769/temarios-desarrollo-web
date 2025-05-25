// Clase Math

// Ejemplo: Confeccionar un programa que permita cargar un valor comprendido entre 1 y 10. Luego generar un valor aleatorio entre 1 y 10, mostrar un mensaje con el número sorteado e indicar si ganó o perdió: 

// Math.random()
let selec = parseInt(prompt("Ingresa un valor entre 1 y 10"))
let num = parseInt(Math.random() * 10) + 1

if (num == selec) {
    document.writeln("Ganó el numero que se sorteó es el " + num)
} else {
    document.writeln("Lo siento se sorteó el valor " + num + " y usted eligió el " + selec)
}
/*
Para generar un valor aleatorio comprendido entre 1 y 10 debemos plantear lo siguiente:

        let num = parseInt(Math.random() * 10) + 1;
 */