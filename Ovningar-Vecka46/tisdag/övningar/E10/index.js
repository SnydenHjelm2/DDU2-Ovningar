// Koda ett program som skapar en sida som den som visas på videon.

// Notera att det finns en index.css som är redan länkad från index.html
// Studera den för att lista ut vilka element och klasser som behövs.
// Du får inte göra någon ändring i index.css

// Du måste använda konstanerna nedan i din kod

/*
Extra info RGB:

  RGB är ett färgsystem där färger definieras med tre värden: Röd (R), Grön (G) och Blå (B).
  Varje värde går från 0 till 255 och anger intensiteten för respektive färg.
  När färgerna kombineras i olika intensiteter kan de skapa över 16 miljoner färger (255 x 255 x 255).
  Till exempel:

      rgb(255, 0, 0) = Röd ("red" i CSS)
      rgb(0, 255, 0) = Grön ("green" i CSS)
      rgb(0, 0, 255) = Blå ("blue" i CSS)
      rgb(255, 255, 255) = Vit ("white" i CSS)
      rgb(0, 0, 0) = Svart ("black" i CSS)
      rgb(255, 165, 0) = Orange ("orange" i CSS)
      etc

  RGB används ofta för färger på skärmar eftersom skärmar bygger färger genom att blanda ljus.
*/

/*
Extra info attributet title:
  HTML-attributet title används för att ge extra information om ett element.
  När användaren hovrar över elementet visas innehållet i title som en liten tooltip.
  (Se videon)
*/

const main = document.querySelector("main");
const nRows = 255;
const nCols = 255;
