//for the menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

// for the current weather summary
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=498817&units=metric&APPID=3689d576134d2fb6825e2a57edc680dc";

fetch(apiURL)
    .then((response) => response.json())
    .then((town) => {
        let description = town.weather[0].description;
        document.getElementById('currently').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
        document.getElementById('temp').innerHTML = Math.round(town.main.temp);
        document.getElementById('humidity').innerHTML = town.main.humidity;
    });


// 3 day forecast

const apiURL_forecast = "https://api.openweathermap.org/data/2.5/forecast?id=498817&units=metric&APPID=3689d576134d2fb6825e2a57edc680dc"

fetch(apiURL_forecast)
    .then(response => response.json())
    .then((jsObject) => {
        const forecastData = jsObject.list.filter((element) => element.dt_txt.includes('12:00:00'));
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let day = 0;
        forecastData.forEach(forecast => {
            let x = new Date(forecast.dt_txt);
            document.getElementById('temp' + (day + 1)).textContent = Math.round(forecast.main.temp) + '°F';
            document.getElementById('img' + (day + 1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
            document.getElementById('img' + (day + 1)).alt = forecast.weather[0].description
            document.getElementById('day' + (day + 1)).textContent = weekdays[x.getDay()];
            if (day == 2) return true;

            day++;
        });
    });


const URL_events = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(URL_events)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == 'Soda Springs') {
                let events = towns[i].events;
                for (let i = 0; i < events.length; i++) {
                    let event = document.createElement('p');
                    event.innerHTML = events[i];
                    document.querySelector('.events').appendChild(event);
                }
            }
        }
    });