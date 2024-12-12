function randomInt (min, max) {
  return min + Math.floor((max - min + 1) * Math.random());
}

function twoDiceUntilSix() {
  let diceThrows = [];

  while (true) {
    let dice1 = randomInt(1, 6);
    let dice2 = randomInt(1, 6);
    let obj = {
      dice1: dice1,
      dice2: dice2
    }
    diceThrows.push(obj);

    if (dice1 === 6 && dice2 === 6) {
      break;
    }
  }

  return diceThrows;
}

function twoDiceUntilSame() {
  let diceThrows = [];

  while (true) {
    let dice1 = randomInt(1, 6);
    let dice2 = randomInt(1, 6);
    let obj = {
      dice1: dice1,
      dice2: dice2
    }
    diceThrows.push(obj);

    if (dice1 === dice2) {
      break;
    }
  }

  return diceThrows;
}

function twoDiceUntilNeighbor() {
  let diceThrows = [];

  while (true) {
    let dice1 = randomInt(1, 100);
    let dice2 = randomInt(1, 100);
    let obj = {
      dice1: dice1,
      dice2: dice2
    }
    diceThrows.push(obj);

    if (dice1 + 5 === dice2) {
      break;
    }
  }

  return diceThrows;
}

console.log(twoDiceUntilSix());
console.log(twoDiceUntilSame());
console.log(twoDiceUntilNeighbor());