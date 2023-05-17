let projects = document.querySelector(".project-page");
let allSpan = document.querySelectorAll(".spannn span");
let alltxt = document.querySelectorAll(".txt-row span")

window.onscroll = function () {
    allSpan.forEach((span) => {
        span.style.width = span.dataset.width;
    })
    alltxt.forEach((text) => {
        text.style.backgroundColor = " rgb(52 135 233 / 84%)";
    }) 
}