function isLetter(x) {
    if (typeof x != "string") return false;
    if (x.length != 1) return false;
    return "abcdefghijklmnopqrstuvwxyzåäö".includes(x.toLowerCase());
}

function remove(array, what) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] == what) {
            array.splice(i, 1);
        }
    }
    return array;
}

const allp = document.querySelectorAll("p");
let alltext = "";
for (const p of allp) {
    alltext += ` ${p.textContent}`;
}

let allWords = alltext.split(" ");

// REMOVE EMPTY STRINGS and LINE JUMPS FROM ARRAY
allWords = remove(allWords, "");
allWords = remove(allWords, "\n");

// REMOVE STUFF FROM WORDS
for (let i = 0; i < allWords.length; i++) {
    // remove line jump from end of word if exists
    if (allWords[i].charCodeAt(allWords[i].length - 1) === 10) {
        allWords[i] = allWords[i].slice(0, -1);
    }
    // remove last char if not a letter
    if (isLetter(allWords[i][allWords[i].length - 1]) == false) {
        allWords[i] = allWords[i].slice(0, -1);
    }

    // sometimes a word turns into an empty string after the steps above.
    // Remove empty strings from array again
    allWords = remove(allWords, "");
}

console.log(allWords);