//Koda en funktion getByName(string) som returnerar en array av skor vars namn innehåller string.
function getByName(shoeName) {
    let shoes = [];

    for (let shoe of SHOES) {
        if (shoe.name.toLowerCase().includes(shoeName.toLowerCase())) {
            shoes.push(shoe);
        }
    }
    return shoes;
}

//  Koda en funktion getShoes(kind, country) som returnerar en array av skor som är av typen kind (slippers, boots eller sneakers) och från landet country.
function getShoes(kindOfShoe, countryOfOrigin) {
    kindOfShoe = kindOfShoe.toLowerCase();
    countryOfOrigin = countryOfOrigin.toLowerCase();
    let kindID = null;
    for (let kind of KINDS) {
        if (kind.name.toLowerCase() === kindOfShoe) {
            kindID = kind.id;
        }
    }
    if (kindID === null) {return false};

    let countryID = null;
    for (let country of COUNTRIES) {
        if (country.name.toLowerCase() === countryOfOrigin) {
            countryID = country.id;
        }
    }
    if(countryID === null) {return false};

    let shoes = [];
    for (let shoe of SHOES) {
        if (shoe.kind_id === kindID && shoe.country_id === countryID) {
            shoes.push(shoe);
        }
    }

    return shoes;
}

//  Koda en funktion getMostExpensiveByKind(kind) som returnerar en sko, nämligen den som är dyrast av typen kind.
function getMostExpensiveByKind(kindOfShoe) {
    let kindID = null;
    for(let kind of KINDS) {
        if (kind.name === kindOfShoe) {
            kindID = kind.id;
        }
    }
    if(kindID === null) {return false};

    let allShoesOfKind = [];
    for (let shoe of SHOES) {
        if (shoe.kind_id === kindID) {
            allShoesOfKind.push(shoe);
        }
    }

    allShoesOfKind.sort((a, b) => b.price - a.price);

    return allShoesOfKind[0];
}

//  Koda en funktion getMostExpensiveAllKinds() som returnerar ett objekt med strukturen:
// {
//     Slippers: sko-objekt,
//     Boots: sko-objekt,
//     Sneakers: sko-objekt
//   }
//   där varje egenskap har som värde skon som är dyrast av den typen.

function getMostExpensiveAllKinds() {
    let obj = {
        Slippers: getMostExpensiveByKind("Slippers"),
        Boots: getMostExpensiveByKind("Boots"),
        Sneakers: getMostExpensiveByKind("Sneakers")
    }
    return obj;
}

// Tänk dig att du har X kronor att spendera och att du vill köpa två par skor.
//   Du vill att så lite pengar som möjligt blir över och bryr dig inte så mycket om skorna.
//   Koda en funktion _getTwoPairs(X) som returnerar en array av objekt, där varje objekt har strukturen:
//   {
//     shoe1: sko-objekt,
//     shoe2: sko-objekt,
//   }
//   Skorna i varje objekt ska vara olika och tillsammans kosta exakt X. Om det inte finns två par av skor som tillsammans kostar X ska funktionen returnera false
function getTwoPairs(money) {
    let shoesThatAddUpToMoney = [];

    for (let shoe of SHOES) {
        for (let shoe2 of SHOES) {
            if (shoe.id === shoe2.id) {
                continue;
            } else {
                if (shoe.price + shoe2.price === money) {
                    let obj = {
                        shoe1: shoe,
                        shoe2: shoe2
                    }
                    shoesThatAddUpToMoney.push(obj);
                }
            }
        }
    }
    if (shoesThatAddUpToMoney.length === 0) {
        return false;
    } else {
        return shoesThatAddUpToMoney;
    }
}