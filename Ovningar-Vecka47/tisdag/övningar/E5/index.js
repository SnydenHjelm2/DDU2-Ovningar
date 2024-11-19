/*

Studera koden nedan.
Övningen går ut på att deklarera funktionen f1
så att koden fungerar som den ska.

*/
function f1(word) {
   if (word[0].toLowerCase() === "a") {
      return true;
   } else {
      return false;
   }
}


let a = prompt("A word, please");
if (f1(a)) {
   console.log(`The word ${a} starts with the letter A`);
} else {
   console.log(`The word ${a} does not start with the letter A`);
}