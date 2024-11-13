// Koda ett program som loggar asterisker enligt videon.


var userInput = prompt("Number please!");
userInput = parseInt(userInput);

if (isNaN(userInput)) {
  console.log("I said number, please :/");
} else {
  for(i=1; i<=userInput; i++) {
    var stars = "";
    for (x=1; x<=i; x++) {
      stars += "*";
    }
    console.log(stars);
  }
}

