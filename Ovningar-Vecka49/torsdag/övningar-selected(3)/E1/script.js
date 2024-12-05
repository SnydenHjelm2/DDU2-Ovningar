let randomNum = Math.floor(Math.random() * 5) + 1;
console.log(randomNum)

while(true) {
    let userInput = prompt("number pls (1-5)");

    if(parseInt(userInput) === randomNum) {  
        break;
    } else {
        continue;
    }
}

console.log(`Bra jobbat! Siffran var ${randomNum}`);