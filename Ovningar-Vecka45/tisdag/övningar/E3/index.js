
const students = [
  {
    first_name: "Jimi",
    last_name: "Hendrix",
    birth: "27 November 2000",
    university: "Malmö Universitet",
    program: "Guitarr Studies"  
  },
  {
    first_name: "Janis",
    last_name: "Joplin",
    birth: "19 January 2000",
    university: "Malmö Universitet",
    program: "Singing Studies"  
  },
  {
    first_name: "Peter",
    last_name: "Gabriel",
    birth: "23 May 2000",
    university: "Malmö Universitet",
    program: "Music Studies"  
  },
  {
    first_name: "Tina",
    last_name: "Turner",
    birth: "9 December 2000",
    university: "Malmö Universitet",
    program: "Music Studies"  
  }
];

// Använd objektarrayen (array av objekt) ovan för att fylla sidan
// så att det står:
// Name: Tina Turner
// Born: 9 December 2000
// Studies: Music Studies, Malmö University

document.querySelector("#name").textContent = `${students[3].first_name} ${students[3].last_name}`
document.querySelector("#birth").textContent = `${students[3].birth}`
document.querySelector("#studies").textContent = `${students[3].program}, ${students[3].university}`