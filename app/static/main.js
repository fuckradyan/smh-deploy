function ready(){
  if (iOS()) {
    console.log('dats iOS chill')
  } else {
    document.getElementById('welcomevid').removeAttribute('autoplay');

  }
}
function iOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

 document.addEventListener("DOMContentLoaded", ready);
var loader = document.querySelector(".loader");
window.addEventListener("load", vanish);
function vanish(){
  loader.classList.add("vanish");
  setTimeout(() => { loader.classList.add('d-none'); }, 1500);
}
gsap.registerPlugin(MotionPathPlugin);
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
    duration: 800,
    delay: 400,
    // reset: true
})
sr.reveal(`.benefit-container, .benefit`,{origin: 'bottom',interval:150});
sr.reveal(`.welcome-container, .row`,{origin: 'top',interval:50, reset: true});
sr.reveal(`.mySwiper, .swiper-srapper`,{interval:150, reset: true})
sr.reveal(`.category__data, .trick__content, .footer__content`,{interval: 100});
sr.reveal(`.about__img, .discount__data`,{origin: 'right'});
sr.reveal(`.loader-cheese`,{origin: 'bottom'});
sr.reveal(`.moon`,{origin: 'bottom'});
sr.reveal(`.countdown-container`,{origin: 'top'});
sr.reveal(`.faq-list, .faq-list div`,{origin: 'left', interval:50});
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
//UNCOMENT IF IMG PLAN DON'T WORK
// const video = intro.querySelector("video");
const video = intro.querySelector("#welcomevid");
const text = intro.querySelector("h1");
//END SECTION

const end = document.querySelector("#end");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
const videoAnim = TweenMax.fromTo(video, 3, { scale:1 }, { scale: 5, display:"none" }, );
// const videoAnim1 = TweenMax.fromTo(video, 3, { rotation:1 }, { rotation: 15 }, );
//UNCOMENT IF IMG PLAN DON'T WORK
let scene = new ScrollMagic.Scene({
  duration: 1700,
  triggerElement: intro,
  triggerHook: 0
})
.setTween(videoAnim)

  .setPin(intro)
  .addTo(controller);
// let scene_opt = new ScrollMagic.Scene({
//     offset: 1500,
//     duration: 1000,
//     triggerElement: intro,
//     triggerHook: 0
//   })
//   .setTween(videoAnim1)
//     .addTo(controller);
//Text Animation
const textAnim = TweenMax.fromTo(intro, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 300,
  offset: 1900

})
  .setTween(textAnim)
  .addTo(controller);
  const textAnim1 = TweenMax.fromTo(text, 3, { opacity: 0, display:"none" }, { opacity: 1, display:"" });

  let scene3 = new ScrollMagic.Scene({
    duration: 300,
    offset: 1400
  
  })
    .setTween(textAnim1)
    .addTo(controller);
//Video Animation
let accelamount = 0.2;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;

  video.currentTime = delay;
}, 45);
// flying cheese

const rHeight = document.getElementById('Roadmap').offsetHeight;
const rWidth = document.getElementById('Roadmap').offsetWidth;


const tween = new TimelineLite();

tween.add(
  TweenLite.to('.cheese-animated', 1, { scale:0.1,
    motionPath: {
      curviness: 1,
      autoRotate: true,
      path: [
        // {
        //   x: -window.innerHeight/15,
        //   y: window.innerHeight/5
        // },
        {
          x: -rWidth*2.5,
          y: rHeight/0.8
        },
    
      ]
    },
    ease: Power1.easeInOut
  })
);

const cheeseScene = new ScrollMagic.Scene(
  {
triggerElement: '.trick',
duration:2500,
triggerHook: 0.8

  })
  .setTween(tween)
  .addTo(controller);

gsap.timeline()
    .from('.nav__container',{duration:1.2,opacity:0})
    .from('.nav__logo',{opacity:0,scale:0,ease:"back"})
    .from('.nav__list li', {y:-160,stagger:0.1,duration:0.3,ease:"back"})
    .from('.nav__list a', {opacity:0,xPercent:100,stagger:0.1,duration:0.5,ease:"back"})
const tween1 = new TimelineLite();
tween1.add(
  TweenLite.to('.rocket-animated', 1, { scale:10, opacity:5,
    motionPath: {
      curviness: 2,
      autoRotate: true,
      alignOrigin: [0.5, 0.5],
      path: [

        {
          x:rWidth/8,
          y:-rHeight*1,
        },
        // {
        //   x:450,
        //   y:-70,
        // },
        // {
        //   x:400,
        //   y:-50,
        // },
        // {
        //   x:350,
        //   y:-20,
        // },
        // {
        //   x:550,
        //   y:-120,
        // },
        {
          x:1400,
          y:-400
        }
          ]
        },
        ease: Power1.easeInOut
      })
    );
    
    const rocketScene = new ScrollMagic.Scene(
      {
    triggerElement: '.trick',
    offset:1000,
    duration:2000,
    triggerHook: 1
    
      })
      .setTween(tween1)
      .addTo(controller);

function stars(){
  let count = 50;
  let scene = document.querySelector('.scene');
  let i = 0;
  while (i < count){
    let star = document.createElement('i');
    let x = Math.floor(Math.random()* window.innerWidth);
    let y = Math.floor(Math.random()*window.innerHeight);
    let duration = Math.random() * 10;
    let size= Math.floor(Math.random() *4);
    star.style.left = x +'px';
    star.style.top= y + 'px';
    star.style.width = 1 + size + 'px';
    star.style.height = 1 + size + 'px';
    star.style.boxShadow = `0px 0px ${Math.floor(Math.random()*10)}px white`;
    star.style.animationDuration =5 + duration +'s';
    star.style.animationDelay =duration +'s';
    scene.appendChild(star);
    i++;
  }
}
stars();
const countDown = () => {
  const countDate = new Date('Nov 20, 2021 23:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate-now;


  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);
  document.querySelector('.coundown-days').innerText = textDay;
  document.querySelector('.coundown-hours').innerText = textHour;
  document.querySelector('.coundown-minutes').innerText = textMinute;
  document.querySelector('.coundown-seconds').innerText = textSecond;
}

setInterval(countDown, 1000);