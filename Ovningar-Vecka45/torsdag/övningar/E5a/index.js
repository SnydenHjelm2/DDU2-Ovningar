// Med hjälp av tre olika prompts ska du be besökaren om tre texter.
// När användaren har skrivit in den sista texten, så ska alla tre texter visas 
// mitt på skärmen, centrerade både horisontellt och vertikalt.

// Notera att programmet lägger till bindesträck före och efter texten
// och info inom parentes om vilken text det handlar om. Se video.

// Typsnittet ska vara Georgia med storlek 25px.
// Du måste använda konstanten font för att formatera typsnittet.
// Du får inte formatera elementen annat än via JS

// Du måste lösa det på två sätt:
// 1) genom att använda template literals
// 2) genom att använda konkatenering av strängar

const font = "25px Georgia";

for (i=0; i<3; i++) {
    var create = document.createElement("h1")
    document.body.appendChild(create);
}

var body = document.querySelector("body");
var headers = document.querySelectorAll("h1");

var promt1 = prompt("Word 1");
var promt2 = prompt("Word 2");
var promt3 = prompt("Word 3");

headers[0].textContent = `- ${promt1} - (text 1)`;
headers[1].textContent = "- " + promt2 + " - (text 2)";
headers[2].textContent = `- ${promt3} - (text 3)`;

body.style.height = "100vh";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.flexDirection = "column";

for (i=0; i<headers.length; i++) {
    headers[i].style.font = font
    headers[i].style.margin = "0";
}