// Vad kommer att loggas på konsolen

for (let i = 10; i > 0; i--) {
  if (i == 6) { continue; }
  if (i == 3) { break; }
  console.log(i);
}
//ingenting, finns ingen console.log
//OM console.log finns kommer 10, 9, 8, 7, 5, 4
for (let i = 23; i > 21; i--) {
  if (i == 3) { break; }
  if (i == 6) { continue; }
  console.log(i);
}
//ingenting, finns ingen console.log
//OM console.log finns kommer 23, 22 att loggas