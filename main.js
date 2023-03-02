const mobileMenu = document.querySelector('.mobile-menu')
const menu = document.querySelector('.menu')
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const html = document.querySelector("html")

menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex'
    menuBtn.style.display = 'none'
    closeBtn.style.display = 'flex'
    html.style.overflow = "hidden"
})

closeBtn.addEventListener('click', () => {
    menu.style.display = 'none'
    menuBtn.style.display = 'flex'
    closeBtn.style.display = 'none'
    html.style.overflow = "scroll"
})