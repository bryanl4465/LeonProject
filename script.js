//Pasar los ids a elementos
let topL1 = document.getElementById("topLink1");
let topL2 = document.getElementById("topLink2");
let topL3 = document.getElementById("topLink3");
let topL4 = document.getElementById("topLink4");

let sideL1 = document.getElementById("sideLink1");
let sideL2 = document.getElementById("sideLink2");
let sideL3 = document.getElementById("sideLink3");
let sideL4 = document.getElementById("sideLink4");

//Agregar los eventos
topL1.addEventListener("mouseover", linkHoverIn);
topL1.addEventListener("mouseleave", linkHoverOut);
topL1.addEventListener("click", linkAction);

topL2.addEventListener("mouseover", linkHoverIn);
topL2.addEventListener("mouseleave", linkHoverOut);
topL2.addEventListener("click", linkAction);

topL3.addEventListener("mouseover", linkHoverIn);
topL3.addEventListener("mouseleave", linkHoverOut);
topL3.addEventListener("click", linkAction);

topL4.addEventListener("mouseover", linkHoverIn);
topL4.addEventListener("mouseleave", linkHoverOut);
topL4.addEventListener("click", linkAction);

sideL1.addEventListener("click", extra1);
sideL2.addEventListener("click", extra1);
sideL3.addEventListener("click", extra1);
sideL4.addEventListener("click", extra1);

//F U N C I O N E S
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
    if (this === topL1) {
        window.location = "index.html";
    }
    else if (this === topL2) {
        window.location = "info.html";

    }
    else if (this === topL3) {
        window.location = "help.html";
    }
    else if (this === topL4) {
        window.location = "contact.html";
    }
}

function extra1() {
    if (this === sideL1) {
        sideL1.classList.add("sideLinkSeen");
        sideL2.classList.remove("sideLinkSeen");
        sideL3.classList.remove("sideLinkSeen");
        sideL4.classList.remove("sideLinkSeen");
    }
    else if (this === sideL2) {
        sideL2.classList.add("sideLinkSeen");
        sideL3.classList.remove("sideLinkSeen");
        sideL4.classList.remove("sideLinkSeen");
        sideL1.classList.remove("sideLinkSeen");
    }
    else if (this === sideL3) {
        sideL3.classList.add("sideLinkSeen");
        sideL4.classList.remove("sideLinkSeen");
        sideL1.classList.remove("sideLinkSeen");
        sideL2.classList.remove("sideLinkSeen");
    }
    else if (this === sideL4) {
        sideL4.classList.add("sideLinkSeen");
        sideL1.classList.remove("sideLinkSeen");
        sideL2.classList.remove("sideLinkSeen");
        sideL3.classList.remove("sideLinkSeen");
    }
}

//Detectar que parte del texto esta siendo leida
let observer4 = new IntersectionObserver(function() {
    sideL4.classList.add("sideLinkSeen");
    sideL1.classList.remove("sideLinkSeen");
    sideL2.classList.remove("sideLinkSeen");
    sideL3.classList.remove("sideLinkSeen");
}, { root: document.querySelector('#rightContainer'), threshold: [0.4] });

observer4.observe(document.querySelector("#part4"));

let observer3 = new IntersectionObserver(function() {
    sideL3.classList.add("sideLinkSeen");
    sideL4.classList.remove("sideLinkSeen");
    sideL1.classList.remove("sideLinkSeen");
    sideL2.classList.remove("sideLinkSeen");
}, { root: document.querySelector('#rightContainer'), threshold: [0.6] });

observer3.observe(document.querySelector("#part3"));

let observer2 = new IntersectionObserver(function() {
    sideL2.classList.add("sideLinkSeen");
    sideL3.classList.remove("sideLinkSeen");
    sideL4.classList.remove("sideLinkSeen");
    sideL1.classList.remove("sideLinkSeen");
}, { root: document.querySelector('#rightContainer'), threshold: [0.6] });

observer2.observe(document.querySelector("#part2"));

let observer1 = new IntersectionObserver(function() {
    sideL1.classList.add("sideLinkSeen");
    sideL2.classList.remove("sideLinkSeen");
    sideL3.classList.remove("sideLinkSeen");
    sideL4.classList.remove("sideLinkSeen");
}, { root: document.querySelector('#rightContainer'), threshold: [0.6] });

observer1.observe(document.querySelector("#part1"));