/* script.js */
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}
//COMIC PAGE
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function changeSlide(step) {
    slides[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");

    currentIndex = (currentIndex + step + slides.length) % slides.length;

    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
}

function goToSlide(index) {
    slides[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");

    currentIndex = index;

    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
}

