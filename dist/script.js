const toggle = document.querySelector('.toggle-menu');
const menu = document.querySelector('.header__nav');


toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    menu.classList.toggle('open');
})

///////////////////////////////////////////////////////////
const dropdown = document.querySelector('.dropdown-menu');
const drop = document.querySelector('.dropdown__nav');

dropdown.addEventListener('click', () => {
    dropdown.classList.dropdown('open');
    drop.classList.dropdown('open');
})
//////////////////////////////////////////////////////

var slider = tns({
         container: '.reviews__slider',
         items: 1,
         slideBy: 'page',
         autoplay: false,
         controlsText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
         nav: false,
})


