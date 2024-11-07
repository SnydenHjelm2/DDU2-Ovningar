// Koda ett program som skapar en sida som den som visas på video.
// - Den frågar efter en siffra
// - Den skriver ut alla siffror i ordningen inne i <main> med en <br>-tagg
//   mellan varje siffra

// Notera att det finns en index.css men den är inte länkad från
// index.html. Du måste skapa link-elementet från JS.
// Kom ihåg att link-element ingår i head-elementet.
var link = document.createElement("link");
link.rel = "stylesheet";
link.href = "index.css";
document.head.appendChild(link);

var main = document.querySelector("main");
var userInput = prompt("Enter Number");
userInput = parseInt(userInput);
console.log(userInput)

if (isNaN(userInput)) {
    let errorPara = document.createElement("p");
    errorPara.textContent = "You did not enter a number! Refresh and try again!"
    main.appendChild(errorPara);
} else {
    for (i=0; i < userInput; i++) {
        let numberPara = document.createElement("p");
        numberPara.textContent = i + 1
        main.appendChild(numberPara);
    }
}
