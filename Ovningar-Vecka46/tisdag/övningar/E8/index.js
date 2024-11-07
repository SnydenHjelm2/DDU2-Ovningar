// Koda ett program som skapar en sida som den som visas på bilden (image.png).

// Notera att det finns en index.css som är redan länkad från index.html
// Studera den för att lista ut vilka element och klasser som behövs.
// Du får inte göra någon ändring i index.css

// Du måste använda konstanerna nedan i din kod

const main = document.querySelector("main");
const nRows = prompt("Ange antal rader");
const nCols = prompt("Ange antal kolumner");

var isRowsNum = parseInt(nRows);
var isColsNum = parseInt(nCols);

if (isNaN(isRowsNum) || isNaN(isColsNum)) {
    main.innerHTML = "<h1>You did not enter a number for both Rows and Columns<br>Refresh and try again.</h1>";
} else {
    main.style.gridTemplateRows = `repeat(${nRows}, 1fr)`;
    main.style.gridTemplateColumns = `repeat(${nCols}, 1fr)`;

    for (i=0; i<isRowsNum; i++) {
        for (x=0; x<isColsNum; x++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            cell.textContent = `${i+1}, ${x+1}`;
            main.appendChild(cell);
        }
    }
}

