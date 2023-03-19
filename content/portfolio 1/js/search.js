const search = document?.querySelector('[search-form]');
const active = document?.querySelector('[search-button]');


active?.addEventListener('click', () => {
    search?.classList.toggle('search--visible');
});