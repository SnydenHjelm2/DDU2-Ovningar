/*

Eftersom detta med funktioner är helt nytt och denna är första funktionen du ska koda så
har jag löst övningen i videon. Hoppas den hjälper!

Skapa en funktion som tar emot ett argument och:
  1) Kontrollerar att argumentet har typen "siffra" (number på engelska)
     Detta har vi inte sett på viderona. När du ska lära dig något nytt i programmering:
      A) Fråga ChatGPT
      B) Kontrollera ChatGPTs svar på MDN eller stackoverflow
      c) Om det verkar stämma => förstå och använd!
    
  2) Om det var en siffra så ska funktionen logga på konsolen strängen
     "Målet är att bli en duktig utvecklare" lika många 
     gånger som argumentet (som ju är en siffra)

  3) Om det inte var en siffra så ska funktionen logga på konsolen strängen
     "Fel argument: Det måste vara en siffra"

Testa funktionen genom att anropa den med följande argument: 3, 42, "wdu"
Alltså anropa den en gång per argument.

Extra klurighet. Tanken med den är att hjälpa dig bli ännu mer
klar i huvudet över faktumet att det finns olika typer av värden.
  Testa funktionen genom att be användaren om en siffra med prompt och sen 
  anropa funktionen med användarens svar.
  Du kommer att stöta på problemet att prompt returnerar alltid en sträng, oavsett
  vad användaren skriver. Men jag som användare förväntar mig att, om jag skriver 4
  på prompten, så ska ju "Målet är att bli en duktig utvecklare" loggas fyra gånger.
  Hur åstadkommer vi det i koden?
*/