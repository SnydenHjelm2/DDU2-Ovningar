// Med hjälp endast av JS skapa en sida som den i bilden
// Använd INTE innerHTML
var body = document.body;
var create_main = document.createElement("main");
body.appendChild(create_main);

var main = document.querySelector("main");
var create_div1 = document.createElement("div");
var create_div2 = document.createElement("div");
var create_div3 = document.createElement("div");
var create_div4 = document.createElement("div");
main.appendChild(create_div1);
main.appendChild(create_div2);
main.appendChild(create_div3);
main.appendChild(create_div4);

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
