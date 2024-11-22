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

    for (let receipt in receipts) {
        if (receipt.time.hour >= 12 && receipt.time.hour <= 23) {
            
        }
    }
}
// - Finns det någon hacker som har lyckats köpa två ggr på samma affär (inkl stad) på samma dag? Vem? Vilken affär och vilken stad? Har hen lyckats med detta fler än en gång?
// - Vad är det högsta som har spenderats på en affär under en månad, och vid vilken affär (inkl stad) skedde det?
// - Vilken kedja av affärer är minst populär bland hackarna?


