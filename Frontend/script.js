const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();

        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && navMenu.classList.contains('active')) {
        closeMenu();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});