/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME SWIPER ===============*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  centeredSlides: false,
  freeMode: true,
  loop: 'true',
  spaceBetween: 30,
 
  pagination: {
    el: ".swiper-pagination",
  },
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    
    // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
    const header = document.getElementById('header');

    const end = document.getElementById('end');
    var elemRect = end.getBoundingClientRect();
    const scrollDown = document.getElementById('scroll-down');
    if (this.scrollY<=45){
        scrollDown.classList.remove('d-none');
        
    } else {
        scrollDown.classList.add('d-none');
    }
    if (window.outerWidth>767) {
    if (prevScrollY<this.scrollY){
        header.classList.add('test-dishow');
        header.classList.remove('test-show');
    }
    else {
        header.classList.add('test-show');
        header.classList.remove('test-dishow');
        
    }
}
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 400,
    // reset: true
})
sr.reveal(`.benefit-container, benefit`,{origin: 'bottom',interval:150});
sr.reveal(`.about-section, .about-content`,{origin: 'top',interval:50, reset: true});
sr.reveal(`.mySwiper, .swiper-srapper`,{interval:150, reset: true})
sr.reveal(`.category__data, .trick__content, .footer__content`,{interval: 100});
sr.reveal(`.about__data, .discount__img`,{origin: 'left'});
sr.reveal(`.about__img, .discount__data`,{origin: 'right'});

const steps = document.querySelectorAll(".step");
const timeline = document.querySelector(".timeline");
const line = document.querySelector(".line");
let prevScrollY = window.scrollY;
let downDirection;
let full = false;
let set = 0;
const targetY = window.innerHeight;

function scrollHandler(e) {
  const { scrollY } = window;
  downDirection = scrollY < prevScrollY;
  const timelineRect = timeline.getBoundingClientRect();
  const lineRect = line.getBoundingClientRect();
  const remToPx = parseInt(getComputedStyle(document.documentElement).fontSize);

  // distance from top of timeline to bottom of window
  const dist = targetY - timelineRect.top;
  const lineDist = dist - 7 * remToPx;

  if (!downDirection && !full) {
    set = Math.max(set, lineDist);
    line.style.bottom = `calc(100% - ${set}px)`;
  }

  if (lineDist > timeline.offsetHeight - 7 * remToPx && !full) {
    line.style.bottom = "7rem";
    full = true;
  }

  steps.forEach((item) => {
    const rect = item.getBoundingClientRect();

    if (rect.top + item.offsetHeight < targetY) {
      item.classList.add("show-me");
    }
  });

  prevScrollY = window.scrollY;
}

scrollHandler();
window.addEventListener("scroll", scrollHandler);



const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION

const end = document.querySelector("#end");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(intro, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 600,
  offset: 2800

})
  .setTween(textAnim)
  .addTo(controller);
  const textAnim1 = TweenMax.fromTo(text, 3, { opacity: 0 }, { opacity: 1 });

  let scene3 = new ScrollMagic.Scene({
    duration: 600,
    offset: 1500
  
  })
    .setTween(textAnim1)
    .addTo(controller);
//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;

  video.currentTime = delay;
}, 23.3);