// Koda ett program som loopar igenom arrayen authors
// och skriver ut all info på sidan. Se bild.
// Du måste använda for-of och for-in loopar för att lösa detta.
// Tänk dig att det hade varit 1000 författare istället för tre. Du
// kan inte fixa varje rad "manuellt".

const authors = [
  {
    name: "J. Winterstorm",
    language: "English",
    book: "The Cherry"
  },
  {
    name: "A. Ljuskrona",
    language: "Swedish",
    book: "November Är Här",
    city: "Malmö"
  },
  {
    name: "A. Dumas",
    language: "French",
    books: "The Empire Strikes the Mosqueteers",
    age: 34,
  },
];

const main = document.querySelector("main");

for (let author of authors) {
  const div = document.createElement("div");
  div.classList.add("author");
  main.appendChild(div);
  for (let key in author) {
    const p = document.createElement("p");
    p.classList.add("infoLine");
    p.innerHTML = `${key}: <span class="value">${author[key]}</span>`;
    div.appendChild(p);
  }
}
