var myHeaders = new Headers();
myHeaders.append("x-access-token", "goldapi-1lpfdusm88m57ca-i");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

// Define global variables for gold prices
window.price24k = null;
window.price22k = null;
window.price18k = null;

fetch("https://www.goldapi.io/api/XAU/INR", requestOptions)
    .then(response => response.json())
    .then(result => {
        // Store fetched gold prices in global variables
        window.price24k = (result.price_gram_24k * 10 + 5000).toFixed(0);
        window.price22k = (result.price_gram_22k * 10 + 5000).toFixed(0);
        window.price18k = (result.price_gram_18k * 10 + 5000).toFixed(0);

        // Update the price display (if needed)
        document.getElementById('gold-price-24k').innerHTML = `24k ${window.price24k}`;
        document.getElementById('gold-price-22k').innerHTML = `22k ${window.price22k}`;
        document.getElementById('gold-price-18k').innerHTML = `18k ${window.price18k}`;

        // Call the function to update necklace prices
        if (typeof updateNecklacePrices === 'function') {
            updateNecklacePrices();
        }
    })
    .catch(error => console.log('error', error));