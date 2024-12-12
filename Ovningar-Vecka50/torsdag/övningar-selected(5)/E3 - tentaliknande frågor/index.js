function addDeck () {
  for (let color of Colors) {
    for (let value of Values) {
      deckDOM.appendChild(renderCard(color, value));
    }
  }

  message("Deck added");
}

function drawHand (n = 5) {
  const cards = getAvailableCards();
  
  if (cards.length < n) {
    message("Not enough cards for a hand");
    return;
  }

  const handDOM = document.createElement("div");
  handDOM.classList.add("hand");
  handsDOM.appendChild(handDOM);

  for (let i = 0; i < n; i++) {
    let card = randomElement(getAvailableCards());
    handDOM.appendChild(card);
  }

  message("New hand dealt");
}

function getAvailableCards () {
  return document.querySelectorAll("#deck .card");
}

function message (string) {
  messageDOM.textContent = string;
}

function randomElement (array) {
  const randomIndex = Math.floor(array.length * Math.random());
  return array[randomIndex];
}

function renderCard (color, value) {
  const dom = document.createElement("div");
  dom.classList.add("card");
  dom.classList.add(color);
  deckDOM.appendChild(dom);
  dom.innerHTML = `
    <div class="color">${color}</div>
    <div class="value">${value}</div>
  `;
  return dom;
}

function reset () {
  deckDOM.innerHTML = "";
  handsDOM.innerHTML = "";
  message("Table Resetted");
}

const Colors = ["CB", "DM", "SP", "HR"];
const Values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const deckDOM = document.getElementById("deck");
const handsDOM = document.getElementById("hands");
const buttonAddDeck = document.getElementById("addDeck");
const buttonReset = document.getElementById("reset");
const buttonDeal = document.getElementById("dealHand");
const buttonPairs = document.getElementById("checkPairs");
const messageDOM = document.getElementById("message");

buttonAddDeck.addEventListener("click", addDeck);
buttonDeal.addEventListener("click", e => drawHand());
buttonReset.addEventListener("click", reset);
message("Whenever you are ready");