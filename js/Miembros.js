const slider = document.querySelector('.slider');
const slides = Array.from(document.querySelectorAll('.slide'));
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateSlider() {
    const width = slides[0].clientWidth;
    slider.style.transform = `translateX(${-currentIndex * (width + 20)}px)`;
}

nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 3) {
        currentIndex++;
        updateSlider();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

updateSlider(); // Inicializar la posición del slider