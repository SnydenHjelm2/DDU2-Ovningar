
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

// Det finns nu ett input-element bredvid knappen "Skapa nya siffror".

// Del A)
// Användaren ska kunna skriva en siffra där och, när hen klickar på knappen "Skapa nya siffror"
// så ska det skapas lika många siffror som det står på input fältet.
const input = document.querySelector("input");
const newButton = document.querySelector("#new");
newButton.addEventListener("click", function nums() {newNumbers(input.value, true)});

// Del B)
// Det ska också gå att trycka Enter i input fältet och då ska det vara som att 
// man klickade på knappen.
input.addEventListener("keyup", function nums (e) {
  if (e.key === "Enter") {
    newNumbers(input.value, true);
  }
});

input.addEventListener("keyup", function(e) {
  if (e.key === "Enter" && e.ctrlKey === true){
    let allNumbers = document.querySelectorAll("#numbers div");
  let totalSum = 0;
  for (i=0; i<allNumbers.length; i++) {
    let currentNumber = allNumbers[i].textContent;
    currentNumber = parseInt(currentNumber);
    totalSum += currentNumber;
  }

  sum.textContent = totalSum;
  }
})


const empty = document.querySelector("#empty");
empty.addEventListener("click", function remove() {newNumbers(input.value, false)});

const doSum = document.querySelector("#doSum");
const sum = document.querySelector("#sum");
doSum.addEventListener("click", function addThem() {
  let allNumbers = document.querySelectorAll("#numbers div");
  let totalSum = 0;
  for (i=0; i<allNumbers.length; i++) {
    let currentNumber = allNumbers[i].textContent;
    currentNumber = parseInt(currentNumber);
    totalSum += currentNumber;
  }

  sum.textContent = totalSum;
})