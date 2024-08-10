
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.nav-links');

menuIcon.addEventListener('click',() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});
