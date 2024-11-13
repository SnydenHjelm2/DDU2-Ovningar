// Gör samma sak som i E4a men denna gång ska programmet
// kontrollera om siffran är delbar med alla siffror mellan 2 och 99

// Du måste använda en for-loop, du kan inte skriva en
// if-sats för varje siffra.

// Se videon.

var userInput = prompt("Number please");
userInput = parseInt(userInput);

if (isNaN(userInput)) {
    document.body.innerHTML += `<p>You did not enter a number, try again!</p>`;
} else {
    for (i=2; i<=99; i++) {
        if (userInput % i === 0) {
            document.body.innerHTML += `<p>${userInput} är delbart med ${i}</p>`;
        }
    }
}

