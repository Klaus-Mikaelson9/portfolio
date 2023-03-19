const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const closed = document?.querySelector('[data-closed]');

closed?.addEventListener('click', () => {
    burger?.classList.remove('burger--active');
    nav?.classList.remove('nav--visible');
});

burger?.addEventListener('click', () => {
    burger?.classList.toggle('burger--active');
    nav?.classList.toggle('nav--visible');
});
