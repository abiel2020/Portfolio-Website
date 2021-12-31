const primaryNav = document.querySelector('.primary-nav');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    console.log(visibility);

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        console.log(visibility);
        return;
    } else if (visibility === "true") {
        console.log(visibility);
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        navButton.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
        navButton.classList.remove("sticky")
    }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };

// Get the navbar
var navbar = document.getElementById("navBar");
var navButton = document.getElementById("navButton");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
var sticky = navButton.offsetTop;