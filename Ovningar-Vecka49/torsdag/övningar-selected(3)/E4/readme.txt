Funktionen randomInt(min, max), som visades i videon 03, är korrekt rent matematiskt.

Men ibland blir man osäker på om man har tänkt rätt. Kodare brukar gilla att – istället för att helt lita på deras kunskaper inom matematik – helt enkelt bygga en kort program som testar funktionen.

Det är vad du ska göra i denna övning: Koda ett program som kontrollerar att funktionen randomInt(min, max) verkar fungera.

En utvecklare ställs ibland inför att lösa denna typ av problem. Det är bra att öva på det, men det kan vara svårt att komma på det helt på egen hand såhär i början av studierna. Det är helt ok om du inte lyckas komma på en lösning. Det är imponerande om du gör det.

Tänk gärna en stund på hur du skulle kunna tänkas göra det.
Sen kolla på ett lösningsförslag i pseudokod längst ner i denna fil.





















































Lösning (en av flera)
      Deklarera två variabler: max = -Infinity och min = Infinity.
      Kör en loop 1000 gånger.
      För varje iteration:
      1) Anropa randomInt(42, 56) för att få en random siffra mellan 42 och 56.
      2) Om random siffran är mindre än min, då ska min = random siffran
      3) Om random siffran är större än max, då ska max = random siffran
      Efter loopen: Logga min och max och kolla så att de är 42 och 56.
      OBS: Vi utgår såklart från att sannolikheten för att funktionen – på 1000 försök – inte skulle returerna alla värden mellan 42 och 56 är, i praktiken, noll.


