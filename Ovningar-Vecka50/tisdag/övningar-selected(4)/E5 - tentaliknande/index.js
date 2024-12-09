const orderCities = (cities) => {
    let orderedCities = [];
    for (let city of cities) {
        orderedCities.push(city.name);
    }

    orderedCities = orderedCities.sort();

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
        createOption.value = city;
        createOption.textContent = city;
        select.appendChild(createOption);
    }

    return document.querySelector("select");
}

const displayCities = (cities) => {
    for (let city of cities) {
        let cityDiv = document.createElement("div");
        cityDiv.classList.add("city");
        cityDiv.textContent = city;
        list.appendChild(cityDiv);
    }
}

const markTargetCity = (allCities, target) => {
    for (let city of allCities) {
        city.classList.remove("mark");
    }

    for (let city of allCities) {
        if (city.textContent === target) {
            city.classList.add("mark");
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