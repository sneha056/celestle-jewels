console.log("Script is running in the browser!"); // Debugging statement

// Function to update necklace prices
function updateNecklacePrices() {
    // Access the gold price variables from global scope
    const price24k = window.price24k;
    const price22k = window.price22k;
    const price18k = window.price18k;

    console.log("Fetched gold prices - 24k:", price24k, "22k:", price22k, "18k:", price18k); // Debugging

    // Check if gold prices are available
    if (!price24k || !price22k || !price18k) {
        console.error("Gold prices are not available.");
        return;
    }

    // Simulate accessing product elements (replace with actual logic)
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        // Extract weight (in grams) from the product
        const weight = parseFloat(product.querySelector('.product-gram').textContent.replace('grm', ''));
        console.log("Weight:", weight); // Debugging

        // Extract karat from the product title
        const karat = product.querySelector('.product-title span').textContent.match(/\d+/)[0];
        console.log("Karat:", karat); // Debugging

        // Determine the price per gram based on karat
        let pricePerGram;
        switch (karat) {
            case '18':
                pricePerGram = price18k / 10;
                break;
            case '22':
                pricePerGram = price22k / 10;
                break;
            case '24':
                pricePerGram = price24k / 10;
                break;
            default:
                pricePerGram = 0; // Default to 0 if karat is not recognized
        }
        console.log("Price per gram:", pricePerGram); // Debugging

        // Calculate total price
        const totalPrice = (weight * pricePerGram).toFixed(0);
        console.log("Total Price:", totalPrice); // Debugging

        // Update the price display for the product
        product.querySelector('.product-price').textContent = `₹${totalPrice}`;
    });
}

// Wait for the window to load
window.addEventListener('load', () => {
    console.log("Window loaded!"); // Debugging

    // Check if gold prices are already fetched
    if (window.price24k && window.price22k && window.price18k) {
        updateNecklacePrices();
    } else {
        console.log("Waiting for gold prices to be fetched...");
    }
});