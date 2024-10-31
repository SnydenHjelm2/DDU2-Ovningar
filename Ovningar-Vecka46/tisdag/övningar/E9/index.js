// Koda ett program som loopar igenom alla egenskaper i author
// och skriver ut informationen på sidan. Se bild.
// Du måste använda en for-in loop för att lösa detta.
// Du kan inte fixa varje rad "manuellt".
// Kolla på index.css för att se vilka classer som behövs.

const author = {
    name: "J. Winterstorm",
    language: "English",
    book: "The Cherry"
  };

const main = document.querySelector("main");

for (let key in author) {
  const p = document.createElement("p");
  p.classList.add("infoLine");
  p.innerHTML = `${key}: <span class="value">${author[key]}</span>`;
  main.appendChild(p);
}
