let list = document.getElementById("lista");
let field = document.getElementById("field");
let button = document.getElementById("btn");

let tareas = JSON.parse(localStorage.getItem("tareas") || []);

function display() {
  list.textContent = "";

  tareas.forEach((tarea, index) => {
    let li = document.createElement("li");

    li.textContent = tarea;

    let btn = document.createElement("button");

    btn.textContent = "eliminar";
    btn.onclick = () => removeTask(index);

    li.appendChild(btn);

    list.appendChild(li);
  })
}

document.getElementById("taskForm").addEventListener("click", function(event) {
  let tarea = field.value.trim();

  if (tarea !== "") {
    tareas.push(tarea);

    localStorage.setItem("tareas", JSON.stringify(tareas));

    field.value = "";

    display();
  }
})

function removeTask(index) {
  tareas.splice(index, 1);

  localStorage.setItem("tareas", JSON.stringify(tareas));

  display();
}

window.onload = display();
