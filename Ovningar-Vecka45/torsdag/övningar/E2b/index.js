// Med hjälp endast av JS skapa en sida som den i bilden
// Använd innerHTML för att skapa de nya elementen

var body = document.querySelector("body")
body.innerHTML = "<main><div></div><div></div><div></div><div></div></main>";

var main = document.querySelector("main");
var divs = document.querySelectorAll("div");

body.style.height = "100vh";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";

main.style.height = "500px";
main.style.width = "500px";
main.style.display = "grid";
main.style.gridTemplateColumns = "repeat(2, 1fr)";
main.style.gap = "5px";

for (i=0; i<divs.length; i++) {
    if (i === 0) {
        divs[i].style.backgroundColor = "red";
    } else if (i === 1) {
        divs[i].style.backgroundColor = "blue";
    } else if (i === 2) {
        divs[i].style.backgroundColor = "green";
    } else {
        divs[i].style.backgroundColor = "yellow";
    }
}