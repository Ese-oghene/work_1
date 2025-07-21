'use strict';

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length;
            i < len; i++){
                elements[i].addEventListener(eventType, callback);
            }
}

/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active")
}

addEventOnElements(navTogglers, "click", toggleNavbar);

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
        header.classList.add("active");
    }else{
        header.classList.remove("active")
    }
});


/**
 * SLIDER
 */

const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function(currentSlider) {
    const sliderContainer = currentSlider.querySelector("[data-slider-container]");

    const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
    const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

     let currentSlidePos = 0;

     const moveSliderItem = function () {
        sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`
     }

       /**
   * NEXT SLIDE
   */

  const slideNext = function () {
    const slideEnd = currentSlidePos >= sliderContainer.childElementCount - 1;

    if (slideEnd) {
      currentSlidePos = 0;

    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

   /**
   * PREVIOUS SLIDE
   */

   const slidePrev = function () {
    if (currentSlidePos <= 0) {
        currentSlidePos = sliderContainer.childElementCount -1;
    }else {
        currentSlidePos--;
    }

    moveSlideItem();
   }

   sliderPrevBtn.addEventListener("click", slidePrev)

   const dontHaveExtraItem = sliderContainer.childElementCount <= 1;
   if (dontHaveExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
   }

}

for (let i = 0, len = sliders.length; i < len; i++){
    initSlider(sliders[i])
}

/**
 * ACCORDION
 */

const accordions = document.querySelectorAll("[data-accordion]");

let lastActiveAccordion = accordions[0];

const initAccordion = function (currentAccordion) {

  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  const expandAccordion = function () {
    if (lastActiveAccordion && lastActiveAccordion !== currentAccordion) {
      lastActiveAccordion.classList.remove("expanded");
    }

    currentAccordion.classList.toggle("expanded");

    lastActiveAccordion = currentAccordion;
  }

  accordionBtn.addEventListener("click", expandAccordion);

}

for (let i = 0, len = accordions.length; i < len; i++) { initAccordion(accordions[i]); }



/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true     
   })

    /* -- HOME -- */
    // sr.reveal('.featured-text-card',{})
    sr.reveal('.featured-name',{delay: 100})
    sr.reveal('.hero-title',{delay: 200})
    sr.reveal('.hero-text',{delay: 200})
    sr.reveal('.btn-primary',{delay: 200})
    sr.reveal('.img-holder',{delay: 300})
    

  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  
