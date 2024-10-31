/*
Kolla på koden och försök att svara på ALLA frågor. Skriv ner svaren på en bit papper.
Sen kan du köra koden (ladda html-filen på webbservern) och kontrollera om du svarade rätt.
Om du inte svarade rätt, försök att förtå varför svaret blev som det blev.
Fråga gärna assisstenterna eller läraren om något är oklart.
*/

const a1 = [23, 2, 65, 1, 63, 1, 5];
let a2 = [];
let a3 = [];

// Vad kommer att loggas på konsolen?
console.log(a1[23]);

// Vad kommer att loggas på konsolen?
console.log(a1[2]);

// Vad kommer att loggas på konsolen?
a2.push(a1[2]);
console.log(a2[0]);

// Vad kommer att loggas på konsolen?
a3[0] = a2[0];
console.log(a3[0]);

// Vad kommer att loggas på konsolen?
a1[2] = 42;
console.log(a2[0]);

// Vad kommer att loggas på konsolen?
a1.splice(1, 2);
console.log(a1[3]);

// Vad kommer att loggas på konsolen?
console.log(a1.length);

// Lurigt!! Viktigt att du förstår vad som händer här
// Vad kommer att loggas på konsolen?
a3.push(a1);
console.log(a3[2]);
console.log(a3.length);

