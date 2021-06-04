const images = document.querySelectorAll("[data-src]");

function preLoadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
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


// for current date in the footer
const yearElement = document.querySelector("#date");
yearElement.innerText = new Date().toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });


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
