const menu_button = document.getElementById("menu-button")
const mobile_btn = document.getElementById("mobile-nav")

menu_button.addEventListener('click', ()=> {
    mobile_btn.classList.toggle('hidden')
})