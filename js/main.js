const priceAttemtion = document.querySelector('.price__attemption');
const burger = document.querySelector('.header__burger');
const list = document.querySelector('.header__list');
const html = document.documentElement;
const body = document.body;

priceAttemtion.addEventListener('click', () => {
    priceAttemtion.classList.add('deleted')
});

burger.addEventListener('click', () => {
    html.classList.toggle('scroll__off');
    body.classList.toggle('scroll__off');
    html.scrollTo(0, 0)
    html.scrollBy(0, 0)
    burger.classList.toggle('active_burger');
    list.classList.toggle('active');
})

