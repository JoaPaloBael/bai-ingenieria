const navIcon = document.querySelector('.nav__icon');
const navContainer = document.querySelector('.nav__container');

navIcon.addEventListener('click', function(){
    navIcon.classList.toggle('rotation');
    navContainer.classList.toggle('collapse');
    navContainer.classList.toggle('animate__animated');
    navContainer.classList.toggle('animate__fadeInDown');
})