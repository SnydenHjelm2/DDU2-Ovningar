function createCards() {
    let deckOfCards = [];
    let colors = ["clubs", "diamonds", "spades", "hearts"];
    
    for (let color of colors) {
        for (i=1; i<=13; i++) {
            let obj = {
                value: i,
                color: color
            }
            deckOfCards.push(obj);
        }
    }

    return deckOfCards;
}