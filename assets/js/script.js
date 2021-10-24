'use strict';

// // MENU SHOW AND HIDE
const navslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-item');

    burger.addEventListener('click', () => {

        //toggle
        nav.classList.toggle('nav-active');

        //animate

        navLinks.forEach((link,index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }

            console.log(link,index);
        })

        //burger animation {
            burger.classList.toggle('toggle');
        
    })


}

navslide();


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




/*==================== SHOW SCROLL UP ====================*/ 

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >=560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp)