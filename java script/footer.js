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
                                    <a href="shop.html">Gift card</a>
                                    <a href="about.html">terms &amp; conditions</a>
                                    <a href="about.html">privacy policy</a>
                                    <a href="about.html">delivery</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="footer-widget">
                                <h3 class="footer-title">About Store</h3>
                                <div class="footer-menu2">
                                    <a href="about.html">Shopping</a>
                                    <a href="cart.html">Order Cart</a>
                                    <a href="about.html">Privacy Policy</a>
                                    <a href="about.html">Help</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="footer-widget">
                                <h3 class="footer-title">Policies</h3>
                                <div class="footer-menu2">
                                    <a href="about.html">Return Policies</a>
                                    <a href="cart.html">Refund Policies</a>
                                    <a href="about.html">Terms and Conditions</a>
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