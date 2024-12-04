let randomNum = Math.floor(Math.random() * 6);
console.log(randomNum)

let guessedRight = false;

while(!guessedRight) {
    let userInput = prompt("number pls (1-5)");

    if(parseInt(userInput) === randomNum) {  
        guessedRight = true;
    } else {
        continue;
    }
}

console.log(`Bra jobbat! Siffran var ${randomNum}`);