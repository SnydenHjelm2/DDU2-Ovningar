// Skriv ett program som frågar efter en text (prompt)
// Om texten startar med "A" (notera versal) 
// eller med "B" eller med "C" så ska det loggas på
// konsolen "Texten startar med A" (eller B eller C, beroende på)
// Annars ska det loggas "Texten startar inte med A , B eller C".

var userInput = prompt("Enter a word or Sentance");

if (userInput[0] === "A") {
    console.log("Texten börjar med ett A");
} else if (userInput[0] === "B") {
    console.log("Texten börjar med ett B");
} else if (userInput[0] === "C") {
    console.log("Texten börjar med ett C");
} else {
    console.log("Texten börjar inte med ett A, B eller C");
}