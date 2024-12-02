// Samma som i E1:
// Se till att funktionen F1 anropas när användaren klickar på knappen A
// Se till att funktionen F2 anropas när användaren klickar på knappen B

// Notera dock att knapparna inte finns kodade i HTML-filen och måste 
// skapas här i JS-filen.

function F1 () {
  console.log("Detta är F1");
}

function F2 () {
  console.log("Detta är F2");
}

const createButtonA = document.createElement("button");
createButtonA.id = "buttonA";
createButtonA.textContent = "A";
document.body.appendChild(createButtonA);

const createButtonB = document.createElement("button");
createButtonB.id = "buttonB";
createButtonB.textContent = "B";
document.body.appendChild(createButtonB);

const buttonA = document.querySelector("#buttonA");
const buttonB = document.querySelector("#buttonB");

buttonA.addEventListener("click", F1);
buttonB.addEventListener("click", F2);