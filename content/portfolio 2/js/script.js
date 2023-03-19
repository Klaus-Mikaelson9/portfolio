new Swiper('.swiper__content', {
    loop: true,
    speed: 550,

    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const defaultOffset = 50;
const header = document.querySelector('.header');
const headerList = document.querySelector('.header__list');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', () => {
    if (!headerList.classList.contains('active')) {
        if(scrollPosition() > defaultOffset) {
            //scroll down
            header.style.backgroundColor = '#262626d9';
            document.querySelector('.header__content').style.padding = '20px 40px';
        }
        else if(scrollPosition() < defaultOffset){
            //scroll up
            header.style.backgroundColor = 'transparent';
            document.querySelector('.header__content').style.padding = '40px';
        }
    }
    else {
        header.style.backgroundColor = 'transparent';
        document.querySelector('.header__content').style.padding = '40px';
    }
});

const menuTabs = document.querySelectorAll('.menu__tab');
const menuBodies = document.querySelectorAll('.menu__body');

for (let i = 0; i < menuTabs.length; i++) { 
    menuTabs[i].addEventListener('click', () => {
        menuTabs.forEach((e) => { e.classList.remove('active') });
        menuBodies.forEach((e) => { e.classList.remove('active') });
        menuTabs[i].classList.add('active');
        menuBodies[i].classList.add('active');
    });
}

const menuBtn = document.querySelector('.header__menu__btn');
const body = document.body;

function toggleHeaderMenu() {
    menuBtn.classList.toggle('active');
    headerList.classList.toggle('active');
    body.classList.toggle('lock');

    if (headerList.classList.contains('active')) {
        header.style.backgroundColor = 'transparent';
        document.querySelector('.header__content').style.padding = '40px';
    } else if (!headerList.classList.contains('active') && scrollPosition() > defaultOffset) {
        header.style.backgroundColor = '#262626d9';
        document.querySelector('.header__content').style.padding = '20px 40px';
    }
}

menuBtn.addEventListener('click', () => {
    toggleHeaderMenu();
});

const headerMenuLinks = document.querySelectorAll('.header__item');

for (const link of headerMenuLinks) {
    link.addEventListener('click', () => {
        if (headerList.classList.contains('active')) {
            toggleHeaderMenu();
        };
    });
}
