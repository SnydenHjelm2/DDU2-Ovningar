Kolla på videon. Koda en sida som den.
Notera vad som händer om man försöker dela en ny hand när det inte finns tillräckligt många kort i leken.
Notera röd och svart för olika kortfärger (CB = clubs, DM = diamonds, SP = spades, HR = hearts). 

Det finns en lösning.
Det finns också en guide till lösningen. Försök lösa övningen med hjälp av guiden.
Studera lösningen noggrann, eftersom kommande övningar bygger på den.
Notera särskilt:

1) Information sparas i HTML-koden
Information om vilka kort som finns kvar i leken, vilka som finns i varje hand, samt värde + färg av varje kort sparas allt i HTML-koden. Det finns inga variabler som sparar den informationen.
Exempel: Vi vet vilka kort som finns i leken (inte har delats ut) genom att hämta HTML-element med klassen .card som finns i #deck.

2) appendChild flyttar element
Vi är vana att skapa ett nytt element, som inte syns på sidan tillsvi appendar det till ett element som redan finns på sidan (sin förälder).

// Utgå från att elementet med id parentA finns på sidan.
const parentA = document.getElementById("parentA");
const domE = document.createElement("div");   // domE är inte på sidan ännu
parentA.appendChild(domE);                    // domE är nu på sidan

Men om elementet redan fanns på sidan (var barn till säg, #parentA)... vad händer när vi appendar det till ett annat element?

// Utgå från att elementet med id parentB finns på sidan.
const parentB = document.getElementById("parentB");
parentB.appendChild(domE);                    // domE flyttas från parentA till parentB
