function createDeck() {
    let deck = [];
    let colors = ["clubs", "diamonds", "spades", "hearts"];

    for(let color of colors) {
        for (i=1; i<=13; i++) {
            let obj = {
                value: i,
                color: color
            }
            deck.push(obj);
        }
    }
    return deck;
}

function displayDeck (deck) {
    for (let card of deck) {
        let newCard = document.createElement("div");
        newCard.classList.add("card");
        deckDiv.appendChild(newCard);
        if (card.value === 13) {
            newCard.innerHTML = `<p>K</p><p>${card.color[0].toUpperCase()}`;
        } else if (card.value === 12) {
            newCard.innerHTML = `<p>Q</p><p>${card.color[0].toUpperCase()}`;
        } else if (card.value === 11) {
            newCard.innerHTML = `<p>J</p><p>${card.color[0].toUpperCase()}`;
        } else if (card.value === 1) {
            newCard.innerHTML = `<p>A</p><p>${card.color[0].toUpperCase()}`;
        } else {
            newCard.innerHTML = `<p>${card.value}</p><p>${card.color[0].toUpperCase()}`;
        }

        if (card.color === "diamonds" || card.color === "hearts") {
            newCard.classList.add("red-card");
        }
    }
}

function dealHandFunc(deck, numOfCards) {
    if (deck.length < numOfCards) {
        return false;
    }
    let hand = [];

    for (i=0; i<numOfCards; i++) {
        let randomNum = Math.floor(Math.random() * deck.length);
        hand.push(deck[randomNum]);
        deck.splice(randomNum, 1);
    }

    let obj = {
        hand: hand,
        restOfDeck: deck
    }
    return obj;
}

function displayHand(hand) {
    if (!hand) {
        message.textContent = "Not enough cards in deck";
        return false;
    }

    for (let card of hand) {
        let newCard = document.createElement("div");
        newCard.classList.add("card");
        handDiv.appendChild(newCard);
        if (card.value === 13) {
            newCard.innerHTML = `<p>K</p><p>${card.color[0].toUpperCase()}`;
        } else if (card.value === 12) {
            newCard.innerHTML = `<p>Q</p><p>${card.color[0].toUpperCase()}`;
        } else if (card.value === 11) {
            newCard.innerHTML = `<p>J</p><p>${card.color[0].toUpperCase()}`;
        } else if (card.value === 1) {
            newCard.innerHTML = `<p>A</p><p>${card.color[0].toUpperCase()}`;
        } else {
            newCard.innerHTML = `<p>${card.value}</p><p>${card.color[0].toUpperCase()}`;
        }

        if (card.color === "diamonds" || card.color === "hearts") {
            newCard.classList.add("red-card");
        }
    }
}

const deckDiv = document.querySelector("#deck");
const handDiv = document.querySelector("#hand");
const addDeck = document.querySelector("#addDeck");
const dealHand = document.querySelector("#dealHand");
const reset = document.querySelector("#reset");
const message = document.querySelector("#message");

addDeck.addEventListener("click", function() {
    let deck = createDeck();
    displayDeck(deck);
})

