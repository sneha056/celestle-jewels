// Function to generate the navigation bar
function generateNavbar() {
    // Create a placeholder element for the navbar
    const navbarPlaceholder = document.createElement('div');
    navbarPlaceholder.innerHTML = `
        <div class="sticky-wrapper" id="navbar">
    <div class="sticky-active">
      <div class="container1 custom-container">
        <div class="row logo-div">
          <div class="col-xl-2 col-md-auto col-auto logo">
            <a href="index.html">
              <img src="images/Celeste Jewels logo.png" alt="LOGO" style="height: 80px;">
            </a>
          </div>
          <div class="col-xl-6 col-md-auto col-auto">
            <!-- Toggle Button -->
            <button class="menu-toggle d-inline-block d-lg-none" aria-label="Toggle navigation">
              <i class="fa fa-bars" style="color: black; "></i> <!-- Font Awesome hamburger icon -->
            </button>

            <!-- Main Menu -->
            <nav class="main-menu">
              <ul>
                <li class="menu-item-has-children">
                  <a href="index.html">Home</a>
                </li>
                <li class="menu-item-has-children">
                  <a href="necklace.html">Necklace</a>
                </li>
                <li>
                  <a href="shop.html">Earrings</a>
                </li>
                <li>
                  <a href="shop.html">Braclets</a>
                </li>
                <li class="menu-item-has-children mega-menu-wrap">
                  <a href="Alljewellery.html">All jewellery</a>
                  <ul class="sub-menu">
                    <li><a href="index.html">Earrings</a></li>
                    <li><a href="index-2.html">Braclets</a></li>
                    <li><a href="index-3.html">Rings</a></li>
                    <li><a href="index-3.html">Bahi</a></li>
                    <li><a href="index-3.html">Tikka</a></li>
                  </ul>
                </li>
                <li class="menu-item-has-children">
                  <a href="contact.html">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="col-xl-2 col-md-auto col-auto search">
            <input type="text" placeholder="search" id="nav-search" style="border-radius: 4px;">
          </div>
          <div class="col-xl-2 col-md-auto col-auto">
            <div class="header-wc wish-cart">
              <a class="wc-link wishlist" href="cart.html">Wishlist
                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.5815 0C13.6435 0.0141142 12.726 0.26742 11.9215 0.734338C11.1171 1.20126 10.4543 1.86525 10 2.65927C9.54572 1.86525 8.8829 1.20126 8.07847 0.734338C7.27405 0.26742 6.35651 0.0141142 5.41852 0C3.92324 0.062848 2.51444 0.695644 1.49991 1.76014C0.485388 2.82464 -0.0524034 4.2343 0.00403263 5.68117C0.00403263 9.34531 3.99076 13.3471 7.33441 16.0604C8.08096 16.6673 9.02486 17 10 17C10.9751 17 11.919 16.6673 12.6656 16.0604C16.0092 13.3471 19.996 9.34531 19.996 5.68117C20.0524 4.2343 19.5146 2.82464 18.5001 1.76014C17.4856 0.695644 16.0768 0.062848 14.5815 0ZM11.5952 14.8274C11.1487 15.1912 10.5837 15.3906 10 15.3906C9.41628 15.3906 8.85131 15.1912 8.40481 14.8274C4.12487 11.3535 1.67003 8.02052 1.67003 5.68117C1.61308 4.66155 1.97521 3.66151 2.67742 2.89917C3.37964 2.13682 4.36497 1.67401 5.41852 1.61168C6.47206 1.67401 7.45739 2.13682 8.15961 2.89917C8.86182 3.66151 9.22395 4.66155 9.167 5.68117C9.167 5.89489 9.25477 6.09985 9.41098 6.25098C9.5672 6.4021 9.77908 6.487 10 6.487C10.2209 6.487 10.4328 6.4021 10.589 6.25098C10.7452 6.09985 10.833 5.89489 10.833 5.68117C10.7761 4.66155 11.1382 3.66151 11.8404 2.89917C12.5426 2.13682 13.5279 1.67401 14.5815 1.61168C15.635 1.67401 16.6204 2.13682 17.3226 2.89917C18.0248 3.66151 18.3869 4.66155 18.33 5.68117C18.33 8.02052 15.8751 11.3535 11.5952 14.8242V14.8274Z"
                    fill="currentColor"></path>
                </svg>
              </a>
              </div>
              <div class="header-wc wish-cart">
              <a class="wc-linkbag" href="cart.html">bag 0
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.33315 6.33334V3.12501C5.33315 1.75001 6.24982 0.833344 7.62482 0.833344H10.3748C11.7498 0.833344 12.6665 1.75001 12.6665 3.12501V6.33334M16.709 14.6108H5.33315M5.70002 4.95834H12.3C15.4167 4.95834 15.7284 6.41584 15.9392 8.19418L16.7642 15.0692C17.03 17.3242 16.3334 19.1667 13.125 19.1667H4.88419C1.66669 19.1667 0.970022 17.3242 1.24502 15.0692L2.07003 8.19418C2.2717 6.41584 2.58336 4.95834 5.70002 4.95834Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;

    // Append the navbar to the body or a specific placeholder
    document.body.prepend(navbarPlaceholder);
}

// Call the function to generate the navbar
generateNavbar();