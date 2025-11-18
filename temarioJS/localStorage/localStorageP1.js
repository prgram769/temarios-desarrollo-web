let h1 = document.getElementById("h1");

if (localStorage.getItem("nombre") === null) {
  localStorage.setItem("nombre", "juanito");
  console.log("añadido");
} else {
  h1.textContent = localStorage.getItem("nombre");

  console.log("recogido");

  localStorage.removeItem("nombre");
}
