const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});


function updateNavStyleOnScroll() {
    const nav = document.querySelector('nav');
    const sections = document.querySelectorAll('section');

    let isWhiteBackground = false;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= nav.offsetHeight && rect.bottom > 0) {
            const bgColor = window.getComputedStyle(section).backgroundColor;

            if (bgColor.includes('255, 255, 255')) {
                isWhiteBackground = true;
            }
        }
    });

    if (isWhiteBackground) {
        nav.classList.remove('transparent');
        nav.classList.add('blurred');
        nav.classList.add('dark-text'); 
    } else {
        nav.classList.remove('blurred');
        nav.classList.add('transparent');
        nav.classList.remove('dark-text');
    }
}


window.addEventListener('scroll', updateNavStyleOnScroll);
document.addEventListener('DOMContentLoaded', updateNavStyleOnScroll);
