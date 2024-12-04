
Använd funktionen från förra övningen.
En lek består av en array av objekt {value, color}, där varje objekt representerar ett kort.
En komplett lek har 52 kort.
Tar man bort några kort från en (komplett eller inkomplett) lek så får man en inkomplett lek.

1) Koda en funktion som tar emot två argument:
   - nCards (ett heltal)
   - inDeck (en lek (komplett eller inkomplett)
   och returnerar ett objekt med två egenskaper: hand, outDeck.
   - hand: en array av nCards kort från inDeck
           OBS: Notera att samma kort kan inte förekomma två ggr i handen.
   - outDeck: en array av kort (korten som fanns i inDeck minus korten som finns i hand)

(Beskrivningen ovan kanske låter lite konstigt, men det är bara ett försök att formalisera 
 det som händer när man delar ut kort från en lek).


2) Koda en funktion som tar emot en hand (arrayen med korten) och visar den (korten) på webbsidan.
Du får bestämma hur varje kort ska visas på sidan, men det ska vara någorluna designad.
Kortet ska åtminstone visa en ikon med kortets färg.

