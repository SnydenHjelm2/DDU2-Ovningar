// Koda ett program som ber om en sträng (prompt)
// och sedan skriver den som det visas på videon.

// Notera att dessa tecken (gemenene å, ä och ö) har en annan
// backgrundsfärg.

// Tips: Kolla på videon 01. Strängar (från tisdag andra veckan i kursen)
//       för att komma ihåg hur man kommer åt tecknen i en sträng, och hur man
//       vet hur många tecken som finns i en given sträng (mao. hur lång den är).

const userInput = prompt("A string please");
const main = document.querySelector("main");

for (i=0; i<userInput.length; i++) {
    var klass = "";
    if (userInput[i] === "å" || userInput[i] === "ä" || userInput[i] === "ö") {
        klass = "swedish_chars";
    }
    main.innerHTML += `<p class="${klass}">${userInput[i]}</p>`;
}