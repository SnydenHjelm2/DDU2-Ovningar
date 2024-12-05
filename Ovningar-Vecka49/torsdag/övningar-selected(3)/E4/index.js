function randomInt(min, max) {
  return min + Math.floor(Math.random() * (max + 1- min));
}

function minNum(num) {
  return num;
}

function maxNum(num) {
  return num;
}

const maxInput = document.querySelector("#max");
const minInput = document.querySelector("#min");
const button = document.querySelector("button");
const p = document.querySelector("p");

button.addEventListener("click", function() {
    let allNums = [];
    p.innerHTML = "";
    let min = minNum(parseInt(minInput.value));
    let max = maxNum(parseInt(maxInput.value));

    for (i=0; i<1000; i++) {
      let rand = randomInt(min, max);
      allNums.push(rand);
    }
    
    for (i=min; i<=max; i++) {
      let count = 0;
      for (let number of allNums) {
        if (number === i) {
          count++;
        }
      }
      p.innerHTML += `Number ${i} rolled ${count} times<br>`;
    }
  
})

