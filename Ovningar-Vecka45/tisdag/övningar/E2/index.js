
const student = {
  first_name: "Jimi",
  last_name: "Hendrix",
  birth: "27 November 2000",
  university: "Malmö Universitet",
  program: "Music Studies"  
};

// Använd konstanten ovan (objektet) för att
// fylla i befintliga element på sidan så att det står:
// Namn: Jimi Hendrix
// Född: 27 November 2000
// Studerar: Music Studies, Malmö Universitet
document.querySelector("#name").textContent = `${student.first_name} ${student.last_name}`;
document.querySelector("#birth").textContent = `${student.birth}`
document.querySelector("#studies").textContent = `${student.program}, ${student.university}`