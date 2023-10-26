const container = document.querySelector('.slider_container');
const elements = document.querySelectorAll('.slider_element');
const elementWidth = elements[0].offsetWidth;
const animationSpeed = 2000; // Czas trwania animacji w milisekundach
const interval = 300; // Interwał między przesunięciami w milisekundach

let currentIndex = 0;

function moveSlider() {
    container.style.transition = `none`;
    currentIndex++;

    if (currentIndex >= elements.length) {
        container.style.transform = `translateX(0)`;
        currentIndex = 1;
    } else {
        container.style.transform = `translateX(-${elementWidth * currentIndex}px)`;
    }

    setTimeout(() => {
        container.style.transition = `transform ${animationSpeed}ms ease-in-out`;
    }, 10);
}

setInterval(moveSlider, interval);