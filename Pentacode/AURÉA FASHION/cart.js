// Load cart items from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    displayCart();
    updateCartCount();
}

// Display cart items with grouping
function displayCart() {
    const cartItemsList = document.getElementById('cart-items-list');
    const emptyCart = document.getElementById('empty-cart');
    const cartFooter = document.getElementById('cart-footer');

    if (!cartItemsList) return;

    if (cart.length === 0) {
        cartItemsList.style.display = 'none';
        emptyCart.style.display = 'block';
        if (cartFooter) cartFooter.style.display = 'none';
        return;
    }

    emptyCart.style.display = 'none';
    cartItemsList.style.display = 'block';
    if (cartFooter) cartFooter.style.display = 'flex';

    // Group items by name + size
    const groupedCart = {};
    cart.forEach(item => {
        const key = `${item.name}-${item.size}`;
        if (!groupedCart[key]) {
            groupedCart[key] = { ...item, quantity: 0, total_price: 0 };
        }
        groupedCart[key].quantity += 1;
        groupedCart[key].total_price += item.price;
    });

    cartItemsList.innerHTML = Object.values(groupedCart).map((item) => {
        return `
        <div class="row align-items-center border-bottom py-4">
            <!-- Product Column -->
            <div class="col-md-6 d-flex gap-4">
                <div style="width: 100px; height: 120px; flex-shrink: 0; background: #f9f9f9;">
                     <img src="${item.image || 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150&q=80'}" 
                     alt="${item.name}" 
                     class="w-100 h-100 object-fit-cover" 
                     style="mix-blend-mode: multiply;">
                </div>
                <div>
                    <h5 class="mb-1" style="font-family: 'Playfair Display', serif;">${item.name}</h5>
                    <p class="text-muted mb-1">Rs. ${item.price.toFixed(2)}</p>
                    <p class="text-muted small">Size: ${item.size || 'L'}</p>
                </div>
            </div>
            
            <!-- Quantity Column -->
            <div class="col-md-3 d-flex justify-content-center align-items-center">
                <div class="d-flex align-items-center border px-2 py-1 bg-white">
                    <button class="btn btn-sm btn-link text-dark text-decoration-none p-0 px-2" onclick="modifyQuantity('${item.name}', '${item.size}', -1)">−</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="btn btn-sm btn-link text-dark text-decoration-none p-0 px-2" onclick="modifyQuantity('${item.name}', '${item.size}', 1)">+</button>
                </div>
                 <button class="btn btn-link text-muted ms-3 p-0" onclick="removeItemByKey('${item.name}', '${item.size}')">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
            
            <!-- Total Column -->
            <div class="col-md-3 text-end">
                <span class="fw-normal">Rs. ${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        </div>
    `}).join('');

    updateCartSummary();
}

// Modify quantity (add/remove instance)
function modifyQuantity(name, size, change) {
    if (change > 0) {
        // Find first item matching to copy
        const item = cart.find(i => i.name === name && i.size === size);
        if (item) {
            cart.push({ ...item });
        }
    } else {
        // Find index of first item matching to remove
        const index = cart.findIndex(i => i.name === name && i.size === size);
        if (index !== -1) {
            cart.splice(index, 1);
        }
    }
    saveCart();
    displayCart();
    updateCartCount();
}

// Remove all items of a specific group
function removeItemByKey(name, size) {
    // Filter out all items that match key
    const initialLength = cart.length;
    cart = cart.filter(item => !(item.name === name && item.size === size));

    if (cart.length < initialLength) {
        saveCart();
        displayCart();
        updateCartCount();
        showNotification('Item removed from cart');
    }
}

// Update cart summary
function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const totalEl = document.getElementById('cart-total');
    if (totalEl) {
        totalEl.textContent = `Rs. ${subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
    }
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) return;
    saveCart();
    window.location.href = 'checkout.html';
}

// Initialize cart on page load
// Also need access to addToCart from script.js? It's global there? Yes script.js is included.
document.addEventListener('DOMContentLoaded', function () {
    loadCart();
});

