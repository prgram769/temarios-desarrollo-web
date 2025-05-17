// Confeccionar una función que nos retorne un string con el siguiente formato:

// Hoy es Lunes 9 de Agosto de 2021

// Para poder recuperar el día de la semana debemos llamar al método:

// let diaSemana=fecha.getDay();

// El método getDay() devuelve el día de la semana de la fecha especificada, siendo 0 (Domingo) el primer día.

function obtenerDia() {
    let fecha 

    fecha = new Date()
    
    let diasDeLaSemana = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"]
    let mesesDelAño = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
    let diaSemana = fecha.getDay()
    let mes = fecha.getMonth()
    let año = fecha.getFullYear()
   
    document.writeln("Hoy es: ",diasDeLaSemana[diaSemana]," ",diaSemana, " de ",mesesDelAño[mes], " de ",año)
}
obtenerDia()