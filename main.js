window.addEventListener('scroll', () => {
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0);
});
//show or hide asnswer
const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle("open");
    });
});
//open and close nav menu 
const open = document.querySelector(".open-nav-menu");
const close = document.querySelector(".close-nav-menu");
const navMenu = document.querySelector(".nav-menu");
open.addEventListener('click', () => {
    open.style.display = "none";
    navMenu.style.display = "flex";
    close.style.display = "inline-block";
});
const closeNav = () => {
    open.style.display = "inline-block";
    navMenu.style.display = "none";
    close.style.display = "none";
};
close.addEventListener('click', closeNav);