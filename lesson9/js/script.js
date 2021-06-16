


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


// for the cards
// const requestURL="https://byui-cit230.github.io/weather/data/towndata.json";

// fetch(requestURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (jsonObject) {
//         console.table(jsonObject);
     
//         const towns = jsonObject['towns'];
//         for (let i = 0; i , i < towns.length; i++ ) {
//             if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
//             let card = document.createElement('section');
//             let name = document.createElement('h2');
//             let image = document.createElement('img');
//             let motto = document.createElement('h3');
//             let yearFounded = document.createElement('p');
//             let currentPopulation = document.createElement('p');
//             let averageRainfall = document.createElement('p');
//             let events = document.createElement('div');

//             name.textContent = towns[i].name;
//             motto.textContent = towns[i].motto;
//             motto.yearFounded = 'Year Founded: ' + towns[i].yearFounded;
//             motto.currentPopulation = 'Current Population: ' + towns[i].currentPopulation;
//             motto.averageRainfall = 'Average Rainfall: ' + towns[i].averageRainfall + ' ' + 'in.';
//             image.setAttribute('src', '/lesson9/images/' + towns[i].photo);
//             image.setAttribute('alt', towns[i].name);
//             events.setAttribute('id', 'events');

//             card.appendChild('events');
//             card.appendChild('image');
//             document.querySelector('div.cards').appendChild(card);
//             }
//         }
//     });


const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function (response) {
   return response.json();
})
.then(function (jsonObject) {
   //console.table(jsonObject);  // temporary checking for valid response and data parsing
   const towns = jsonObject['towns'];
  
   for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
      let card = document.createElement('section');
      let name = document.createElement('h2');
      let motto = document.createElement('h4');
      let image = document.createElement('img');
      let yearFounded = document.createElement('p');
      let currentPopulation = document.createElement('p');
      let averageRainfall = document.createElement('p');
      let details = document.createElement('div');
      name.textContent = towns[i].name;
      motto.textContent = towns[i].motto;
      currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;
      averageRainfall.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall + ' ' + 'in.';
      yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
      image.setAttribute('src', '/lesson9/images/' + towns[i].photo);
      image.setAttribute('alt', towns[i].name);
      details.setAttribute('id', 'details');
      card.appendChild(details);
      card.appendChild(image);
      details.appendChild(name);
      details.appendChild(motto);
      details.appendChild(yearFounded);
      details.appendChild(currentPopulation);
      details.appendChild(averageRainfall);
      document.querySelector('div.cards').appendChild(card);
      }
   }
});

