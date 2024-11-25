/*

En dansk hackargrupp, känd som "WDU - Wild Data Underwerk", har släppt info om deras egna inköp under hela 2023. De har gått loss och handlat 10000 ggr under året. Dessa kvitton inkluderar information om person, affär, pris, datum (dag och tid, alltid 2023) och stad.

WDU söker nu folk som vill ansluta sig till dem, och har ställt några frågor ang datan. Om man lyckas svara på dem korrekt så kan man komma på intervju...


Frågorna som de vill ha svar på:
*/

// - Vilka är de två mest populära städer för inköp?
function getMostPopularCities(cities, receipts) {
    let currentCityID;
    let receiptsAndCity = [];
    for (let city of cities) {
        let receiptCount = 0;
        currentCityID = city.id;
        let object = {
            cityid: currentCityID,
            count: 0
        }
        for (let receipt of receipts) {
            if (currentCityID === receipt.cityID) {
                receiptCount++;
            }
        }
        object.count = receiptCount;
        receiptsAndCity.push(object);
    }
    console.log(receiptsAndCity);
    let firstPlace = 0;
    let secondPlace = 0;

    for (let receiptAndCity of receiptsAndCity) {
        if (receiptAndCity.count > firstPlace) {
            secondPlace = firstPlace;
            firstPlace = receiptAndCity.count;
        } else if (receiptAndCity.count > secondPlace) {
            secondPlace = receiptAndCity.count;
        }
    }

    let answer = [];
    for (let receiptAndCity of receiptsAndCity) {
        if (receiptAndCity.count === firstPlace) {
            answer.push(receiptAndCity);
        } else if (receiptAndCity.count === secondPlace) {
            answer.push(receiptAndCity);
        }
    }
    return answer;
}
let popularCities = getMostPopularCities(cities, receipts);
for (let city of cities) {
    if (city.id === popularCities[0].cityid) {
        console.log(`${city.name} var den mest populära staden för inköp`);
    } else if (city.id === popularCities[1].cityid) {
        console.log(`${city.name} var den näst mest populära staden för inköp`);
    }
}
// - Köper hackarna mest på fm eller på em?
function amOrPm(receipts) {
    let totalAM = 0;
    let totalPM = 0;

    for (let receipt of receipts) {
        if (receipt.time.hour >= 12) {
            totalPM++;
        } else {
            totalAM++;
        }
    }

    if (totalPM > totalAM) {
        return "PM";
    } else {
        return "AM";
    }
}
let amOrPmResult = amOrPm(receipts);
if (amOrPmResult === "PM") {
    console.log("Flest köp skedde på eftermiddagen");
} else if (amOrPmResult === "AM") {
    console.log("Flest köp skedde på förmiddagen");
}
// - Finns det någon hacker som har lyckats köpa två ggr på samma affär (inkl stad) på samma dag? Vem? Vilken affär och vilken stad? Har hen lyckats med detta fler än en gång?
function sameShopAndCity(receipts) {
    let repeats = [];
    for (i=0; i<receipts.length; i++) {
        for (j=0; j<receipts.length; j++) {
            const firstReceipt = receipts[i];
            const secondReceipt = receipts[j];

            if (firstReceipt.personID === secondReceipt.personID
                && firstReceipt.cityID === secondReceipt.cityID
                && firstReceipt.establishmentID === secondReceipt.establishmentID
            ) {
                const firstDate = {month: firstReceipt.date.month, day: firstReceipt.date.day};
                const secondDate = {month: secondReceipt.date.month, day: secondReceipt.date.day};
                const firstTime = {hour: firstReceipt.time.hour, min: firstReceipt.time.min}; 
                const secondTime = {hour: secondReceipt.time.hour, min: secondReceipt.time.min}; 

                if (firstDate.month === secondDate.month && firstDate.day === secondDate.day && (firstTime.hour != secondTime.hour || firstTime.min != secondTime.min)) {
                    repeats.push({firstReceipt, secondReceipt})
                }
            }
        }
    }
    return repeats;
}
// - Vad är det högsta som har spenderats på en affär under en månad, och vid vilken affär (inkl stad) skedde det?
function mostSpent(receipts, cities, etb) {
    let mostSpent = 0;
    let mostSpentEtb;
    let mostSpentMonth;
    let spentThisMonth = 0;

    for (i=1; i<=12; i++) {
        for (j=1; j<=etb.length; j++) {
            spentThisMonth = 0;
            for (let receipt of receipts) {
                if (receipt.date.month == i && receipt.establishmentID === j) {
                    spentThisMonth += receipt.amount;
                }
            }
            if (spentThisMonth > mostSpent) {
                mostSpent = spentThisMonth;
                mostSpentEtb = etb[j].id
                mostSpentMonth = i;
            }
        }
    }
    let cityIDS = [];
    for (let receipt of receipts) {
        if (receipt.establishmentID === mostSpentEtb && receipt.date.month == mostSpentMonth) {
            cityIDS.push(receipt.cityID);
        }
    }
    let mostCity = 0;
    let mostCityID;
    for (let city of cities) {
        let count = 0;
        for (let cityID of cityIDS) {
            if (city.id === cityID) {
                count++;
            }
        }
        if (count > mostCity) {
            mostCity = count;
            mostCityID = city.id;
        }
    }
    let obj = {
        month: mostSpentMonth,
        establishment: mostSpentEtb,
        city: mostCityID,
        spent: mostSpent
    }
    return obj;
}

let mostSpentResult = mostSpent(receipts, cities, establishments);
let etbResult;
let cityResult;
for (let etb of establishments) {
    if (etb.id === mostSpentResult.establishment) {
        etbResult = etb.name;
    }
}
for (let city of cities) {
    if (city.id === mostSpentResult.city) {
        cityResult = city.name;
    }
}

console.log(`Det spenderades mest under den ${mostSpentResult.month} månaden.
    Totala mängden som spenderades var: ${mostSpentResult.spent}.
    Den affär där det spenderades mest var: ${etbResult}.
    Den stad där vars affär det spenderades mest i: ${cityResult}`);
// - Vilken kedja av affärer är minst populär bland hackarna?
function leastPopularShop(receipts, etb) {
    let leastVisits = 0;
    let leastVisitedShop;

    for (let shop of etb) {
        let count = 0;
        for (let receipt of receipts) {
            if (receipt.establishmentID === shop.id) {
                count++;
            }
        }
        if (count > leastVisits) {
            leastVisits = count;
            leastVisitedShop = shop;
        }
    }
    return leastVisitedShop;
}
let leastPopShopResult = leastPopularShop(receipts, establishments);
console.log(`Den affär som var minst populär var ${leastPopShopResult.name}`);
