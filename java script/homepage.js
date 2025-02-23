document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.menu-toggle');
    const mainMenu = document.querySelector('.main-menu');
    const search = document.querySelector('.search');
    const wishCart = document.querySelector('.wish-cart');

    toggleButton.addEventListener('click', function() {
        // Toggle the active class on menu items, search bar, wishlist, and bag
        mainMenu.classList.toggle('active');
        search.classList.toggle('active');
        wishCart.classList.toggle('active');

        // Toggle the active class on the toggle button to change the icon
        toggleButton.classList.toggle('active');
    });
});