"use strict";

// Utgå från arrayerna nedan.
// Koda ett program som resulterar i en webbsida som den som visas på bilden.

const names = ["Janis", "Nina", "Jimi"];
const surnames = ["Joplin", "Simone", "Hendrix"];


for (let i = 0; i < names.length; i++) {
    document.body.innerHTML += `<p>${names[i]} ${surnames[i]}</p>`;
}