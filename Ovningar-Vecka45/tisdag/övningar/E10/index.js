/*
Kolla på koden och försök att svara på ALLA frågor. Skriv ner svaren på en bit papper.
Sen kan du köra koden (ladda html-filen på webbservern) och kontrollera om du svarade rätt.
Om du inte svarade rätt, försök att förtå varför svaret blev som det blev.
Fråga gärna assisstenterna eller läraren om något är oklart.
*/

let s1 = "Malmö Universitet";
let s2;
let i1 = 0;
let i2 = s1.length;

// Vad kommer att loggas på konsolen?
i1 += 1;
i1 = i1 + 1;
console.log(s1[i1]);
//l
console.log(s1[i1++]);
//l
console.log(s1[++i1]);
//ö


// Vad kommer att loggas på konsolen?
s2 = s1[0] + s1[i2-1];
console.log(s2);
//Mt

// Uppdatera värdet i variabeln i1 så att instruktionen nedan loggar "U" på konsolen.
i1 += 2
console.log(s1[i1]);
//ska logga "U"
// Vad kommer att loggas på konsolen?
s1 = "Europa";
console.log(s2[0]);
//M
// Tilldela korrekt värde till s2 så att instruktionen nedan loggar "E" på konsolen.
s2 = s1
console.log(s2[0]);


let a = euCountries[4];
