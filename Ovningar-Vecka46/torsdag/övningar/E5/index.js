// Koda ett program som ber om en sträng (prompt)
// och sedan skriver den som det visas på videon.

// Notera att dessa tecken (gemenene å, ä och ö) har en annan
// backgrundsfärg.

// Tips: Kolla på videon 01. Strängar (från tisdag andra veckan i kursen)
//       för att komma ihåg hur man kommer åt tecknen i en sträng, och hur man
//       vet hur många tecken som finns i en given sträng (mao. hur lång den är).


let a = prompt("En sträng, please");

for (let i = 0; i < a.length; i++) {
  let klass = "";
  if (a[i] == "å" || a[i] == "ä" || a[i] == "ö") klass = "class='swedish_chars'";
  document.querySelector("main").innerHTML += `<p ${klass}>${a[i]}</p>`;
}

