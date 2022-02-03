'use strict';
// Variables
const mobileView = document.querySelector('.mobile-view');
const hamburger = document.querySelector('.hamburger-menu');

const body = document.querySelector('body');

// // MENU SHOW AND HIDE
// function navSlide() {
//     hamburger.classList.toggle('active');
//     mobileView.classList.toggle('active');

//     if(hamburger.classList.contains('active')) {
//         body.style.overflowY = `hidden`;
//     } else {
//         body.style.overflowY = `unset`;
//     }
// }

// function navClose() {

//     hamburger.classList.toggle('active');
//     mobileView.classList.toggle('active');

//     if(hamburger.classList.contains('active')) {
//         body.style.overflowY = `hidden`;
//     } else {
//         body.style.overflowY = `unset`;
//     }
    
// // }
const navLinks = document.querySelectorAll('.nav-links');

function navOpenClose() {
    hamburger.classList.toggle('active');
    mobileView.classList.toggle('active');
}

function navLinksClickEvent() {
    hamburger.classList.toggle('active');
    mobileView.classList.toggle('active');
}

hamburger.addEventListener('click', navOpenClose);
navLinks.addEventListener('click', navLinksClickEvent)

// SCROLL UP FUNCTION
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >=560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);







