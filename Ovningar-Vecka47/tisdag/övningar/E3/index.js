// Egentligen saknar koden nedan mening helt och hållet.
// Det är något helt abstrakt som jag har hittat på för att hjälpa dig
// förstå grunden i hur funktioner fungerar.
// Den hjälper INTE förstå varför funktioner kan vara intressanta
// eller vad man kan använda funktioner till.
// Det kommer snart! Bear with me so far!

// Vad kommer det att loggas på konsolen?

function f (a) {
  return a + 1;
}

for (let i = 0; i < f(1); i = f(i)) {
  console.log(i);
  //0, 1
}

for (let i = 0; i < f(1); i = f(i)) {
  console.log(f(i));
  //1, 2
}

// Notera att jag har också ändrat villkor-delen i for-loopen
for (let i = 0; i < f(i); i++) {
  console.log(i);
  //infinite loop, kommer logga värdet av i, i all oändlighet
  break;
}
