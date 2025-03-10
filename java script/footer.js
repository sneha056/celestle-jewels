// Function to generate the footer
function generateFooter() {
    // Create a placeholder element for the footer
    const footer = document.createElement('div');
    footer.innerHTML = `
        <footer class="footer-layout2 background-image" style="background-color: #f7e9cc;">
    <div class="footer-widgets">
      <div class="container">
        <div class="row gy-4 justify-content-between">
          <div class="col-lg-3">
            <div class="footer-logo">
              <a href="index.html"><img src="images/footer Celeste Jewels logo.png" alt="logo" style="height: 150px;"></a>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="footer-info style2">
              <p><span>Address :</span> 966 munich Expressway<br>
                Sue 700 Germany, TX 7859</p>
            </div>
            <a href="cart.html"><img src="payments.png" alt="payments"></a>
          </div>
          <div class="col-lg-2">
            <div class="footer-widget">
              <h3 class="footer-title">Shopping</h3>
              <div class="footer-menu2">
                <a href="Alljewellery.html">All categories</a>
                <a href="necklace.html">Necklace</a>
                <a href="Earrings.html">Earrings</a>
                <a href="Bahi.html">Bahi</a>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="footer-widget">
              <h3 class="footer-title">Useful Links</h3>
              <div class="footer-menu2">
                <a href="Alljewellery.html">Wishlist</a>
                <a href="cart.html">Bag</a>
                <a href="about.html">Help</a>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="footer-widget">
              <h3 class="footer-title">Policies</h3>
              <div class="footer-menu2">
                <a href="return-policy.html">Return Policies</a>
                <a href="return-policy.html">Refund Policies</a>
                <a href="termsandconditions.html">terms &amp; conditions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="footer-copyright style2">
      Copyright &#169 2025 <a href="index.html" style="color: white;">Celeste jewels</a>.
    </p>
  </footer>
    `;

    // Append the footer to the end of the body
    document.body.append(footer);
}

// Call the function to generate the footer
generateFooter();