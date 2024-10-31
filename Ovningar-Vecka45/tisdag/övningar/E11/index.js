/*
Koden här ser för hemskt ut.
Man ska helst inte namnge nycklar som jag har gjort här.
Det är bara för att ni ska öva med en något komplex datastruktur.

Kolla på koden och försök att svara på ALLA frågor. Skriv ner svaren på en bit papper.
Sen kan du köra koden (ladda html-filen på webbservern) och kontrollera om du svarade rätt.
Om du inte svarade rätt, försök att förtå varför svaret blev som det blev.
Fråga gärna assisstenterna eller läraren om något är oklart.
*/


const konstant1 = {
  key1: ["0", "1", 2, 6],
  key2: {
    key1: 1,
    key2: 5,
    key3: { key1: 1, key2: 2, key3: 3},
    key4: [1, 2, 2, 3],
  },
};

const konstant2 = [
  { key1: 8, key2: 0 },
  { key1: [ 4, 5, 6 ], key2: [2, 3, 4 ]},
];


// Vad kommer att loggas på konsolen?
console.log(konstant2[konstant2[0].key2].key1);

// Vad kommer att loggas på konsolen?
console.log(konstant1.key1[konstant1.key2.key4[1]]);

// Vad kommer att loggas på konsolen?
console.log(konstant2[konstant1.key2.key1].key1[1] + konstant1.key1[3]);

// Vad kommer att loggas på konsolen?
console.log(konstant1.key1[0] + konstant1.key1[0+1]);

// Vad kommer att loggas på konsolen?
console.log(konstant2[0].key1 + konstant2[3-2].key1[0]);