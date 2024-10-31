// Koda ett program som loggar asterisker enligt videon.

const a = prompt("En siffra please");

for (let i = 1; i <= a; i++) {
  let string = "";
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  console.log(string);
}

