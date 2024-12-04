function getDeck () {
  const deck = [];
  const colors = ["clubs", "diamonds", "spades", "hearts"];
  for (let color of colors) {
    for (let value = 1; value <= 13; value++) {
      deck.push({
        value: value,
        color: color,
      });
    }
  }
  return deck;
}
