const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    if (desktopMenu.classList.contains('hidden')) {
        desktopMenu.classList.remove('hidden');
    } else {
        desktopMenu.classList.add('hidden');
    }

    /*desktopMenu.classList.toggle('hidden');*/
}