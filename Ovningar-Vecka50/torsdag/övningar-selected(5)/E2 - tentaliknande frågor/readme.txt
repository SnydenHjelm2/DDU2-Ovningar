Fråga 1
  Koda en funktion checkColor(cards, color) som tar emot:

    ** cards **
    En array av HTML-element där varje element har följande struktur:
    <div class="card">
      <div class="color">CB</div>
      <div class="value">Ace</div>
    </div>

      Möjliga colors: CB, DM, SP, HR
      Möjliga values: Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K


    ** color **
    En sträng som kan vara "CB", "DM", "SP" eller "HR"


  Funktionen ska returnera true om alla kort i arrayen har samma color. False annars.
  Exempel:
  (bara två kort i exemplen, men funktionen ska fungera oavsett hur många kort den inkluderar)
  Om handen är [HR-Ace, HR-3] och color "HR" => true
  Om handen är [HR-Ace, DM-Ace] och color "HR" => false
  Om handen är [SP-Ace, DM-J] och color "DM" => false

  Om color är vare sig "CB", "DM", "SP" eller "HR" ska funktionen returnera false.
  Om arrayen är tom ska den returnera false.

Fråga 2
  Ändra i den befintliga koden så att när användaren klickar på något av korten i handen så loggas följande:
    "is HR: true/false" (beroende på om hela handen innehåller endast hjärter)
    "is SP: true/false" (beroende på om hela handen innehåller endast spader)
    etc
  
Fråga 3
  Ändra i den befintliga koden så att varje hand som delas ut ska ha följande bakgrundsfärg:
  - crimson, om handen endast innehåller HR
  - indianred, om handen endast innehåller DM
  - navy, om handen endast innehåller SP
  - darkgreen, om handen endast innehåller CB

  