/*
Koda en sida som den du ser på bilden.
Du måste använda koden som redan finns på plats.
HTML- och CSS-filerna får inte ändras.
*/

function separatedLetters(namn) {
    let createNamesDiv = document.createElement("div");
    createNamesDiv.classList.add("name");
    Main.appendChild(createNamesDiv);

    for (j=0; j<namn.length; j++) {
      createNamesDiv.innerHTML += `<div>${namn[j]}</div>`;
    }

    return createNamesDiv;
  }



const names = [
  "Alina", "Anahita", "Anna", "Anoli", "Artin", "Asir", "Elias", "Elin", "Ellen", "Emira", "Felicia", "Gustaf", "Henrik", "Jennifer", "Jonah", "Josefin", "Judy", "Katarina", "Klara", "Leith", "Linus", "Maja", "Markus", "Medina", "Michelle", "Moa", "Monique", "Neo", "Omaimaa", "Oscar", "Peggy", "Philip", "Rawad", "Rebecca", "Robin", "Sala", "Sara", "Sebastian", "Sigge", "Simon", "Theodor", "Tiffany", "Tilde", "Yehor", "Zahra", "Zoie"
];

const Main = document.querySelector("main");

for (let name of names) {
  Main.append(separatedLetters(name));
}
