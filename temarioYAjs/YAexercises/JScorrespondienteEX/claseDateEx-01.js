// Confeccionar un programa que muestre en que cuatrimestre del año nos encontramos. Para esto obtener el mes. 

let fecha

fecha = new Date()

mesActual = fecha.getMonth()

function averiguarCuatrimestre() {
    switch (mesActual) {
        case 0:
            document.writeln("Primero")
            break;
        case 1:
            document.writeln("Primero")
            break
        case 2:
            document.writeln("Primero")
            break
        case 3:
            document.writeln("Primero")
            break
        case 4:
            document.writeln("Segundo")
            break
        case 5:
            document.writeln("Segundo")
            break
        case 6:
            document.writeln("Segundo")
            break
        case 7:
            document.writeln("Segundo")
            break
        case 8:
            document.writeln("Tercero")
            break
        case 9:
            document.writeln("Tercero")
            break
        case 10:
            document.writeln("Tercero")
            break
        case 11:
            document.writeln("Tercero")
            break;
    }
}

averiguarCuatrimestre()