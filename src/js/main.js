const btnMenu = document.querySelector('.nav-mobile-btn');
const navMenu = document.querySelector('.nav-mobile-menu');
const footerYear = document.querySelector('.footer-year');

function showMenu() {
    navMenu.classList.toggle('show')
};

const currentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
currentYear();

btnMenu.addEventListener('click', showMenu);