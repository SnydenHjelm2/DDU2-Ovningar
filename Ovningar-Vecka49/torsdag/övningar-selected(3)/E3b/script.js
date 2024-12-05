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

    for (i=0; i<nCards; i++) {
        let num = Math.floor(Math.random() * deck.length);
        hand.push(deck[num]);
        deck.splice(num, 1);
    }

    let obj = {
        hand: hand,
        outDeck: deck
    }

    return obj;
}

function displayCards(hand, where) {
    for (let card of hand) {
        let displayCard = document.createElement("div");
        displayCard.classList.add("card");
        where.appendChild(displayCard);

        if (card.valueOfCard === 13) {
            displayCard.innerHTML = `<h2>K</h2><img src="images/${card.color}.png">`;
            if(card.color === "diamonds" || card.color === "hearts") {
                displayCard.classList.add("red");
            }
        } else if (card.valueOfCard === 12) {
            displayCard.innerHTML = `<h2>Q</h2><img src="images/${card.color}.png">`;
            if(card.color === "diamonds" || card.color === "hearts") {
                displayCard.classList.add("red");
            }
        } else if (card.valueOfCard === 11) {
            displayCard.innerHTML = `<h2>J</h2><img src="images/${card.color}.png">`;
            if(card.color === "diamonds" || card.color === "hearts") {
                displayCard.classList.add("red");
            }
        } else if (card.valueOfCard === 1) {
            displayCard.innerHTML = `<h2>A</h2><img src="images/${card.color}.png">`;
            if(card.color === "diamonds" || card.color === "hearts") {
                displayCard.classList.add("red");
            }
        } else {
            displayCard.innerHTML = `<h2>${card.valueOfCard}</h2><img src="images/${card.color}.png">`;
            if(card.color === "diamonds" || card.color === "hearts") {
                displayCard.classList.add("red");
            }
        }
    }
}

const main = document.querySelector("main");
const hand2 = document.querySelector("#hand2");
const hand3 = document.querySelector("#hand3")
let deck = createCards();
let makeHand = getHand(5, deck);
console.log(makeHand);

let aHand = makeHand.hand;
console.log(aHand);
displayCards(aHand, main);

// let getNewHand = getHand(5, makeHand.outDeck);
// let newHand = getNewHand.hand;
// console.log(newHand);
// displayCards(newHand, hand2);

// let getThirdHand = getHand(5, getNewHand.outDeck);
// let thirdHand = getThirdHand.hand;
// console.log(thirdHand);
// displayCards(thirdHand, hand3);