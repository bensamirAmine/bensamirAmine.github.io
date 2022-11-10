const navToggle = document.querySelector('.nav-toggle');
const myWorkToggle = document.querySelector('.my-work__btn');
const navLinks = document.querySelectorAll('.nav__link');

myWorkToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('my-work-open');
})
navToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('nav-open');
})
navLinks.forEach(link =>{
    link.addEventListener('click',()=>{
        document.body.classList.remove('nav-open');
    })
})