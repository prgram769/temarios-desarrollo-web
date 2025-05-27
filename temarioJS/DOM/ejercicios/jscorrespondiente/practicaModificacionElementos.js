let imgA = document.getElementsByClassName("a")

console.log(imgA)

for (const img of imgA) {
    img.style.border = "5px solid #00F"
}

let imgB = document.getElementsByClassName("b")

console.log(imgB)

Array.from(imgB).forEach(element => {
    element.style.border = "5px solid black" 
});

let imgC = document.querySelector(".c")

console.log(imgC);

imgC.style.border = "5px solid #0F0"

let imgD = document.querySelectorAll(".d")

console.log(imgD);

imgD.forEach(element => {
    element.style.border = "5px solid #F00"
});