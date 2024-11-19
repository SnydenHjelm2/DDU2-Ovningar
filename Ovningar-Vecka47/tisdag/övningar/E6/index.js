/*

Skapa en funktion som tar emot följande argument:
  path: en sträng
  parent: en referens till ett HTML-element

Funktionen ska skapa ett img-element, placera det i elementet
som refereras till i argumentet parent och se till att img-elementet
visar bilden som finns på argumentet path.

Testa funktionen genom att lägga till en bildfil i mappen och, med
hjälp av din funktion, skapa ett <img> som visar den bilden.

*/
function showImg(path, parent) {
  parent = document.querySelector(parent);
  parent.innerHTML += `<img src="images/${path}">`;
}

var userPath = prompt("image name + file end");
var userParent = prompt("where to place it? (html tag)");

showImg(userPath, userParent);