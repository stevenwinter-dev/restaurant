const hamburger = document.querySelector('.burger');
const nav = document.querySelector('.mobile-nav');
const navLinks = document.querySelector('.mobile-nav-links');
const links = document.querySelectorAll('.mobile-nav-links li');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('flex');
}) 