// carousel start

import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        centeredSlides: false,
       
        paginationClickable: true,
        

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },

     
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


// carousel end here


// <!-- Return to Top -->

let btnScrollToTop = document.getElementById('btnScrollToTop');

window.addEventListener('scroll', () => {
    scrollFunction();
})


function scrollFunction() {
  
    if( document.documentElement.scrollTop > 20 || document.body.scrollTop > 20)
    {
        btnScrollToTop.style.display = "block";
    } 
    else
    {
        btnScrollToTop.style.display = "none";
    }

}

btnScrollToTop.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
})

// Return to Top end here    
    
   






import { navbar , footer  } from "../components/allPart.js";
// console.log(navbar)
document.querySelector('#home-nav').innerHTML = navbar();

document.querySelector('#home-footer').innerHTML = footer();

