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