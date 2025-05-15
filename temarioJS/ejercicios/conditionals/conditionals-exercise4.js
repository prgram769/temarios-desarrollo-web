// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 7

if (age < 18) {
  console.log("No puede votar")
  console.log("Le quedan:", 18 - age, "años")
} else {
  console.log("Puede votar")
}
