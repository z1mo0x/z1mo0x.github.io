const priceAttemtion = document.querySelector('.price__attemption');
const burger = document.querySelector('.header__burger');
const list = document.querySelector('.header__list');

priceAttemtion.addEventListener('click', () => {
    priceAttemtion.classList.add('deleted')
});

burger.addEventListener('click', () => {
    list.classList.toggle('active')
});

