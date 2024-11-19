/*

Följ dessa steg:
1) Koda en funktion som tar emot två strängar och returnerar den längsta av båda
2) Koda en funktion som tar emot en array av strängar och returnerar
   en siffra, där siffran är hur många tecken den längsta strängen har.
   Du måste använda funktionen du kodade i 1)

Notera att du vet inte i förväg hur många element det finns i
arrayen. Jag har inkluderat två arrayer nedan som du kan använda
för att testa din funktion. Men funnktionen ska kunna fungera för
vilken array som helst.

I övningen ingår det att be coPilot om en annan array av strängar
som du kan testa din funktion med.
Jag använde denna prompt:
a js array of 21 strings where all the strings contain two to four words in swedish, as in "stor grön bil" or "fin underbar utsikt"

*/

function getLongestString(strOne, strTwo) {
  strOneLength = strOne.length;
  strTwoLength = strTwo.length;

  if (strOneLength > strTwoLength) {
    return strOne;
  } else if (strTwoLength > strOneLength) {
    return strTwo;
  } else if (strOneLength === strTwoLength) {
    return strOne;
  }
}

function longestStringInArray(array) {
  let longestString = "";

  for (i=0; i<array.length; i++) {
    if (i===0) {
      longestString = array[i];
    } else {
      let funcReturn = getLongestString(longestString, array[i]);

      if (funcReturn.length > longestString.length) {
        longestString = funcReturn;
      } 
    }
  }
  return longestString.length;
}

const array1 = [
  "stor grön bil", "fin underbar utsikt", "liten röd stuga", "blå himmel", "vacker solnedgång",
  "hög byggnad", "snabb cykel", "mjuk kudde", "varm kopp te", "kall vinterdag",
  "lång promenad", "god mat", "söt kattunge", "glad hund", "tyst bibliotek",
  "gammal bok", "ny dator", "stor trädgård", "liten sjö", "hög musik", "mjuk filt"
];

const array2 = [
  "vacker blommande trädgård", "klarblå sjö", "mysig liten stuga", "hög bergstopp", "lugn skogspromenad",
  "varm sommardag", "kall vinterkväll", "stor vit båt", "snabb röd bil", "fin gammal bro",
  "ny modern byggnad", "söt liten valp", "glad lekande barn", "mjuk varm filt", "god doftande mat",
  "liten grön park", "stor blå himmel", "vacker soluppgång", "tyst lugn kväll", "hög klar stjärnhimmel",
  "mjuk bekväm soffa", "varm kopp kaffe", "kall frisk luft", "lång skön semester", "fin gammal stad",
  "ny spännande bok", "stor grön äng", "liten mysig café"
];

const array3 = [
  "Hello world",
  "JavaScript is fun",
  "I love coding",
  "Arrays are useful",
  "Let's learn together",
  "Coding is creative",
  "Practice makes perfect",
  "Stay curious",
  "Debugging is essential",
  "Keep exploring",
  "Write clean code",
  "Embrace challenges",
  "Think outside the box",
  "Never stop learning",
  "Code with passion",
  "Solve problems daily",
  "Share your knowledge",
  "Build amazing projects",
  "Collaborate with others",
  "Stay motivated",
  "Enjoy the journey"
];

const array4 = [
  "The sun is shining brightly",
  "A quick brown fox jumps",
  "Over the lazy dog sleeping",
  "Life is full of surprises daily",
  "This coffee tastes really great",
  "She sells seashells by the seashore",
  "An apple a day keeps the doctor away",
  "Beneath the surface lies hidden treasures",
  "The mountains are calling my name",
  "Time flies when you are having fun",
  "Reading books opens new worlds for you",
  "The stars shine brightly in the sky tonight",
  "A watched pot never boils, as they say",
  "Practice makes perfect in all endeavors",
  "Happiness is found in little moments always",
  "Kindness is a gift everyone can afford to give",
  "The early bird catches the worm each morning",
  "Dream big, work hard, and achieve great things",
  "Music soothes the soul in times of trouble",
  "The journey is as important as the destination",
  "Wonders never cease in this magical universe",
  "Laughter is the best medicine for the soul",
  "Nature's beauty is unparalleled and inspiring",
  "Creativity knows no bounds or limitations ever",
  "The road less traveled often leads to discovery",
  "Challenges make us stronger and more resilient",
  "Change is the only constant in life itself",
  "The ocean waves bring peace to restless hearts",
  "A picture is worth a thousand meaningful words",
  "Follow your dreams, no matter how big they are"
];

const array5 = [
  "The cat jumped over the tall fence",
  "A journey of a thousand miles begins here",
  "Success comes to those who work hard",
  "The rain falls gently on the green fields",
  "Her smile lights up the entire room",
  "Books are a uniquely portable magic tool",
  "Travel far and wide to find yourself",
  "The dog barked loudly at the passing car",
  "Never give up, no matter the challenges",
  "Freshly baked cookies smell absolutely amazing",
  "You miss one hundred percent of untried shots",
  "The clock ticks softly in the quiet night",
  "Tomorrow is a new day full of hope",
  "The forest whispers secrets to those who listen",
  "A true friend is a priceless treasure always",
  "Every sunset brings the promise of a sunrise",
  "The road ahead is filled with great possibilities",
  "Love and kindness make the world a better place",
  "The flowers bloom beautifully in the spring sunshine",
  "Hard work beats talent when talent doesn’t work hard",
  "Small steps lead to big changes over time",
  "The river flows calmly through the quiet valley",
  "Good things come to those who patiently wait",
  "Nature provides peace and healing for the soul",
  "The stars guide sailors across the open seas",
  "Trust the process and stay focused on your goals",
  "Every storm eventually runs out of rain and thunder",
  "You can achieve anything with the right mindset",
  "Keep your head up and your heart strong always",
  "Believe in yourself and all that you are capable of"
];

console.log(longestStringInArray(array1));
console.log(longestStringInArray(array2));
console.log(longestStringInArray(array3));
console.log(longestStringInArray(array4));
console.log(longestStringInArray(array5));
