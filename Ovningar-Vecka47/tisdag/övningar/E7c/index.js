/*
Koda en sida som den du ser på bilden.
Namn med tre bokstäver ska använda första färgen i arrayen.
Namn med fyra bokstäver ska använda andra färgen i arrayen.
osv.

Du måste använda koden som redan finns på plats.
HTML- och CSS-filerna får inte ändras.
*/

function separatedLetters(namn) {
  let createNamesDiv = document.createElement("div");
  createNamesDiv.classList.add("name");
  Main.appendChild(createNamesDiv);

  for (j=0; j<namn.length; j++) {
    if (namn.length === 3) {
      createNamesDiv.innerHTML += `<div style="background-color: ${colors[namn.length-3]};">${namn[j]}</div>`;
    } else if (namn.length === 4) {
      createNamesDiv.innerHTML += `<div style="background-color: ${colors[namn.length-3]};">${namn[j]}</div>`;
    } else if (namn.length === 5) {
      createNamesDiv.innerHTML += `<div style="background-color: ${colors[namn.length-3]};">${namn[j]}</div>`;
    } else if (namn.length === 6) {
      createNamesDiv.innerHTML += `<div style="background-color: ${colors[namn.length-3]};">${namn[j]}</div>`;
    } else if (namn.length === 7) {
      createNamesDiv.innerHTML += `<div style="background-color: ${colors[namn.length-3]};">${namn[j]}</div>`;
    } else if (namn.length === 8) {
      createNamesDiv.innerHTML += `<div style="background-color: ${colors[namn.length-3]};">${namn[j]}</div>`;
    } else if (namn.length === 9) {
      createNamesDiv.innerHTML += `<div style="background-color: ${colors[namn.length-3]};">${namn[j]}</div>`;
    } else {
      createNamesDiv.innerHTML += `<div>${namn[j]}</div>`;
    }
  }

  return createNamesDiv;
}


const names = [
  "Alina", "Anahita", "Anna", "Anoli", "Artin", "Asir", "Elias", "Elin", "Ellen", "Emira", "Felicia", "Gustaf", "Henrik", "Jennifer", "Jonah", "Josefin", "Judy", "Katarina", "Klara", "Leith", "Linus", "Maja", "Markus", "Medina", "Michelle", "Moa", "Monique", "Neo", "Omaimaa", "Oscar", "Peggy", "Philip", "Rawad", "Rebecca", "Robin", "Sala", "Sara", "Sebastian", "Sigge", "Simon", "Theodor", "Tiffany", "Tilde", "Yehor", "Zahra", "Zoie"
];

const colors = ["#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF", "#D4BAFF", "#FFBAE1"];

const Main = document.querySelector("main");

for (let name of names) {
  Main.append(separatedLetters(name));
}