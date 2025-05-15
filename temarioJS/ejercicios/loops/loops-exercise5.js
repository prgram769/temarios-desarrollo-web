// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let texto = "hola"
let contador = 0;
const vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
const textoEnMinusculas = texto.toLowerCase();
let i = 0; // Inicializamos el índice para el bucle while

while (i < textoEnMinusculas.length) {
  const caracter = textoEnMinusculas[i];
  if (vocales.includes(caracter)) {
    contador++;
      }
     i++; // Incrementamos el índice para avanzar al siguiente carácter
    }

console.log(contador)

