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
    console.log('IM Working');
    
}

hamburger.addEventListener('click', navSlide);
navLinks.forEach(e => {
    e.addEventListener('click', navClose);
});

// /*==================== ACCORDION SKILLS ====================*/
// const skillsContent = document.getElementsByClassName('skills-content'),
// skillsHeader = document.querySelectorAll('.skills-header');

// function toggleSkills() {
//     let itemClass = this.parentNode.className

//     for(let i = 0; i < skillsContent.length; i++) {
//         skillsContent[i].className = 'skills-content skills-close'
//     }
//     if(itemClass === 'skills-content skills-close') {
//         this.parentNode.className = 'skills-content skills-open'
//     }
// }

// skillsHeader.forEach((el) => {
//     el.addEventListener('click',toggleSkills)
// })


// /*==================== SERVICES MODAL ====================*/
// const modalView = document.querySelectorAll('.services-modal'),
// modalBtns = document.querySelectorAll('.services-button'),
// modalCloses = document.querySelectorAll('.services-modal-close');

// let modal = function(modalClick) {
//     modalView[modalClick].classList.add('active-modal')
// }

// modalBtns.forEach((modalBtn, i) => {
//     modalBtn.addEventListener('click', () => {
//         modal[i]
//     })
// })


// modalCloses.forEach((modalClose) => {
//     modalClose.addEventListener('click', () =>{
//         modalView.forEach((modalView) => {
//             modalView.classList.remove('active-modal')
//             console.log('hello');
//         })
//     })
// })
/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CONTACT ====================*/ 
/*
const myForm = document.querySelector('#myForm');
const contactName = document.querySelector('#name');
const contactEmail = document.querySelector('#email');
const contactMessage = document.querySelector('#message');
const submitBtn = document.querySelector('.submit-btn');
const msg = document.querySelector('.msg');




const onSubmit = (e) => {
    e.preventDefault();

    if(contactName.value === '' || contactEmail.value === '' || contactMessage.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please Input Fields';
        myForm.classList.add('form-error');

        setTimeout(() => {
            msg.classList.remove('error');
            msg.innerHTML = '';
            myForm.classList.remove('form-error');
        }, 3000);
    } else {
        msg.classList.add('success');
        msg.innerHTML = 'Thank You!';

        setTimeout(() => {
            msg.remove();
        }, 3000);
    }
}
    

myForm.addEventListener('submit', onSubmit);

*/

 
/*==================== SHOW SCROLL UP ====================*/ 

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >=560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);




  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});


