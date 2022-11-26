// SELECTORS
const body = document.querySelector("body")
const burgerBtn = document.querySelector(".burger-btn")
const closeBtn = document.querySelector(".close-btn")
const leftNav = document.querySelector(".left-nav")

burgerBtn.addEventListener("click", ()=> {
    leftNav.classList.add("left-nav-toggler")
})
closeBtn.addEventListener("click", ()=> {
    leftNav.classList.remove("left-nav-toggler")
})