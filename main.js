// preloader 
const load = document.getElementById("loading");
function preloader() {
    load.style.display = "none";
};


// owlCarousel 
$(".carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        },
    }
});


// Hamburger 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
};

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) =>{
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})
