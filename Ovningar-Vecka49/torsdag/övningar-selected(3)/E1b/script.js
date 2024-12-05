const input = document.querySelector("input");
const p = document.querySelector("p");

let randomNum = Math.floor(Math.random() * 5) + 1;
console.log(randomNum);

input.value = "";

function userGuess(guess) {
    if (parseInt(guess) === randomNum) {
        p.textContent = `Grattis! Du gissade rätt! Nummret var: ${guess}`;
        document.body.style.backgroundColor = "lime";
        input.value = "";
    } else {
        p.textContent = `Tyvärr var det inte rätt siffra, försök igen!`;
        document.body.style.backgroundColor = "indianred";
        input.value = "";
    }
}

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        userGuess(input.value);
    }
})