
// Utgå från att alla konstanter i databasen är tillgängliga.

//    Koda en funktion som har en parameter (year) och returnerar en array
//    med alla böcker som publicerades det året. Om det inte publicerades
//    några böcker det året ska funktionen returnera en tom array.
const getBooksByYear = (year) => {
    let booksOfYear = [];
    for (let book of BOOKS) {
        if (book.publication_year === year) {
            booksOfYear.push(book);
        }
    }
    return booksOfYear;
}



//    Koda en funktion som har en parameter (countryName) och returnerar en array
//    med alla författare som kommer från det landet
const getAuthorsByCountry = (countryName) => {
    let targetCountryID;
    for (let country of COUNTRIES) {
        if (country.name === countryName) {
            targetCountryID = country.id;
        }
    }

    let authorsFromCountry = [];
    for (let author of AUTHORS) {
        if (author.country_of_origin_id === targetCountryID) {
            authorsFromCountry.push(author);
        }
    }
    return authorsFromCountry;
}


//    Koda en funktion som har en parameter (language) och returnerar en array
//    med namnet (endast namnet) av länderna där språket talas
const getCountriesByLanguage = (language) => {
    let countryIDS;
    for (let lang of LANGUAGES) {
        if (lang.name === language) {
            countryIDS = lang.spoken_in_countries_ids;
        }
    }

    let allCountriesThatSpeak = [];
    for (let id of countryIDS) {
        for (let country of COUNTRIES) {
            if (id === country.id) {
                allCountriesThatSpeak.push(country.name);
            }
        }
    }
    return allCountriesThatSpeak;
}




//    Koda en funktion som har en parameter (title) och returnerar namnet på
//    landet som dess författare kommer från
const getAuthorCountryByTitle = (title) => {
    let authorID = null;
    for (let book of BOOKS) {
        if (book.title === title) {
            authorID = book.author_id;
        }
    }

    let authorComesFrom = null;
    for (let author of AUTHORS) {
        if (author.id === authorID) {
            authorComesFrom = author.country_of_origin_id;
        }
    }

    let countryName = "";
    for (let country of COUNTRIES) {
        if (country.id === authorComesFrom) {
            countryName = country.name;
        }
    }

    return countryName;
}




//    Koda en funktion som har en parameter (countryName) och returnerar en array
//    med titeln på alla böcker skrivna av författare som kommer från det landet
const getTitlesFromCountry = (countryName) => {
    let targetCountryID = null;
    for (let country of COUNTRIES) {
        if (country.name === countryName) {
            targetCountryID = country.id;
        }
    }

    let authorsFromTargetCountry = [];
    for (let author of AUTHORS) {
        if (author.country_of_origin_id === targetCountryID) {
            authorsFromTargetCountry.push(author.id);
        }
    }

    let titles = [];
    for (let authorID of authorsFromTargetCountry) {
        for (let book of BOOKS) {
            if (authorID === book.author_id) {
                titles.push(book.title);
            }
        }
    }

    return titles;
}
