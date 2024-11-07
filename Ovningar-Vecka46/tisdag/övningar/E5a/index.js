"use strict";

// Studera koden nedan. Vad kommer det att loggas på konsolen?

let names = ["Jim", "Jimmy", "Jimi"];
let a = 10;
for (let name of names) {
  a--;
  console.log(a)
}

//Ingenting - då det inte finns någon console.log
//OM console.log(a) finns kommer 10, 9, 8 att loggas