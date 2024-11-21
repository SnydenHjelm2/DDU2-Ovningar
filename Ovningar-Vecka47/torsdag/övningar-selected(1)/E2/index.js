let people = [
  { firstname: 'Théotime', lastname: 'Beauchamp', age: 34, height: 175, city: 'Lyon', eyeColor: 'blue', hairColor: 'blonde' },
  { firstname: 'Éléonore', lastname: 'Charpentier', age: 28, height: 162, city: 'Toulouse', eyeColor: 'green', hairColor: 'brown' },
  { firstname: 'Gaspard', lastname: 'Lemoine', age: 45, height: 180, city: 'Toulouse', eyeColor: 'brown', hairColor: 'black' },
  { firstname: 'Clémence', lastname: 'Dubois', age: 22, height: 168, city: 'Nantes', eyeColor: 'hazel', hairColor: 'red' },
  { firstname: 'Aurélien', lastname: 'Durand', age: 31, height: 177, city: 'Lyon', eyeColor: 'blue', hairColor: 'black' },
  { firstname: 'Maëlys', lastname: 'Lemoine', age: 26, height: 158, city: 'Toulouse', eyeColor: 'green', hairColor: 'blonde' },
  { firstname: 'Baptiste', lastname: 'Rousseau', age: 39, height: 182, city: 'Marseille', eyeColor: 'brown', hairColor: 'brown' },
  { firstname: 'Océane', lastname: 'Blanc', age: 30, height: 165, city: 'Nantes', eyeColor: 'blue', hairColor: 'red' },
  { firstname: 'Quentin', lastname: 'Garnier', age: 27, height: 170, city: 'Lyon', eyeColor: 'hazel', hairColor: 'black' },
  { firstname: 'Léon', lastname: 'Faure', age: 33, height: 174, city: 'Toulouse', eyeColor: 'green', hairColor: 'brown' },
  { firstname: 'Solène', lastname: 'Perrin', age: 29, height: 160, city: 'Marseille', eyeColor: 'blue', hairColor: 'blonde' },
  { firstname: 'Thibault', lastname: 'Morel', age: 36, height: 178, city: 'Nantes', eyeColor: 'brown', hairColor: 'black' },
  { firstname: 'Éloïse', lastname: 'Renard', age: 25, height: 163, city: 'Lyon', eyeColor: 'hazel', hairColor: 'red' },
  { firstname: 'Bastien', lastname: 'Lambert', age: 32, height: 181, city: 'Toulouse', eyeColor: 'green', hairColor: 'brown' },
  { firstname: 'Amandine', lastname: 'Girard', age: 24, height: 167, city: 'Marseille', eyeColor: 'blue', hairColor: 'blonde' },
  { firstname: 'Maxence', lastname: 'Dupuis', age: 38, height: 176, city: 'Nantes', eyeColor: 'brown', hairColor: 'black' },
  { firstname: 'Léonie', lastname: 'Fabre', age: 27, height: 164, city: 'Lyon', eyeColor: 'hazel', hairColor: 'red' },
  { firstname: 'Valentin', lastname: 'Moulin', age: 35, height: 179, city: 'Toulouse', eyeColor: 'green', hairColor: 'brown' },
  { firstname: 'Adélaïde', lastname: 'Gauthier', age: 31, height: 169, city: 'Marseille', eyeColor: 'blue', hairColor: 'blonde' },
  { firstname: 'Théodore', lastname: 'Leroy', age: 40, height: 183, city: 'Nantes', eyeColor: 'brown', hairColor: 'black' }
];
// Vi ska skapa ett objekt med metoder som hjälper oss analysera en array med samma struktur som den ovan.

const Analysis = {  

  // Först ett par exempel på metoder
  hasHairColor: function (persons, color) {
    // Denna metod tar emot två argument: persons och color (string)
    // Metoden returnerar en ny array med alla personer i persons vars hårfärg är color
    let answer = [];
    for (let person of persons) {
      if (person.hairColor == color) {
        answer.push(person);
      }
    }
    return answer;
  },

  tallest: function (array) {
    // Denna metod tar emot en array och returnerar personen (objektet) som är längst
    let maxHeight = 0;
    let tallest = null;
    for (let person of array) {
      if (person.height > maxHeight) {
        tallest = person;
        maxHeight = person.height;
      }
    }
    return tallest;
  },
};


// Använd Analysis-objektet för att logga på konsolen vem av de med ljus hårfärg ("blonde") är längst.
let blondes = Analysis.hasHairColor(people, "blonde");
let tallestBlonde = Analysis.tallest(blondes);
console.log(tallestBlonde);

// Använd Analysis-objektet för att logga på konsolen hårfärgen som finns mest mellan "blonde" och "red"
let reds = Analysis.hasHairColor(people, "red");
if (reds.length > blondes.length) {
  console.log("Det finns fler rödhåriga än blonda personer");
} else {
  console.log("Det finns fler blonda än rödhåriga personer");
}



// Nu skapar du några extra metoder i Analys-objektet.
// Lägg till nya metoder såhär (exempel ny metod stringOfFirstNames):

Analysis.stringOfFirstNames = function (array) {
  // Denna metod tar emot en array som argument och returnerar EN sträng med alla förnamn i alfabetisk ordning, separerade med komma
  // Alltså: "Théotime, Éléonore, ..." (notera mellanslaget efter komma)
  let nameString = "";
  for (let names of array) {
    nameString += `${names.firstname}, `;
  }

  return nameString;
}

// Andra metoder att koda:

// livesIn
// Denna metod tar emot två argument: persons och city (string)
// Metoden returnerar en ny array med alla personer (object) i persons som bor i city
// Alltså: Analysis.livesIn = function (persons, city) {}
Analysis.livesIn = function(persons, city) {
  let livesInCity = [];

  for (let item of persons) {
    if (item.city === city) {
      livesInCity.push(item)
    }
  }
  return livesInCity;
}

// stringOfNamesFrenchStyle
// I Frankrike är det vanligt att man skriver efternamnet i versaler.
// Denna metod tar emot en array och returnerar EN sträng med alla namnen (för- + efternamn) i alfabetisk ordning, separerade med komma,
// av alla personer i arrayen.
// Exempel av möjligt returvärde: "Théotime BEAUCHAMP, Éléonore CHARPENTIER, ..." 
Analysis.stringOfNamesFrenchStyle = function(array) {
  let frenchStyle = "";

  for (let items of array) {
    let lastName = items.lastname;
    frenchStyle += `${items.firstname} ${lastName.toUpperCase()}, `;
  }
  return frenchStyle;
}
// oldest
// Denna metod tar emot en array och returnerar personen (objektet) som är äldst bland de i arrayen
Analysis.oldest = function(array) {
  let old = 0;
  let oldestObject;

  for (let items of array) {
    if (items.age > old) {
      old = items.age;
      oldestObject = items;
    }
  }

  return oldestObject;
}
// sortByLength
// Denna metod tar emot en array och sorterar den enligt sjunkande längd, alltså längsta personen först.
Analysis.sortByLength = function(array) {
  let initialArray = [];
  for (let items of array) {
    initialArray.push(items.height);
  }

  let sortedArray = initialArray.sort((a, b) => b - a);
  return sortedArray;
}
// someThatLiveIn
// Denna metod tar emot en array av personer och en city (string)
// Metoden returnerar:
// - true om det finns någon person i arrayen som bor i city
// - false annars
Analysis.someThatLiveIn = function(array, city) {
  for (let items of array) {
    if (items.city === city) {
      return true;
    }
  }
  return false;
}


// Använd metoderna ovan för att logga på konsolen:
// - En sträng med namnet (French style) på alla som har svarta ögon
var blackEyedPeople = [];
for (let objects of people) {
  if (objects.eyeColor === "brown") {
    let object = {
      firstname: objects.firstname,
      lastname: objects.lastname,
    }
    blackEyedPeople.push(object);
  }
}
console.log(Analysis.stringOfNamesFrenchStyle(blackEyedPeople));
// - För- och efternamn på den äldsta personen som har blå ögon
let blueEyedPeople = [];
for (let objects of people) {
  if (objects.eyeColor === "blue") {
    let object = {
      age: objects.age,
    }
    blueEyedPeople.push(object);
  }
}
let oldestBluey = Analysis.oldest(blueEyedPeople);
let oldestBlueName = "";
for (let objects of people) {
  if (objects.eyeColor === "blue" && objects.age === oldestBluey.age) {
    oldestBlueName = `${objects.firstname} ${objects.lastname}`;
  }
}
console.log(oldestBlueName);
// - Förnamnet och åldern på den äldsta personen som bor i Toulouse
// - En sträng med namnet (French style) på alla som har svarta ögon och svart hår
// - En sträng med namn + längd ("Éléonore (162cm), Maëlys (158cm),... ") med alla personer med gröna ögon, från längst till kortast
// - "Det finns åtminstone en person med blå ögon i Lyon" om det finns någon med blå ögon som bor i Lyon. 
//   "Det finns ingen person med blå ögon i Lyon" annars.
// - Vilken stad (av Marseille eller Toulouse) som har flest personer





// EXTRA

// averageLength
// Denna metod tar emot en array returnerar medelvärdet av alla längder (en siffra) bland personerna i arrayen

// Vad är medelländgen av alla som bor i Lyon?
// Vad är medelländgen av alla som har rött hår?