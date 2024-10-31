
let t1 = "WDU";
let t2 = "IS";
let t3 = "DA";
let t4 = "SHIT!";

/*
Använd variablerna ovan för att få webbsidan att se ut:

    WDU      IS

    DA      SHIT!

(där du alltså fyller divarna med rätt innehåll)
*/
var a = document.querySelector("#A")
var b = document.querySelector("#B")
var c = document.querySelector("#C")
var d = document.querySelector("#D")

a.textContent = t1
b.textContent = t2
c.textContent = t3
d.textContent = t4 

/*

Se till (med hjälp av javascript, såklart) att griden ser istället ut såhär:

    WDU     IS      DA      SHIT!

*/
var container = document.querySelector("#container")
container.style.gridTemplateColumns = "repeat(4, 1fr)"