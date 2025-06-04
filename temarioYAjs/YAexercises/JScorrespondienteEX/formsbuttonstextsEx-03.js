// Cargar un nombre y un apellido en sendos text. Al presionar un botón, concatenarlos y mostrarlos en un tercer text (Tener en cuenta que podemos modificar la propiedad value de un objeto TEXT cuando ocurre un evento)

function concatenar() {
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let concat = nombre + " " + apellido
    
    document.getElementById("concat").value = concat
}