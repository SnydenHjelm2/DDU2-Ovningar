// Kolla på videon.
// När användaren skriver en siffra och trycker på enter så läggs
// siffran till i #numbers.
function addNumber(e) {
    if (e.key === "Enter") {
        let userInput = input.value;
        nums.textContent += userInput;
    }
}

const input = document.querySelector("input");
const nums = document.querySelector("#numbers");
input.addEventListener("keyup", addNumber);