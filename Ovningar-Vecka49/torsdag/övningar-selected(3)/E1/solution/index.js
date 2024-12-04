
function randomNumber () {
  return Math.floor(1 + 5 * Math.random());
}

const number = randomNumber();

let found = false;

while (!found) {
  let guess = prompt("En siffra mellan 1 och 5?");
  if (guess == number) {
    found = true;
  }
}

console.log("Bra jobbat!, siffran var " + number);