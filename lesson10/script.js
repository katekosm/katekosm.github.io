// for the banner
const banner = document.querySelector('.banner');
const dayOfWeek = new Date().getDay();
if (dayOfWeek === 5) {
    banner.classList.add('visible');
}



// for the menu
function toggleMenu() {
    // console.log(document.getElementById("primaryNav").class);
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


// for the current weather summary
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=0dcb04ddb341c8d129b99e8b866b705f";

fetch(apiURL)
    .then((response) => response.json())
    .then((town) => {
        // console.log(town);
        let description = town.weather[0].description;
        document.getElementById('currently').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
        document.getElementById('temp').innerHTML = Math.round(town.main.temp);
        document.getElementById('windchill').innerHTML = Math.round(town.main.temp);
        document.getElementById('humidity').innerHTML = town.main.humidity;
        document.getElementById('windspeed').innerHTML = Math.round(town.wind.speed);
    });

// 5 day forecast

const apiURL_forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=0dcb04ddb341c8d129b99e8b866b705f"

fetch(apiURL_forecast)
    .then(response => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const forecastData = jsObject.list.filter((element) => element.dt_txt.includes('18:00:00'));

        console.log(forecastData);

        const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

        let day = 0;
        forecastData.forEach(forecast => {
            let x = new Date(forecast.dt_txt);
            document.getElementById('temp' + (day + 1)).textContent = Math.round(forecast.main.temp) + ' °F';
            document.getElementById('img' + (day + 1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
            document.getElementById('img' + (day + 1)).alt = forecast.weather[0].description
            document.getElementById('day' + (day + 1)).textContent = weekdays[x.getDay()];
            day++;
        });
    });