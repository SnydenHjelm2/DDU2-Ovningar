const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const wrapper = document.querySelector("#wrapper");
const main = document.querySelector("main");

for (i=0; i<3; i++) {
    let yellow = document.createElement("div");
    yellow.classList.add("yellow");
    wrapper.appendChild(yellow);
}

plus.addEventListener("click", function addDiv() {
    let yellow = document.createElement("div");
    yellow.classList.add("yellow");
    wrapper.appendChild(yellow);

})

minus.addEventListener("click", function remove() {
    let yellow = document.querySelector(".yellow");
    wrapper.removeChild(yellow);
})