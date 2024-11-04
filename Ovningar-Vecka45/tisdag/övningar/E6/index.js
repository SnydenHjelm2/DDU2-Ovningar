let a1 = ["Jimi", "Janis"];
let a2 = ["Tina", "Peter"];
let o_format1 = { firstName: "Nina", lastName: "Simone", born: "1 May 2000" };
let o_format2 = {
  name: {
    first: "Bruce",
    last: "Springsteen"
  },
  born: {
    year: 2000,
    month: "March",
    day: 23,
  }
};


// Skapa och skriv ut en array som har dessa element och i denna ordning:
// ["Jimi", "Janis", "Nina", "Bruce", "Tina", "Peter"]
// Använd endast datan som finns ovan
var names = [a1[0], a1[1], o_format1.firstName, o_format2.name.first, a2[0], a2[1]]
console.log(names)
// Ta bort alla pojknamn från arrayen. Skriv ut det första elementet i arrayen
names.splice(0, 1)
names.splice(2, 1)
names.splice(3, 1)
console.log(names)
console.log(names[0])