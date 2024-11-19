// Egentligen saknar koden nedan mening helt och hållet.
// Det är något helt abstrakt som jag har hittat på för att hjälpa dig
// förstå grunden i hur funktioner fungerar.
// Den hjälper INTE förstå varför funktioner kan vara intressanta
// eller vad man kan använda funktioner till.
// Det kommer snart! Bear with me so far!

// Vad kommer det att hända när vi kör programmet nedan?
// 1) Om användaren skriver "yoman" på prompten
// 2) Om användaren skriver "19" på prompten
// Försök att lista ut det och sen kontrollera det genom att köra koden på en webbläsare

function badFunctionName1 (n) {
  console.log("WDU1");
  if (n > 10) {
    console.log("too high");
  } else if (n < 8) {
    console.log("Too low");    
  } else {
    console.log("Perfect!");
  }
  console.log("WDU2");
}

console.log("WDU3");
badFunctionName1(5);
//WDU3, WDU1, Too low, WDU2
let a = prompt("Hi there");
badFunctionName1(a);
//OM "yoman" - WDU3, WDU1, Perfect!, WDU2, WDU4
//OM 19 - Too high, WDU2, WDU4
console.log("WDU4");
