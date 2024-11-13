// Skriv ett program som frågar efter en siffra (prompt)
// Om siffran är delbar med 2 så ska det skrivas i <main>:
//    "siffran X är delbar med 2" (där X är siffran som användaren angav)
// Om siffran är delbar med 3 så ska det skrivas i <main>:
//    "siffran X är delbar med 3" (där X är siffran som användaren angav)
// Om siffran är delbar med 4 så ska det skrivas i <main>:
//    "siffran X är delbar med 4" (där X är siffran som användaren angav)

// Notera att det finns en del siffror som är delbara med 2, 3 och 4, och då
// måste alla texter komma på webbsidan.
// Se videon.

var userInput = prompt("Number please!");
userInput = parseInt(userInput);

if (isNaN(userInput)) {
    document.body.innerHTML += `<p>You did not enter a number, try again!</p>`;
} else {
    if (userInput % 2 === 0) {
        document.body.innerHTML += `<p>${userInput} är delbart med 2</p>`;
        if (userInput % 3 === 0) {
            document.body.innerHTML += `<p>${userInput} är delbart med 3</p>`;
            if (userInput % 4 === 0) {
                document.body.innerHTML += `<p>${userInput} är delbart med 4</p>`;
            }
        } else if (userInput % 4 === 0) {
            document.body.innerHTML += `<p>${userInput} är delbart med 4</p>`;
        }
    } else if (userInput % 3 === 0) {
        document.body.innerHTML += `<p>${userInput} är delbart med 3</p>`;
        if (userInput % 4 === 0) {
            document.body.innerHTML += `<p>${userInput} är delbart med 4</p>`;
        }
    } else if (userInput % 4 === 0) {
        document.body.innerHTML += `<p>${userInput} är delbart med 4</p>`;
    } else {
        document.body.innerHTML += `<p>${userInput} är inte delbart med 2, 3 eller 4</p>`;
    }
}