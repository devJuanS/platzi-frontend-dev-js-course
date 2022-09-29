const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hambMenu = document.querySelector('.menu');       // Hamburguer menu in mobile version
const mobileMenu = document.querySelector('.mobile-menu');

// Iteration with account menu in desktop version

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    /*
    // My first solution
    if (desktopMenu.classList.contains('hidden')) {
        desktopMenu.classList.remove('hidden');
    } else {
        desktopMenu.classList.add('hidden');
    }
    */
    // JuanDC solution
    desktopMenu.classList.toggle('hidden');
}

// Iteration with menu in mobile version

hambMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
}