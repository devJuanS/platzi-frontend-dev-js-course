const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hambMenu = document.querySelector('.menu');       // Hamburguer menu in mobile version
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

// Iteration with account menu in desktop version

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    hideElement(aside);
    
    // JuanDC solution
    desktopMenu.classList.toggle('hidden');
}

// Iteration with menu in mobile version

hambMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    hideElement(aside);
    mobileMenu.classList.toggle('hidden');
}

// Iteration with shopping cart icon

cartIcon.addEventListener('click', toggleAsideContent);

function toggleAsideContent() {
    hideElement(desktopMenu);
    hideElement(mobileMenu);

    aside.classList.toggle('hidden');
}

// Function to apply the class selector hidden to hide the element
// @element: selector required to be hidden
function hideElement(element) {
    const isHiddenElement = element.classList.contains('hidden');

    if (!isHiddenElement) {
        element.classList.add('hidden');
    }
}