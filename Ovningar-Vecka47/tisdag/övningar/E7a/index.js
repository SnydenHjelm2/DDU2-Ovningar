/*
Koda en sida som gör det du ser på videon.
Du måste använda koden som redan finns på plats.
HTML- och CSS-filerna får inte ändras.
*/
function loudSpeaker(msg, col) {
    var h1 = document.querySelector("h1");
    for (i=0; i<msg.length; i++) {
        let createDiv = document.createElement("div");
        createDiv.textContent = msg[i];
        createDiv.style.backgroundColor = col;
        h1.appendChild(createDiv);
    }
}


let message = prompt("What is your message?");
let color = prompt("Which color?");
loudSpeaker(message, color);
