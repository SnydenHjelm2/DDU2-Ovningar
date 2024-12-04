function createCards() {
    let deckOfCards = [];
    let colors = ["clubs", "diamonds", "spades", "hearts"];
    
    for (let color of colors) {
        for (i=1; i<=13; i++) {
            let obj = {
                valueOfCard: i,
                color: color
            }
            deckOfCards.push(obj);
        }
    }

    return deckOfCards;
}

function getHand(nCards, deck) {
    let hand = [];
    let deckAfterHand = [];

    for (i=0; i<nCards; i++) {
        let num = Math.floor(Math.random() * deck.length);
        hand.push(deck[num]);
        deck.splice(num, 1);
    }
    deckAfterHand.push(deck);
    let obj = {
        hand: hand,
        outDeck: deckAfterHand
    }

    return obj;
}

function displayCards(hand) {
    for (let card of hand) {
        let displayCard = document.createElement("div");
        displayCard.classList.add("card");
        main.appendChild(displayCard);

        if (card.valueOfCard === 13) {
            displayCard.innerHTML = `<h2>K</h2><img src="../E3b/images/${card.color}.png">`;
            if(card.color === "diamonds" || card.color === "hearts") {
                displayCard.classList.add("red");
            }
        } else if (card.valueOfCard === 12) {
            displayCard.innerHTML = `<h2>Q</h2><img src="../E3b/images/${card.color}.png">`;
            if(card.color === "diamonds" || card.color === "hearts") {
                displayCard.classList.add("red");
            }
        } else if (card.valueOfCard === 11) {
            displayCard.innerHTML = `<h2>J</h2><img src="../E3b/images/${card.color}.png">`;
            if(card.color === "diamonds" || card.color === "hearts") {
                displayCard.classList.add("red");
            }
        } else if (card.valueOfCard === 1) {
            displayCard.innerHTML = `<h2>A</h2><img src="../E3b/images/${card.color}.png">`;
            if(card.color === "diamonds" || card.color === "hearts") {
                displayCard.classList.add("red");
            }
        } else {
            displayCard.innerHTML = `<h2>${card.valueOfCard}</h2><img src="../E3b/images/${card.color}.png">`;
            if(card.color === "diamonds" || card.color === "hearts") {
                displayCard.classList.add("red");
            }
        }
    }
}

function hasPair(hand) {
    for (let card of hand) {
        for (let card2 of hand) {
            if (card.valueOfCard === card2.valueOfCard) {
                if(card.color === card2.color) {
                    continue;
                } else {
                    return true;
                }
            }
        }
    }

    return false;
}

const main = document.querySelector("main");
let makeHand = getHand(5, createCards());
let aHand = makeHand.hand;
console.log(aHand);