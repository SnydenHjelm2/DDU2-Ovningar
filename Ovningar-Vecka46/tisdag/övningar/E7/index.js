// Koda ett program som skapar en sida som den som visas på bilden (image.png).

// Notera att det finns en index.css som är redan länkad från index.html
// Studera den för att lista ut vilka element och klasser som behövs.
// Du får inte göra någon ändring i index.css

// Du måste använda konstanerna nedan i din kod

const main = document.querySelector("main");
const n1 = 5;
const n2 = 10;

main.innerHTML = `
<div class="column"></div>
<div class="column"></div>
<div class="column"></div>
<div class="column"></div>
<div class="column"></div>`;

var columns = document.querySelectorAll(".column");

for (i=0; i<n1; i++) {
    for (x=0; x<n2; x++) {
        let paras = document.createElement("p");
        paras.textContent = `${i + 1} x ${x + 1} = ${(i + 1) * (x + 1)}`;
        columns[i].appendChild(paras);
    }
}

/*for (i=1; i<=n1; i++) {
    for (x=1; x<=n2; x++) {
        let paras = document.createElement("p");
        paras.textContent = `${i} x ${x} = ${i * x}`
        columns[i - 1].appendChild(paras);
    }
}*/