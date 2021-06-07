//Pasar los ids a elementos
let firstL = document.getElementById("firstLink");
let secondL = document.getElementById("secondLink");
let thirdL = document.getElementById("thirdLink");
let fourthL = document.getElementById("fourthLink");

//Agregar los eventos
secondL.addEventListener("mouseover", linkHoverIn);
secondL.addEventListener("mouseleave", linkHoverOut);
secondL.addEventListener("click", linkAction);

thirdL.addEventListener("mouseover", linkHoverIn);
thirdL.addEventListener("mouseleave", linkHoverOut);
thirdL.addEventListener("click", linkAction);

fourthL.addEventListener("mouseover", linkHoverIn);
fourthL.addEventListener("mouseleave", linkHoverOut);
fourthL.addEventListener("click", linkAction);

firstL.addEventListener("mouseover", linkHoverIn);
firstL.addEventListener("mouseleave", linkHoverOut);
firstL.addEventListener("click", linkAction);

//FUNCIONES
//Función para que el cursor pasa de puntero a manita
function linkHoverIn() {
    this.style.cursor = "pointer";
    this.classList.add("linkHover");
}

//Función para que el link cambie de color
function linkHoverOut() {
    this.classList.remove("linkHover");
}

//Función para que el link nos lleve a la pagina designada
function linkAction() {
    window.location = "info.html";
}