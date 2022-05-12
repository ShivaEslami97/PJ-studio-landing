/////// mobile menu
const mobileBtn = document.querySelector(".header__mobile-btn");
const navMenu = document.querySelector(".responsive-menu");

// Show and Hide Navbar Menu
mobileBtn.addEventListener("click", () => {
    mobileBtn.classList.toggle("is-active");
    navMenu.classList.toggle("is-active");
});

///// scroll menu
window.onscroll = function () {
    myFunction()
};
let header = document.getElementById("header");
let sticky = header.offsetTop;
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

///// preloader
let overlay = document.getElementById("preloader");
window.addEventListener('load', function () {
    overlay.style.display = 'none';
})