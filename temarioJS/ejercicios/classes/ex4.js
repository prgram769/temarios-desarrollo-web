// 4. Añade un método estático a la primera clase

class Saludo {
    static saludar(nombre,forma) {
        return nombre + " te saluda de forma " + forma
    }
}

console.log(Saludo.saludar("rugby","cordial"))