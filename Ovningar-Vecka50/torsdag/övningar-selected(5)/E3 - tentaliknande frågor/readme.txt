Fråga 1
  Koda en funktion checkTint(cards, tint) som tar emot:

    ** cards **
    En array av HTML-element där varje element har följande struktur:
    <div class="card">
      <div class="color">CB</div>
      <div class="value">Ace</div>
    </div>

      Möjliga colors: CB, DM, SP, HR
        CB och SP är svarta (klöver och spader)
        DM och HR är röda (ruter och hjärter)
      Möjliga values: Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K


    ** tint **
    En sträng som kan vara "red" eller "black"


  Funktionen ska returnera true om alla kort i arrayen har samma tint. False annars.
  Exempel:
  (bara två kort i exemplen, men funktionen ska fungera oavsett hur många kort den inkluderar)
  Om handen är [HR-Ace, DM-3] och tint "red" => true
  Om handen är [HR-Ace, SP-4] och tint "red" => false
  Om handen är [HR-Ace, DM-J] och tint "black" => false

  Om tint är vare sig "red" eller "black" ska funktionen returnera false.
  Om arrayen är tom ska den returnera false.


Fråga 2
  Ändra i den befintliga koden så att när användaren klickar på något av korten i handen så loggas följande:
    "is red: true/false" (beroende på om hela handen innehåller endast röda kort)
    "is black: true/false" (beroende på om hela handen innehåller endast svarta kort)
    etc
  

Fråga 3
  Ändra i den befintliga koden så att varje hand som delas ut ska ha följande bakgrundsfärg:
  - red, om handen endast innehåller röda kort
  - black, om handen endast innehåller svarta kort

  


