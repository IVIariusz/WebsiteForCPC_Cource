document.addEventListener('DOMContentLoaded', () => {
    const cardContainers = document.querySelectorAll('.card-container');

    cardContainers.forEach(container => {
        let currentIndex = 0;
        container.addEventListener('mouseover', () => {
            const card = container.querySelector('.card');
            const isFlipped = window.getComputedStyle(card).transform.includes('matrix(-1');
            if (isFlipped) {
                const liElements = container.querySelectorAll('.back ul li');
                liElements.forEach(li => li.classList.remove('show'));
                liElements[currentIndex].classList.add('show');
                currentIndex = (currentIndex + 1) % liElements.length;
            }
        });
    });
});
