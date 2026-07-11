const toggle = document.getElementById('navToggle');
const menu = document.getElementById('navMenu');

toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('active');
    toggle.classList.toggle('active');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});