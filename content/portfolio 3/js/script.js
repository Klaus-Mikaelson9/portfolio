const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.header__navigation');
const body = document.querySelector('body');

if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('lock');
    })
}