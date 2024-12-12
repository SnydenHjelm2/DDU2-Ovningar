I alla frågor kan du utgå från att konstanterna från databse.js är tillgängliga.


Fråga 1
  Koda en funktion getByName(string) som returnerar en array av skor vars namn innehåller string.

Fråga 2
  Koda en funktion getShoes(kind, country) som returnerar en array av skor som är av typen kind (slippers, boots eller sneakers) och från landet country.

Fråga 3
  Koda en funktion getMostExpensiveByKind(kind) som returnerar en sko, nämligen den som är dyrast av typen kind.

Fråga 4
  Koda en funktion getMostExpensiveAllKinds() som returnerar ett objekt med strukturen:
  {
    Slippers: sko-objekt,
    Boots: sko-objekt,
    Sneakers: sko-objekt
  }
  där varje egenskap har som värde skon som är dyrast av den typen.

Fråga 5
  Tänk dig att du har X kronor att spendera och att du vill köpa två par skor.
  Du vill att så lite pengar som möjligt blir över och bryr dig inte så mycket om skorna.
  Koda en funktion _getTwoPairs(X) som returnerar en array av objekt, där varje objekt har strukturen:
  {
    shoe1: sko-objekt,
    shoe2: sko-objekt,
  }
  Skorna i varje objekt ska vara olika och tillsammans kosta exakt X. Om det inte finns två par av skor som tillsammans kostar X ska funktionen returnera false.

  Påbyggnad
    Koda en funktion getTwoPairs(X) som använder _getTwoPairs för att hitta två olika par skor som tillsammans kostar exakt X.
    Om det inte finns två par skor som tillsammans kostar X ska funktionen leta efter två par skor som kostar X - 1.  
    Om det inte finns två par skor som tillsammans kostar X ska funktionen leta efter två par skor som kostar X - 2.  
    osv tills den hittar åtminstone två olika par skor som kostar så nära X som möjligt, men alltid mindre än X.

