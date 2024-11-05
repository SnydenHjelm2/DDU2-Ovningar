// Med hjälp endast av JS skapa en sida som den i bilden (image)
// Notera att HTML-elementen har redan skapats i HTML-filen
// Du behöver fixa färgerna och lite annat formatering (med JS).
// Du behöver också se till att <img> pekar på bildfilen i mappen media (också det med JS).
var body = document.querySelector("body")
var first_h1 = document.querySelector("#firstLine");
var second_h1 = document.querySelector("#secondLine");
var first_li = document.querySelectorAll(".first");
var last_li = document.querySelectorAll(".last");
var img = document.querySelector("img");
var main = document.querySelector("main");

body.style.textAlign = "center";

first_h1.style.color = "red";
first_h1.style.margin = "0";
second_h1.style.margin = "0";

for (i = 0; i < first_li.length; i++) {
    first_li[i].style.color = "green";
    first_li[i].style.listStyle = "none";
}

for (i = 0; i < last_li.length; i++) {
    last_li[i].style.color = "blue";
    last_li[i].style.listStyle = "none";
}

img.src = "media/heart.png";
img.style.height = "300px";