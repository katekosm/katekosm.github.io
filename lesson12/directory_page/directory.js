//for the menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

// for current date in the footer

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
let infoDate = new Date();
let string = document.lastModified;
let dayName = days[infoDate.getDay()];
let monthName = months[infoDate.getMonth()];
let year = infoDate.getFullYear();
let fullDate = `${dayName}, ${infoDate.getDate()} ${monthName} ${year}.`;
let lUpdated = `Last Update: ${string}.`;
document.querySelector("#currentdate").textContent = fullDate;
document.querySelector("#lastupdated").textContent = lUpdated;
document.querySelector("#currentyear").textContent = year;



// business cards


// for the cards
const requestURL = "https://katekosm.github.io/lesson12/directory_page/directory.json";

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);

        const towns = jsonObject['towns'];
        for (let i = 0; i, i < towns.length; i++) {
            if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
                let text = document.createElement('div');
                let card = document.createElement('section');
                let name = document.createElement('h2');
                let image = document.createElement('img');
                let motto = document.createElement('h3');
                let yearFounded = document.createElement('p');
                let currentPopulation = document.createElement('p');
                let averageRainfall = document.createElement('p');

                name.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
                currentPopulation.textContent = 'Current Population: ' + towns[i].currentPopulation;
                averageRainfall.textContent = 'Average Rainfall: ' + towns[i].averageRainfall + ' ' + 'in.';
                image.setAttribute('src', 'images/' + towns[i].photo);
                image.setAttribute('alt', towns[i].name);
                text.setAttribute('class', 'text');

                text.appendChild(name);
                text.appendChild(motto);
                text.appendChild(yearFounded);
                text.appendChild(currentPopulation);
                text.appendChild(averageRainfall);
                card.appendChild(text);
                card.appendChild(image);
                document.querySelector('.cards').appendChild(card);
            }
        }
    });