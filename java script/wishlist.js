// Initialize wishlist array from localStorage
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// Function to add product to wishlist
function addToWishlist(productElement) {
    const product = {
        id: Date.now(), // Unique ID
        name: productElement.querySelector('.product-title').innerText,
        weight: productElement.querySelector('.product-gram').innerText,
        price: productElement.querySelector('.product-price').innerText,
        image: productElement.querySelector('.product-img img').src
    };

    // Check if product already exists
    const exists = wishlist.some(item => item.name === product.name);
    
    if (!exists) {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert('Added to wishlist!');
    } else {
        alert('Product already in wishlist!');
    }
}

// Function to remove item from wishlist
function removeFromWishlist(productId) {
    wishlist = wishlist.filter(item => item.id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistDisplay();
}

// Update wishlist display
function updateWishlistDisplay() {
    const tbody = document.querySelector('.cart_table tbody');
    tbody.innerHTML = '';

    wishlist.forEach(product => {
        const row = document.createElement('tr');
        row.className = 'cart_item';
        row.innerHTML = `
            <td data-title="Product">
                <a class="cart-productimage" href="#">
                    <img width="100" height="95" src="${product.image}" alt="${product.name}">
                </a>
            </td>
            <td data-title="Name">
                <a class="cart-productname" href="#">${product.name}</a>
            </td>
            <td data-title="Price">${product.price}</td>
            <td data-title="Quantity">
                <div class="quantity style2">
                    <div class="quantity__field quantity-container">
                        <button class="quantity-minus qty-btn">
                            <i class="fa-solid fa-minus fal"></i>
                        </button>
                        <input type="number" class="qty-input" value="1" min="1">
                        <button class="quantity-plus qty-btn">
                            <i class="fa-solid fa-plus fal"></i>
                        </button>
                    </div>
                </div>
            </td>
            <td data-title="Total">${product.price}</td>
            <td data-title="Remove">
                <a href="#" class="remove" onclick="removeFromWishlist(${product.id})">
                    <i class="fa-solid fa-trash fal"></i>
                </a>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Initialize wishlist page
if (document.querySelector('.cart_table')) {
    updateWishlistDisplay();
}

