// clase Array

// ejemplo 1

function cargar(sueldos) {
    for (let f = 0; f < sueldos.length; f++) {
        let v = prompt("Ingrese un sueldo")
        sueldos[f] = parseInt(v)        
    }
}

function calcularGastos(sueldos) {
    let total = 0
    for (let f = 0; f < sueldos.length; f++) {
        total = total + sueldos[f]
        
    }
    document.writeln("Listado de sueldos<br>")
    for (let f = 0; f < sueldos.length; f++) {
        document.writeln(sueldos[f] + "<br>")
    }
    document.writeln("Total de gastos en sueldos: " + total + "<br>")
}

let sueldos

sueldos = new Array(5)

cargar(sueldos)
calcularGastos(sueldos)

// ejemplo 2

function mostrarFecha(meses,dias) {
    let num = parseInt(prompt("Ingrese el numero de mes: "))
    document.writeln("Corresponde al mes: " + meses[num - 1])
    document.writeln("<br>")
    document.writeln("Tiene " + dias[num - 1] + " dias")
}

const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
const dias = [31,28,31,30,31,30,31,31,30,31,30,31]

mostrarFecha(meses,dias)