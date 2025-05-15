// 5. Haz uso del método estático

class Saludo {
    static saludar(nombre, forma){
        return nombre + " te saluda de forma " + forma
    }
}

console.log(Saludo.saludar("rugby", "cordial"))