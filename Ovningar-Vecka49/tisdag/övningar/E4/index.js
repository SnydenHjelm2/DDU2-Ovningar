// Funktionen newNumbers nedan tar två argument:
// - n (heltal)
// - fill (boolesk)
// och skapar n celler i griden #numbers.
// Om fill är true så kommer varje cell att innehåla en slumpmässig siffra mellan 1 och 99 
// Om fill är false så kommer alla celler att innehålla ett bindestreck "-"


function randomNumber (min, max) {
  // Returns a random number from min (inclusive) to max (exclusive)
  return Math.floor(min + (max - min) * Math.random());
}

function newNumbers (n, fill) {
  // Reference to the grid
  const numbersContainer = document.getElementById("numbers");
  
  // Empty the contents of the grid
  numbersContainer.innerHTML = "";
  
  // Fill the grid with cells
  for (let i = 0; i < n; i++) {
    const div = document.createElement("div");
    numbersContainer.appendChild(div);
    // Content of the cell?
    if (fill) {
      div.textContent = randomNumber(1, 100);
    } else {
      div.textContent = "-";
    }
  }
}


newNumbers(60, true);

// ÖVNINGEN

// 1) Se till att det skapas nya siffror när användaren klickar på knappen "Skapa nya siffror". Den ska skapa 60 siffror.
const evenMoreNumber = document.querySelector("#new");
evenMoreNumber.addEventListener("click", function() {newNumbers(60, true);})
// 2) Se till att gridden töms (bara visar bindestreck) när användaren klickar på knappen "Töm"
const empty = document.querySelector("#empty");
empty.addEventListener("click", function() {newNumbers(60, false)});
// 3) Se till att knappen "Addera alla siffror" fungerar, summan ska skrivas i <span id="sum">
const doSum = document.querySelector("#doSum");
const sum = document.querySelector("#sum");
doSum.addEventListener("click", function() {
  let allNumbers = document.querySelectorAll("#numbers div");
  let finalSum = 0;
  for (i=0; i<allNumbers.length; i++) {
    let currentNumber = allNumbers[i].textContent;
    currentNumber = parseInt(currentNumber);
    finalSum += currentNumber;
  }

  sum.textContent = finalSum;
})
// 4) Se till att knappen "Högsta siffran" fungerar
const findMax = document.querySelector("#findMax");
const max = document.querySelector("#max");
findMax.addEventListener("click", function() {
  let allNumbers = document.querySelectorAll("#numbers div");
  let biggestNum = 0;

  for (i=0; i<allNumbers.length; i++) {
    let currentNumber = allNumbers[i].textContent;
    currentNumber = parseInt(currentNumber);
    if (currentNumber > biggestNum) {
      biggestNum = currentNumber;
    }
  }

  if (biggestNum === 0) {
    max.textContent = "No Numbers were found"
  } else {
    max.textContent = biggestNum;
  }
})
// 4) Se till att knappen "Lägsta siffran" fungerar
const findMin = document.querySelector("#findMin");
const min = document.querySelector("#min");
findMin.addEventListener("click", function() {
  let allNumbers = document.querySelectorAll("#numbers div");
  let smallestNum = Infinity;

  for (i=0; i<allNumbers.length; i++) {
    let currentNumber = allNumbers[i].textContent;
    currentNumber = parseInt(currentNumber);
    if (currentNumber < smallestNum) {
      smallestNum = currentNumber;
    }
  }

  if (smallestNum === Infinity) {
    min.textContent = "No Numbers were found"
  } else {
    min.textContent = smallestNum;
  }
})





