const slides = document.querySelectorAll('.slide');
const right = document.getElementById('right');
const left = document.getElementById('left');
const carousel = document.getElementById('carousel');

const SLIDES_COUNT = slides.length;

left.addEventListener('click', () => {
    current_slide++;
    if (current_slide > SLIDES_COUNT - 1) {
        current_slide = 0;
    }
    updateCarousel();
});
right.addEventListener('click', () => {
    current_slide--;
    if (current_slide > SLIDES_COUNT) {
        current_slide = 0;
    }
    updateCarousel();
});

function updateCarousel() {
    carousel.style.transform = `translate X(${current_slide * slides[0]})`
}