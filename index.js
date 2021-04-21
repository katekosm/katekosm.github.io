const yearElement = document.querySelector("#year");
yearElement.innerText = new Date().getFullYear();

const dayName = 'Wednesday';
const monthName = 'April';
const year = '2021';
const d = new Date();

const fulldate = `${dayName}, ${d.getDate()}, ${monthName} ${year}`;
