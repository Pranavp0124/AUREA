// Product Detail Page Logic using shared products-data.js

// Get product ID from URL
function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Load product details
function loadProductDetails() {
    // Ensure allProducts is available
    if (typeof allProducts === 'undefined') {
        console.error('products-data.js not loaded');
        return;
    }

    const productId = getProductIdFromURL();
    let product = allProducts.find(p => p.id === productId);

    if (!product) {
        // Default to first product if not found
        if (allProducts.length > 0) {
            window.location.href = `product-detail.html?id=${allProducts[0].id}`;
            return;
        } else {
            document.querySelector('.product-detail').innerHTML = '<div class="container text-center py-5"><h3>Product not found</h3></div>';
            return;
        }
    }

    // Update page title
    document.title = `${product.name} - Fashion Store`;

    // Update breadcrumb
    const breadcrumb = document.getElementById('breadcrumb-product');
    if (breadcrumb) breadcrumb.textContent = product.name;

    // Update product information
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('product-brand').textContent = product.brand;
    document.getElementById('current-price').textContent = `₹${product.price}`;

    const oldPriceEl = document.getElementById('old-price');
    if (product.oldPrice) {
        oldPriceEl.textContent = `₹${product.oldPrice}`;
        oldPriceEl.style.display = 'inline';
    } else {
        oldPriceEl.style.display = 'none';
    }

    const discountEl = document.getElementById('discount-percent');
    if (product.discount > 0) {
        discountEl.textContent = `${product.discount}% OFF`;
        discountEl.style.display = 'inline-block';
    } else {
        discountEl.style.display = 'none';
    }

    document.getElementById('product-rating').textContent = product.rating;

    // Map 'reviews' from data to 'reviewCount' expected by UI
    const reviewCount = product.reviews || 0;
    document.getElementById('review-count').textContent = reviewCount;
    document.getElementById('review-tab-count').textContent = reviewCount;

    document.getElementById('stock-available').textContent = product.stock;

    // Description might be missing in some data versions, provide fallback
    document.getElementById('product-description').textContent = product.description || `Experience the quality of ${product.brand} with this amazing ${product.name}. Perfect for any occasion.`;

    document.getElementById('spec-brand').textContent = product.brand;

    // Update images
    // Ensure images array exists, otherwise fall back to main image
    const images = product.images && product.images.length > 0 ? product.images : [product.image];

    const mainImg = document.getElementById('main-product-img');
    mainImg.src = images[0];
    mainImg.alt = product.name;

    const thumbnails = document.querySelectorAll('.thumbnail-img');
    thumbnails.forEach((thumb, index) => {
        if (images[index]) {
            thumb.src = images[index];
            thumb.style.display = 'block';
            // Make first active
            if (index === 0) thumb.classList.add('active');
            else thumb.classList.remove('active');
        } else {
            thumb.style.display = 'none';
        }
    });

    // Load similar products
    loadSimilarProducts(product.category, product.id);
}

// Change main image
function changeMainImage(thumbnail) {
    const mainImg = document.getElementById('main-product-img');
    mainImg.src = thumbnail.src;

    // Update active thumbnail
    document.querySelectorAll('.thumbnail-img').forEach(img => {
        img.classList.remove('active');
    });
    thumbnail.classList.add('active');
}

// Size selection
let selectedSize = 'L';
function selectSize(btn) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedSize = btn.getAttribute('data-size');
}

// Quantity management
function increaseQuantity() {
    const qtyInput = document.getElementById('product-quantity');
    const maxQty = parseInt(qtyInput.getAttribute('max')) || 10; // Default max if not set
    const currentQty = parseInt(qtyInput.value);
    if (currentQty < maxQty) {
        qtyInput.value = currentQty + 1;
    }
}

function decreaseQuantity() {
    const qtyInput = document.getElementById('product-quantity');
    const currentQty = parseInt(qtyInput.value);
    if (currentQty > 1) {
        qtyInput.value = currentQty - 1;
    }
}

// Add to cart from detail page
function addToCartFromDetail() {
    const productId = getProductIdFromURL();
    const product = allProducts.find(p => p.id === productId);
    const quantity = parseInt(document.getElementById('product-quantity').value);

    if (!product) return;

    // Use first image for cart
    const cartImage = (product.images && product.images.length > 0) ? product.images[0] : product.image;

    for (let i = 0; i < quantity; i++) {
        // Ensure addToCart is available globally (from script.js)
        if (typeof addToCart === 'function') {
            addToCart(product.name, product.price, selectedSize, cartImage);
        } else {
            console.error('addToCart function not found');
        }
    }

    if (typeof showNotification === 'function') {
        showNotification(`${quantity} x ${product.name} (Size: ${selectedSize}) added to cart!`);
    } else {
        alert(`${quantity} x ${product.name} (Size: ${selectedSize}) added to cart!`);
    }
}

// Load similar products
function loadSimilarProducts(category, currentProductId) {
    // Filter from allProducts array
    const similarProducts = allProducts
        .filter(product => product.id !== currentProductId && product.category === category)
        .slice(0, 4);

    const grid = document.getElementById('similar-products-grid');
    if (!grid) return;

    grid.innerHTML = '';

    if (similarProducts.length === 0) {
        // If no products in same category, show any other products
        const otherProducts = allProducts
            .filter(product => product.id !== currentProductId)
            .slice(0, 4);

        otherProducts.forEach(product => {
            grid.appendChild(createProductCard(product));
        });
    } else {
        similarProducts.forEach(product => {
            grid.appendChild(createProductCard(product));
        });
    }
}

// Create product card
function createProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-4 col-sm-6';

    // Handle image source (singular or array)
    const imgSrc = (product.images && product.images.length > 0) ? product.images[0] : product.image;

    const discountBadge = product.discount > 0 ?
        `<div class="product-badge sale">${product.discount}% OFF</div>` : '';

    col.innerHTML = `
        <div class="product-card card-3d">
            <div class="product-image">
                <img src="${imgSrc}" alt="${product.name}" loading="lazy">
                ${discountBadge}
                <div class="product-overlay">
                    <button class="btn-quick-view" onclick="window.location.href='product-detail.html?id=${product.id}'"><i class="bi bi-eye"></i></button>
                    <!-- Note: addToCart needs escaped name -->
                    <button class="btn-add-cart" onclick="addToCart('${product.name.replace(/'/g, "\\'")}', ${product.price}, 'L', '${imgSrc}')"><i class="bi bi-bag-plus"></i></button>
                </div>
            </div>
            <div class="product-info">
                <h4>${product.name}</h4>
                <p class="product-price">₹${product.price} ${product.oldPrice ? `<span class="old-price">₹${product.oldPrice}</span>` : ''}</p>
            </div>
        </div>
    `;

    return col;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    loadProductDetails();
    if (typeof updateCartCount === 'function') {
        updateCartCount();
    }
});
