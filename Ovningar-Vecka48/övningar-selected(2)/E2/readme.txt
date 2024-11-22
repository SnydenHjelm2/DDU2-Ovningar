/*

Du har fått hela texten för Strindbergs "Röda rummet" i ett HTML-dokument.
  Ett annat dokument har endast de två första kapitel (roda_rummet_short.html)
  **Använd gärna det när du kodar lösningen, det går snabbare då.**

Du ska genomföra en enkel analys av texten (exklusive boktitel och kapiteltitel):
- Hur många ord finns det i boken?
- Vilka är de X längsta orden i boken?
- Vilka är de X orden som används mest i boken?
  - Hur många gånger används vart och ett av dessa ord (antal och % av totala ord)
- Förekommer kvinnor eller män mest?
- Skapa en array av alla ord, utan repetitioner
- Lista alla ord med n bokstäver
- Lista de n längsta orden med x bokstäver
- Vilket ord förekommer mest efter ett givet ord?


Förberedelser: Se tips1.txt

ANALYS-METODER:
  countWords (array)    

  longestWords (array, n)
    se tips2

  mostUsedWords (array, n)
    se tips3
  
  womenVSmen (array)
    se tips4

  listUnique (array)
    se tips5

  listUniqueOfLength (array, n)
    se tips6

  listLongetsofLength (array, n, x)
    se tips7

  mostCommonAfter (text, word)
    Notera:
      att versaler inte ändrar ett ord (exvis är "Det" och "det" samma ord)
      att en punkt (och andra tecken) skiljer två ord.
        Exempel:  om vi har texten "Vi kom aldrig fram. Vädret var..." så anses det inte att
                  "Vädret" kommer efter "fram", eftersom det finns en punkt mellan dem.
                  Detsamma gäller komma och andra liknande tecken.
                  Därför måste man ge hela texten som argument (det som man får efter steg 1 i 
                  förberedelser) och inte arrayen man får efter steg 2 i förberedelser. I
                  arrayen finns det ju ingen information om punkter.


*/