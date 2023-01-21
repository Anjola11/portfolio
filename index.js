
const menubtn =document.querySelector("#menu-btn")
const closebtn =document.querySelector("#close-btn")
const navmenu =document.querySelector(".nav-section ul")
const home =document.querySelector("#home")
const project =document.querySelector("#project")
const about =document.querySelector("#about")
const contact =document.querySelector("#contact")

menubtn.addEventListener('click', () => {
    navmenu.style.display = 'block'
    menubtn.style.display = 'none'
    closebtn.style.display = 'inline-block'
})

closebtn.addEventListener('click', () => {
    navmenu.style.display = 'none'
    menubtn.style.display = 'inline-block'
    closebtn.style.display = 'none'
})

home.addEventListener('click', () => {
    element.classList.add("active");
})
project.addEventListener('click', () => {
    element.classList.add("active");
})
about.addEventListener('click', () => {
    element.classList.add("active");
})
contact.addEventListener('click', () => {
    element.classList.add("active");
})
