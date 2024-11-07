"use strict";

// Utgå från arrayerna nedan.
// Koda ett program som resulterar i en webbsida som den som visas på bilden.

const names = ["Janis", "Nina", "Jimi"];
const surnames = ["Joplin", "Simone", "Hendrix"];

document.body.innerHTML = "<p></p><p></p><p></p>";
var paras = document.querySelectorAll("p");

for (let i = 0; i < 3; i++) {
    paras[i].textContent = `${names[i]} ${surnames[i]}`;
}