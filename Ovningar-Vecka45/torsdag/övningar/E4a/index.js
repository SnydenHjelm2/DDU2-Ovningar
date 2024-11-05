// Med hjälp av prompt ska du be besökaren om en text.
// Den ska sedan visas mitt på skärmen, centrerad både horisontellt och vertikalt,
// som det visas på bilden (image).
// Typsnittet ska vara Georgia med storlek 50px.
// Du får inte formatera elementen annat än via JS

// Lös det utan att använda innerHTML
var body = document.querySelector("body");
var h1 = document.createElement("h1");
document.body.appendChild(h1);
var header = document.querySelector("h1");

var userInput = prompt("Enter a word!");

body.style.height = "100vh";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";

header.style.fontSize = "50px";
header.style.fontFamily = "Georgia";
header.textContent = userInput