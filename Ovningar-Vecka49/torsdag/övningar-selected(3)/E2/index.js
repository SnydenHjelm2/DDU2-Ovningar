function randomElement (array) {
  let randomNum = Math.floor(Math.random() * array.length);
  return array[randomNum];
}

const nCols = 30;
const nRows = 200;
const backgroundDOM = document.querySelector("#background");

const subduedColors = [
  '#B0C4DE', // Light Steel Blue
  '#B0E0E6', // Powder Blue
  '#ADD8E6', // Light Blue
  '#87CEEB', // Sky Blue
  '#87CEFA', // Light Sky Blue
  '#4682B4', // Steel Blue
  '#5F9EA0', // Cadet Blue
  '#6495ED', // Cornflower Blue
  '#7B68EE', // Medium Slate Blue
  '#6A5ACD'  // Slate Blue
];

let randomColor = randomElement(subduedColors);
backgroundDOM.style.gridTemplate = `repeat(${nRows}, 1fr) / repeat(${nCols}, 1fr)`;
for (i=0; i<nRows; i++) {
  for (j=0; j<nCols; j++) {
    let newDiv = document.createElement("div");
    newDiv.style.backgroundColor = randomElement(subduedColors);
    backgroundDOM.appendChild(newDiv);
  }
}
