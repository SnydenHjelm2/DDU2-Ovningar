// Skriv ett program som ber om en sträng och 
// loggar på konsolen hur många "a"-tecken (gemene)
// som finns i strängen.

var userInput = prompt("String please");
var count = 0;

for (i=0; i<userInput.length; i++) {
    if (userInput[i].toLowerCase() === "a") {
        count++;
    } else {
        continue;
    }
}

console.log(count);