"use strict";

// Placera en referens till "#wrapper" i en konstant
const wrapper = document.querySelector("#wrapper");

// rit-ytan
const ritYtan = document.createElement("div"); // Skapa diven
ritYtan.id = "ritYtan"; // Ge den ett id
wrapper.appendChild(ritYtan); // Placera den i elementet som finns sparat i variabeln wrapper (alltså #wrapper)
// Styla rit-ytan
const dimsRitYtan = "300px";
ritYtan.style.backgroundColor = "black";
ritYtan.style.width = dimsRitYtan;
ritYtan.style.height = dimsRitYtan;
ritYtan.style.margin = "auto";
ritYtan.style.marginTop = "50px";
ritYtan.style.display = "grid";
ritYtan.style.gridTemplateColumns = "repeat(3, 1fr)";
ritYtan.style.gridTemplateRows = "repeat(3, 1fr)";


let cell1 = document.createElement("div"); // Skapa en cell
ritYtan.appendChild(cell1); // Placera den i diven som finns sparat i konstanten ritYtan
cell1.style.border = "1px solid lightgrey";
cell1.addEventListener("click", cell1Clicked); // Se till att instruktionerna i funktionen cellClicked körs när användaren klickar på en cell
function cell1Clicked () {
  cell1.style.backgroundColor = "white";
}

let cell2 = document.createElement("div"); // Skapa en cell
ritYtan.appendChild(cell2); // Placera den i diven som finns sparat i konstanten ritYtan
cell2.style.border = "1px solid lightgrey";
cell2.addEventListener("click", cell2Clicked); // Se till att instruktionerna i funktionen cellClicked mårs för att klicka på en cell
function cell2Clicked () {
  cell2.style.backgroundColor = "white";
}

let cell3 = document.createElement("div"); // Skapa en cell
ritYtan.appendChild(cell3); // Placera den i diven som finns sparat i konstanten ritYtan
cell3.style.border = "1px solid lightgrey";
cell3.addEventListener("click", cell3Clicked); // Se till att instruktionerna i funktionen cellClicked mårs för att klicka på en cell
function cell3Clicked () {
  cell3.style.backgroundColor = "white";
}

let cell4 = document.createElement("div"); // Skapa en cell
ritYtan.appendChild(cell4); // Placera den i diven som finns sparat i konstanten ritYtan
cell4.style.border = "1px solid lightgrey";
cell4.addEventListener("click", cell4Clicked); // Se till att instruktionerna i funktionen cellClicked mårs för att klicka på en cell
function cell4Clicked () {
  cell4.style.backgroundColor = "white";
}

let cell5 = document.createElement("div"); // Skapa en cell
ritYtan.appendChild(cell5); // Placera den i diven som finns sparat i konstanten ritYtan
cell5.style.border = "1px solid lightgrey";
cell5.addEventListener("click", cell5Clicked); // Se till att instruktionerna i funktionen cellClicked mårs för att klicka på en cell
function cell5Clicked () {
  cell5.style.backgroundColor = "white";
}
 let cell6 = document.createElement("div"); // Skapa en cell
 ritYtan.appendChild(cell6); // Placera den i diven som finns sparat i konstanten ritYtan
 cell6.style.border = "1px solid lightgrey";
 cell6.addEventListener("click", cell6Clicked); // Se till att instruktionerna i funktionen cellClicked mårs för att klicka på en cell
 function cell6Clicked () {
  cell6.style.backgroundColor = "white";
}

let cell7 = document.createElement("div"); // Skapa en cell
ritYtan.appendChild(cell7); // Placera den i diven som finns sparat i konstanten ritYtan
cell7.style.border = "1px solid lightgrey";
cell7.addEventListener("click", cell7Clicked); // Se till att instruktionerna i funktionen cellClicked för att klicka på en cell
function cell7Clicked () {
  cell7.style.backgroundColor = "white";
}

let cell8 = document.createElement("div"); // Skapa en cell
ritYtan.appendChild(cell8); // Placera den i diven som finns sparat i konstanten ritYtan
cell8.style.border = "1px solid lightgrey";
cell8.addEventListener("click", cell8Clicked); // Se till att instruktionerna i funktionen cellClicked för att klicka på en cell
function cell8Clicked () {
  cell8.style.backgroundColor = "white";
}

let cell9 = document.createElement("div"); // Skapa en cell
ritYtan.appendChild(cell9); // Placera den i diven som finns sparat i konstanten ritYtan
cell9.style.border = "1px solid lightgrey";
cell9.addEventListener("click", cell9Clicked); // Se till att instruktionerna i funktionen cellClicked för att klicka på en cell
function cell9Clicked () {
  cell9.style.backgroundColor = "white";
}

