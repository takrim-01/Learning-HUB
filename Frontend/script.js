const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

function scrollToSection(selector) {
    const el = document.querySelector(selector);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
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
            scrollToSection(href);
        }
    });
});


document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-target]');
    if (target) {
        scrollToSection(target.getAttribute('data-target'));
    }
});


document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && navMenu.classList.contains('active')) {
        closeMenu();
    }
});


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});

document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-target]');
    if (target) {
        const dest = target.getAttribute('data-target');
        if (dest.startsWith('#')) {
            scrollToSection(dest);
        } else {
            window.location.href = dest;
        }
    }
});