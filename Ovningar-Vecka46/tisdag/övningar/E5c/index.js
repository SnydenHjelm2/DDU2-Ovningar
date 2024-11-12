"use strict";

let names = ["Jimi", "Janis"];

// Utgå från arrayen ovan och, med hjälp av for-loopar, skapa en array med namnet namesx10
// som ser ut så här: ["Jimi", "Janis", ... varje namn 10 ggr]
// Du får inte arrayen manuellt.

// För att kontrollera att arrayen blev korrekt:
// 1) Logga den i slutet 
// 2) Skriv alla element på webbsidan
var namesx10 = [];
for (let i = 0; i < 10; i++) {
    namesx10.push(names[0], names[1]);
}
console.log(namesx10);

for (let i = 0; i < namesx10.length; i++) {
    var createP = document.createElement("p");
    document.body.appendChild(createP);
    var paras = document.querySelectorAll("p");
    paras[i].textContent = namesx10[i]
}

document.body.style.display = "flex";
document.body.style.gap = "10px";
