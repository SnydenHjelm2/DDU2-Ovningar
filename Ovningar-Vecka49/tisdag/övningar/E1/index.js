// Se till att funktionen F1 anropas när användaren klickar på knappen A
// Se till att funktionen F2 anropas när användaren klickar på knappen B

function F1 () {
  console.log("Detta är F1");
}

function F2 () {
  console.log("Detta är F2");
}

const buttonA = document.querySelector("#buttonA");
const buttonB = document.querySelector("#buttonB");

buttonA.addEventListener("click", F1);
buttonB.addEventListener("click", F2);