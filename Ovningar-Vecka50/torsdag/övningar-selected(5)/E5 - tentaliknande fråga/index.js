
function randomInt (min, max) {
  return min + Math.floor((max - min + 1) * Math.random());
}

const FirstNames = ["Guillermo", "Antonio", "Gerard", "Nerea", "Carmen", "Itziar"];
const LastNames = ["Pérez", "González", "López", "Rodríguez", "Antúnez", "Ramírez"];

function randomNames(n) {
  if (n > (FirstNames.length * LastNames.length)) {
    return false;
  }

  let names = [];

  while (names.length < n) {
    let randomFirstName = FirstNames[randomInt(0, FirstNames.length - 1)];
    let randomLastName = LastNames[randomInt(0, LastNames.length - 1)];
    let fullName = randomFirstName + " " + randomLastName;


    let foundDupe = false;
    for (i=0; i<names.length; i++) {
      if (names[i] === fullName) {
        foundDupe = true;
        break;
      }
    }

    if (!foundDupe) {
      names.push(fullName);
    }
  }


  return names;
}

console.log(randomNames(10));