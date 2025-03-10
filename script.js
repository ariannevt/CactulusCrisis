document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const angelPath = document.querySelector(".angel-path");
    const baddiePath = document.querySelector(".baddie-path");

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

    window.chooseAngel = function () {
        slides[currentIndex].classList.remove("active");
        angelPath.classList.add("active");
        currentIndex = slides.length - 3;
    };

    window.chooseBaddie = function () {
        slides[currentIndex].classList.remove("active");
        baddiePath.classList.add("active");
        currentIndex = slides.length - 1;
    };
});


