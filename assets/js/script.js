'use strict';
// Variables
const mobileView = document.querySelector('.mobile-view');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-links');
const body = document.querySelector('body');

// // MENU SHOW AND HIDE
function navSlide() {
    hamburger.classList.toggle('active');
    mobileView.classList.toggle('active');

    if(hamburger.classList.contains('active')) {
        body.style.overflowY = `hidden`;
    } else {
        body.style.overflowY = `unset`;
    }
}

function navClose() {

    hamburger.classList.toggle('active');
    mobileView.classList.toggle('active');

    if(hamburger.classList.contains('active')) {
        body.style.overflowY = `hidden`;
    } else {
        body.style.overflowY = `unset`;
    }
    
}


hamburger.addEventListener('click', navSlide);
navLinks.forEach(e => {
    e.addEventListener('click', navClose);
});


// SCROLL UP FUNCTION
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >=560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);







