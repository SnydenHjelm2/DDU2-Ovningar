
const c1 = "blue";
const c2 = "#AA0000"; // red
const c3 = "rgb(0,255,0)"; // green
const c4 = "hotpink";
const n1 = "20px";

/* Använd konstanterna ovan för att:
    - A-lådan ska fyllas med blå färg
    - D-lådan ska fyllas med röd färg
 */
document.querySelector("#A").style.backgroundColor = c1
document.querySelector("#D").style.backgroundColor = c2


/* Använd konstanterna ovan för att:
    - kanten (border) av lådorna i första raden ska bli grön
    - kanten (border) av lådorna i andra kolumnen ska ha en radie på 20px
 */
var row1 = document.querySelectorAll(".rad1")
for (i=0; i < row1.length; i++) {
    row1[i].style.borderColor = c3
}

var col2 = document.querySelectorAll(".col2")
for (i=0; i < col2.length; i++) {
    col2[i].style.borderRadius = n1
}
