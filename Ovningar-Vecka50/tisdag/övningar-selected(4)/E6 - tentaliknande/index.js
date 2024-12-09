const orderCities = (cities) => {
    let orderedCities = [];
    for (let city of cities) {
        orderedCities.push(city);
    }

    orderedCities = orderedCities.sort((a, b) => a.name.localeCompare(b.name));

    return orderedCities;
}

function createSelect(cities) {
    const createSelect = document.createElement("select");
    createSelect.name = "City";
    controls.appendChild(createSelect);

    let select = document.querySelector("select");
    let createOption = document.createElement("option");
    createOption.value = "Pick a city";
    createOption.textContent = "Pick a city";
    select.appendChild(createOption);
    for (let city of cities) {
        let createOption = document.createElement("option");
        createOption.value = city.name;
        createOption.textContent = city.name;
        select.appendChild(createOption);
    }

    return document.querySelector("select");
}

const displayCities = (cities) => {
    for (let city of cities) {
        let cityDiv = document.createElement("div");
        cityDiv.classList.add("city");
        cityDiv.textContent = city.name;
        cityDiv.id = city.id;
        list.appendChild(cityDiv);
    }
}

const markTargetCity = (allCities, target) => {
    for (let city of allCities) {
        city.classList.remove("markTarget");
    }

    for (let city of allCities) {
        if (city.textContent === target) {
            city.classList.add("markTarget");
        }
    }
}

const getTargetCityNeighbors = (target, distances, cities) => {
    let targetCityID = null;
    for (let city of cities) {
        if (city.name === target) {
            targetCityID = city.id;
        }
    }

    let allDistances = [];
    for (let distance of distances) {
        if (distance.city1 === targetCityID || distance.city2 === targetCityID) {
            allDistances.push(distance);
        }
    }

    let lessThan300km = [];
    for (let distance of allDistances) {
        if (distance.distance < 300) {
            if (distance.city1 === targetCityID) {
                distance.neighborID = distance.city2;
            } else if (distance.city2 === targetCityID) {
                distance.neighborID = distance.city1;
            }
            lessThan300km.push(distance);
        }
    }
    return lessThan300km;
}

const markNeighbors = (neighbors, cities) => {
    for (let city of cities) {
        city.classList.remove("markClose");
    }

    for (let neigbor of neighbors) {
        for(let city of cities) {
            if (neigbor.neighborID === parseInt(city.id)) {
                city.classList.add("markClose");
            }
        }
    }
}





const controls = document.querySelector("#controls");
const list = document.querySelector("#list");
const orderedCitiesReturn = orderCities(cities);

const select = createSelect(orderedCitiesReturn);
displayCities(orderedCitiesReturn);

select.addEventListener("change", function() {
    markTargetCity(document.querySelectorAll(".city"), select.value);
})

select.addEventListener("change", function() {
    markNeighbors(getTargetCityNeighbors(select.value, distances, cities), document.querySelectorAll(".city"));
})