// Koden som finns på plats måste användas.

const inputDOM = document.querySelector("input");
const resultsDOM = document.querySelector("#results");
inputDOM.value = "";

function arrayFilter (array, string) {
  // Denna funktion tar emot en array (som den i superheroes) och en sträng.
  // Den returnerar en array med alla superhjältar vars name eller realname
  // inkluderar string.
  // Versaler och gemener ska inte påverka resultatet.
  // Exempel:
  // Om string är "a" så ska alla superhjältar vars name eller realname inkluderar "a" eller "A"
  // visas.
  // Om string är "am" så ska alla superhjältar vars name eller realname inkluderar "am" eller "AM"
  // eller "aM" eller "Am" visas.

  // Om ingen superhjälte har string i sitt name eller realname ska funktionen returnera en tom array.

  let heroes = [];
  for (let items of array) {
    if (items.realname.toLowerCase().includes(string) || items.name.toLowerCase().includes(string)) {
      render(items);
      heroes.push(items);
    }
  }
  
    return heroes;
}

function render (hero) {
  // Denna funktion tar emot ett objekt som representerar en superhjälte 
  // och skapar en div som visar name, realname och favoriteColor enligt videon.
  // Funktionen ska även appenda diven till resultsDOM
  let div = document.createElement("div");
  div.classList.add("hero");
  div.textContent = `${hero.name}, ${hero.realname}, ${hero.favoriteColor}`;
  div.style.backgroundColor = hero.favoriteColor.toLowerCase();
  div.style.color = "white";
  resultsDOM.appendChild(div);
}


inputDOM.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    arrayFilter(superheroes, inputDOM.value);
  }
});