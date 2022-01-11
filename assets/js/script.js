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

  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional



  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDlXIAcdi3WEPcV4eofroA_KltjtfzVmv0",
    authDomain: "thetymtravellr.firebaseapp.com",
    databaseURL: "https://thetymtravellr-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "thetymtravellr",
    storageBucket: "thetymtravellr.appspot.com",
    messagingSenderId: "9740195479",
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    //Get value
    let name = getInputVal('name');
    let email = getInputVal('email');
    let message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get form value
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, message){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email: email,
      message: message
    });
  }
    // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

/*==================== SHOW SCROLL UP ====================*/ 

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >=560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);