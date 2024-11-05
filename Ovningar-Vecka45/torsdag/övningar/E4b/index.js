// Med hjälp av prompt ska du be besökaren om en text.
// Den ska sedan visas mitt på skärmen, centrerad både horisontellt och vertikalt,
// som det visas på bilden (image).
// Typsnittet ska vara Georgia med storlek 50px.
// Du får inte formatera elementen annat än via JS

// Lös det genom att använda innerHTML, alltså inte createElement.

var body = document.querySelector("body");
body.innerHTML = "<h1></h1>";
var h1 = document.querySelector("h1");

var userInput = prompt("Enter a word!")

body.style.height = "100vh";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";

h1.style.fontSize = "50px";
h1.style.fontFamily = "Georgia";
h1.textContent = userInput