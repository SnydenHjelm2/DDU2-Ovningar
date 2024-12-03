// Kolla på videon.
// När användaren skriver en siffra och trycker på enter så läggs
// siffran till i #numbers.
function addNumber(e) {
    console.log(e)
    if (e.key === "Enter") {
        let userInput = input.value;
        userInput = parseInt(userInput);

        if(isNaN(userInput)) {
            return false;
        } else {
            let newNum = document.createElement("div");
            newNum.textContent = userInput;
            nums.appendChild(newNum);
        }
    }
}

const input = document.querySelector("input");
const nums = document.querySelector("#numbers");
input.addEventListener("keyup", addNumber);
