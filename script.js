document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const svgWidth = 1500; // Adjust to the width of your SVG

    // Clone the SVG for infinite scrolling
    carousel.innerHTML += carousel.innerHTML;

    // Adjust animation duration based on SVG width and desired speed
    const animationDuration = 20; // seconds
    carousel.style.animationDuration = `${animationDuration}s`;
});
