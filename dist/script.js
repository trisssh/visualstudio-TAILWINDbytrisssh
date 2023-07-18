const toggle = document.querySelector('.toggle-menu');
const menu = document.querySelector('nav ul');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    menu.classList.toggle('open');
})