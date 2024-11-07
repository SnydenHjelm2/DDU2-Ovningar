"use strict";

// Koda en for-loop vars kropp består endast av instruktionen console.log(counter);
// och som loggar följande siffror på konsolen:
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// OBS I videorna har vi använt variabelnamnet i istället för counter.
for (let i=1; i<=10; i++) {
    console.log(i);
}


// Samma som ovan men dessa siffror istället:
// 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
for (let i=10; i>=1; i--) {
    console.log(i)
}


// Samma som ovan men dessa siffror istället:
// 2, 4, 6, 8
for(let i = 2; i <= 8; i += 2) {
    console.log(i)
}


// Samma som ovan men dessa siffror istället:
// 42, 36, 30

for (let i = 42; i >= 30; i -= 6) {
    console.log(i)
}