// Kolla på koden nedan.
// Kolla också på kommentarerna som hjälper dig placera koden
// som du ska skriva i denna övning.

// Kolla på videon för att se vad du ska koda.
// Idén är mycket lik 5a, men:
// 1) Bindesträcken och text#1 har tagits bort. 
//    Nu ska bara användarens text visas
// 2) Det finns en extra knapp, som förklaras nedan

// En del av raderna nedan skapar en knapp. 

// När användaren klickar på knappen så ska texterna som 
// finns på skärmen byta plats. Den som var på första 
// raden ska hamna på andra raden, den som fanns på andra ska hamna
// på tredje raden och den som fanns på tredje ska hamna på första raden.
// Du ska skriva koden som fixar detta.
// Koden ska skrivas där det står: HÄR MÅSTE DU SKRIVA KOD

// Användaren kan klicka på knappen så många gånger hen vill, och
// vid varje klick så ska texterna byta plats enligt ovan.

// Man brukar starta koden med konstanterna som behövs.
const font = "25px Georgia";

// Här ska du skriva koden som formaterar body (eller wrapper, om du skapar ett sådant)
// och som gör att texterna och knappen centreras.


// Här skriver du koden som ber användaren om tre texter,
// skapar och formaterar divarna för att visa texten på skärmen.


// Den här koden skapar och formaterar en knapp.
const button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "Byt plats!";
button.style.font = font;
button.style.margin = "25px 0";

// Raderna nedan gör så att viss kod körs när användaren klickar på knappen
button.addEventListener("click", clickHandler)
function clickHandler () {

  // HÄR MÅSTE DU SKRIVA KOD!
  // Skriva kodraderna som körs när användaren klickar på knappen och som gör
  // att divarna får ny text.
  // Det går bra att skapa så många nya rader som du behöver.
  // Indentera ett steg till höger, eftersom dessa rader ingår i en s.k. funktion.
  // Notera hur dessa kommentarer är indenterade.
  // Vi kommer att prata mycket mer om funktioner i kursen.
  

  // Koden som körs när användaren klickar på knappen måste finnas
  // innanför måsvingarna.
}
