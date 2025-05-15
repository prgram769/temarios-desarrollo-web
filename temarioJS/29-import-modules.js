// importacion de modulos

import { Circle, name, PI, sum } from "./28-export-modules.js";

import substract from "./28-export-modules.js";

// funciones

console.log(sum(5,10))

// propiedades

console.log(PI);
console.log(name);

// importacion por defecto

substract(5, 10)

// clases

let circle = new Circle(5)

console.log(circle.radius);
console.log(circle.area().toFixed());
console.log(circle.perimeter().toFixed());

// proyecto modular

// import {myClass} from "./directory/file.js"

