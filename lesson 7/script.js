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


// let imagesToLoad = document.querySelectorAll('img[data-src]');
// const loadImages = (image) => {
//   image.setAttribute('src', image.getAttribute('data-src'));
//   image.onload = () => {
//     image.removeAttribute('data-src');
//   };
// };

// const imgOptions = {
//   threshold: 0.5,
//   rootMargin: "0px 0px -200px 0px"
// };

// if('IntersectionObserver' in window) {
//   const observer = new IntersectionObserver((items, observer) => {
//     items.forEach((item) => {
//       if(item.isIntersecting) {
//         loadImages(item.target);
//         observer.unobserve(item.target);
//       }
//     });
//   }, imgOptions);


//   imagesToLoad.forEach((img) => {
//     observer.observe(img);
//   });
// } else {
//   imagesToLoad.forEach((img) => {
//     loadImages(img);
//   });
// }






// const images = document.querySelectorAll("[data-src]");

// const imgOptions = {
//     threshold: 0,
//     rootMargin: "0px 0px 50px 0px"
// };

// const loadImages = (image) => {
//     image.setAttribute('src', image.getAttribute('data-src'));
//     image.onload = () => {image.removeAttribute('data-src')};
// };


// if('IntersectionObser' in Window) {
//     const imgObserver = new IntersectionObsserver((items, observer) => {
//         items.forEach((item) =>{

//         }
//     }, imgOptions);

//     images.forEach((img) => {
//         imgObserver.observe(img);
//     });
// }
// else {
//     images.forEach((img) => {
//         loadImages(img);
//     });
// }