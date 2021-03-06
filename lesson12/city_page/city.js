//for the menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}


const URL_events = "https://katekosm.github.io/lesson12/home_page/city.json";

fetch(URL_events)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == 'Saint Petersburg') {
                let events = towns[i].events;
                for (let i = 0; i < events.length; i++) {
                    let event = document.createElement('p');
                    event.innerHTML = events[i];
                    document.querySelector('.events').appendChild(event);
                    // text.setAttribute('class', 'events_p');
                }
            }
        }
    });


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

// for images
const images = document.querySelectorAll("[data-src]");

function preLoadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }

    img.src = src;
}


const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const imgObserver = new IntersectionObserver((entries, imageObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preLoadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions)

images.forEach(image => {
    imgObserver.observe(image);
})


$(function() {
    $('.scrollup').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
})

$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});