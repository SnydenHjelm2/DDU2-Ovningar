// Koda en sida som den som syns på videon.
// När användaren clickar på knappen "green" eller trycker
// på tangenten "g" så skapas det en grön div inne i #divs.
// Detsamma för knappen "blue" och tangenten "b"; och "red" och "r".
// Du måste koda och sen använda funktionen createDiv, se nedan.

// CSS finns, den kan du använda.
const controls = document.querySelector("#controls");
  for (i=0; i<3; i++) {
    let newButton = document.createElement("button");
    if (i===0) {
        newButton.id = "red";
        newButton.textContent = "red (r)";
        controls.appendChild(newButton);
    } else if (i === 1) {
        newButton.id = "green";
        newButton.textContent = "green (g)";
        controls.appendChild(newButton);
    } else {
        newButton.id = "blue";
        newButton.textContent = "blue (b)";
        controls.appendChild(newButton);
    }
  }

  const message = document.querySelector("#message");
  const divs = document.querySelector("#divs");
  const redB = document.querySelector("#red");
  const greenB = document.querySelector("#green");
  const blueB = document.querySelector("#blue");
  const body = document.body;

  redB.addEventListener("click", function redDiv() {
    let redBox = document.createElement("div");
    redBox.style.backgroundColor = "red";
    divs.appendChild(redBox);
    message.textContent = "En div med färg red har skapats";
  });

  greenB.addEventListener("click", function green() {
    let greenBox = document.createElement("div");
    greenBox.style.backgroundColor = "green";
    divs.appendChild(greenBox);
    message.textContent = "En div med färg green har skapats";
  });

  blueB.addEventListener("click", function blue() {
    let blueBox = document.createElement("div");
    blueBox.style.backgroundColor = "blue";
    divs.appendChild(blueBox);
    message.textContent = "En div med färg blue har skapats";
  });

  body.addEventListener("keydown", function keys(e) {
    if (e.key.toLowerCase() === "r") {
        let redBox = document.createElement("div");
        redBox.style.backgroundColor = "red";
        divs.appendChild(redBox);
        message.textContent = "En div med färg red har skapats";
    } else if (e.key.toLowerCase() === "g") {
        let greenBox = document.createElement("div");
        greenBox.style.backgroundColor = "green";
        divs.appendChild(greenBox);
        message.textContent = "En div med färg green har skapats";
    } else if (e.key.toLowerCase() === "b") {
        let blueBox = document.createElement("div");
        blueBox.style.backgroundColor = "blue";
        divs.appendChild(blueBox);
        message.textContent = "En div med färg blue har skapats";
    } else {
        message.textContent = `Bokstaven ${e.key} gör inget`;
    }
  })