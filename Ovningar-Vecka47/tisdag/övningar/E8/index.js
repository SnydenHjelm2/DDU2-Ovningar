/*

Följ dessa steg:
1) Koda en funktion som tar emot två strängar och returnerar den längsta av båda
2) Koda en funktion som tar emot en array av strängar och returnerar
   en siffra, där siffran är hur många tecken den längsta strängen har.
   Du måste använda funktionen du kodade i 1)

Notera att du vet inte i förväg hur många element det finns i
arrayen. Jag har inkluderat två arrayer nedan som du kan använda
för att testa din funktion. Men funnktionen ska kunna fungera för
vilken array som helst.

I övningen ingår det att be coPilot om en annan array av strängar
som du kan testa din funktion med.
Jag använde denna prompt:
a js array of 21 strings where all the strings contain two to four words in swedish, as in "stor grön bil" or "fin underbar utsikt"

*/

const array1 = [
  "stor grön bil", "fin underbar utsikt", "liten röd stuga", "blå himmel", "vacker solnedgång",
  "hög byggnad", "snabb cykel", "mjuk kudde", "varm kopp te", "kall vinterdag",
  "lång promenad", "god mat", "söt kattunge", "glad hund", "tyst bibliotek",
  "gammal bok", "ny dator", "stor trädgård", "liten sjö", "hög musik", "mjuk filt"
];

const array2 = [
  "vacker blommande trädgård", "klarblå sjö", "mysig liten stuga", "hög bergstopp", "lugn skogspromenad",
  "varm sommardag", "kall vinterkväll", "stor vit båt", "snabb röd bil", "fin gammal bro",
  "ny modern byggnad", "söt liten valp", "glad lekande barn", "mjuk varm filt", "god doftande mat",
  "liten grön park", "stor blå himmel", "vacker soluppgång", "tyst lugn kväll", "hög klar stjärnhimmel",
  "mjuk bekväm soffa", "varm kopp kaffe", "kall frisk luft", "lång skön semester", "fin gammal stad",
  "ny spännande bok", "stor grön äng", "liten mysig café"
];
