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

        const business = jsonObject['business'];
        for (let i = 0; i, i < business.length; i++) {

            let card = document.createElement('div');
            let image = document.createElement('img');
            let part1 = document.createElement('div')
            let name = document.createElement('h2');
            let phone = document.createElement('p');
            let website = document.createElement('a');
            let part2 = document.createElement('div')
            let address = document.createElement('p');
            let time = document.createElement('p');

            image.setAttribute('src', 'images/' + business[i].photo);
            image.setAttribute('class', 'card_logo');
            image.setAttribute('alt', 'logo image');
            part1.setAttribute('class', 'part_1');
            name.textContent = business[i].name;
            name.setAttribute('class', 'name');
            phone.textContent = business[i].phone;
            phone.setAttribute('class', 'number');
            website.textContent = "Visit the Website";
            website.setAttribute('class', 'link');
            website.setAttribute('href', business[i].website);
            part2.setAttribute('class', 'part_2');
            address.textContent = business[i].address;
            address.setAttribute('class', 'address_1');
            time.textContent = business[i].time;
            time.setAttribute('class', 'time');

            card.appendChild(image);
            card.appendChild(part1);
            card.appendChild(part2);
            part1.appendChild(name);
            part1.appendChild(phone);
            part1.appendChild(website);
            part2.appendChild(address);
            part2.appendChild(time);

            document.querySelector('.cards').appendChild(card);

        }
    });