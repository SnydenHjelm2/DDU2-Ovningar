// Skriv ett program som frågar efter en text (prompt)
// Om texten startar med "A" (notera versal) så ska det 
// loggas på konsolen "Texten startar med A".
// Annars ska det loggas "Texten startar inte med A".

var userInput = prompt("Enter a Word or Sentance");

if (userInput[0] === "A") {
    console.log("Texten startar med ett A");
} else {
    console.log("Texten startar inte med A");
}