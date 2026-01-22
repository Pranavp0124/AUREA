// Products Management - Search, Sort, Filter
let displayedProducts = [];
let filteredProducts = [];

// Helper to get checked value
function getFilterValue(name) {
    const checked = document.querySelector(`input[name="${name}"]:checked`);
    return checked ? checked.value : 'all';
}

// Helper to set checked value
function setFilterValue(name, value) {
    const radio = document.querySelector(`input[name="${name}"][value="${value}"]`);
    if (radio) radio.checked = true;
}

// Initialize products page
document.addEventListener('DOMContentLoaded', function () {
    loadCart();
    updateCartCount();

    // Load all products - ensure allProducts is defined (from data file)
    if (typeof allProducts !== 'undefined') {
        displayedProducts = [...allProducts];
        filteredProducts = [...allProducts];
    }

    // Check URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const search = urlParams.get('search');

    // Initial subcategory build
    updateSubcategoryOptions();

    if (category) {
        setFilterValue('category', category);
        // Force update subcategories because change event didn't fire
        updateSubcategoryOptions();
        filterProducts();
    }

    if (search) {
        document.getElementById('product-search').value = search;
        searchProducts();
    } else {
        displayProducts(filteredProducts);
    }

    // Search on Enter key
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
    }

    // Subcategory update listener - needs to be delegated or attached to radios
    // Since radios replace the select, we attach to the container or name
    document.querySelectorAll('input[name="category"]').forEach(radio => {
        radio.addEventListener('change', function () {
            updateSubcategoryOptions();
            filterProducts();
        });
    });
});

// Update subcategory options based on selected category
function updateSubcategoryOptions() {
    const category = getFilterValue('category');
    const container = document.getElementById('filter-subcategory-container');

    if (!container) return; // Guard clause

    // Clear functional subcategories, reset to All
    container.innerHTML = `
        <label class="filter-radio cursor-pointer">
            <input type="radio" name="subcategory" value="all" checked onchange="filterProducts()" hidden>
            <span class="text-uppercase small">All Subcategories</span>
        </label>
    `;

    const subSection = document.getElementById('subcategory-section');
    if (category === 'all') {
        if (subSection) subSection.style.display = 'none';
        return;
    }
    if (subSection) subSection.style.display = 'block';

    const subcategories = new Set();
    allProducts.forEach(product => {
        if (product.category === category && product.subcategory) {
            subcategories.add(product.subcategory);
        }
    });

    subcategories.forEach(subcat => {
        const label = document.createElement('label');
        label.className = 'filter-radio cursor-pointer';
        label.innerHTML = `
            <input type="radio" name="subcategory" value="${subcat}" onchange="filterProducts()" hidden>
            <span class="text-uppercase small">${subcat.charAt(0).toUpperCase() + subcat.slice(1)}</span>
        `;
        container.appendChild(label);
    });
}

// Search products
function searchProducts() {
    const searchInput = document.getElementById('product-search');
    if (!searchInput) return;

    const searchTerm = searchInput.value.toLowerCase().trim();

    if (!searchTerm) {
        filteredProducts = [...allProducts];
        filterProducts();
        return;
    }

    filteredProducts = allProducts.filter(product => {
        return product.name.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm) ||
            (product.subcategory && product.subcategory.toLowerCase().includes(searchTerm)) ||
            (product.category && product.category.toLowerCase().includes(searchTerm));
    });

    applyFilters();
}

// Filter products
function filterProducts() {
    const category = getFilterValue('category');
    const subcategory = getFilterValue('subcategory');
    const priceRange = getFilterValue('price');
    const discount = getFilterValue('discount');

    filteredProducts = allProducts.filter(product => {
        // Category filter
        if (category !== 'all' && product.category !== category) {
            return false;
        }

        // Subcategory filter
        if (subcategory !== 'all' && product.subcategory !== subcategory) {
            return false;
        }

        // Price filter
        if (priceRange !== 'all') {
            const [min, max] = priceRange.split('-').map(p => p.replace('+', '').replace('₹', ''));
            if (max) {
                if (product.price < parseInt(min) || product.price > parseInt(max)) {
                    return false;
                }
            } else {
                if (product.price < parseInt(min)) {
                    return false;
                }
            }
        }

        // Discount filter
        if (discount !== 'all') {
            const [min, max] = discount.split('-').map(d => d.replace('+', '').replace('%', ''));
            if (max) {
                if (product.discount < parseInt(min) || product.discount > parseInt(max)) {
                    return false;
                }
            } else {
                if (product.discount < parseInt(min)) {
                    return false;
                }
            }
        }

        return true;
    });

    applyFilters();
}

// Apply all filters and search
function applyFilters() {
    const searchInput = document.getElementById('product-search');
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => {
            return product.name.toLowerCase().includes(searchTerm) ||
                product.brand.toLowerCase().includes(searchTerm) ||
                (product.subcategory && product.subcategory.toLowerCase().includes(searchTerm));
        });
    }

    sortProducts();
}

// Sort products
function sortProducts() {
    const sortBy = getFilterValue('sort');

    switch (sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'discount':
            filteredProducts.sort((a, b) => b.discount - a.discount);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
            break;
        default:
            // Keep original order
            break;
    }

    displayProducts(filteredProducts);
}

// Display products
function displayProducts(products) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    grid.innerHTML = '';

    if (products.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-search" style="font-size: 4rem; color: #ccc;"></i>
                <h4 class="mt-3">No products found</h4>
                <p class="text-muted">Try adjusting your filters or search terms</p>
                <button class="btn btn-primary mt-3" onclick="clearFilters()">Clear All Filters</button>
            </div>
        `;
        const countDisplay = document.getElementById('product-count');
        if (countDisplay) countDisplay.textContent = 'Showing 0 products';
        return;
    }

    products.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-lg-3 col-md-4 col-sm-6';

        const discountBadge = product.discount >= 60 ?
            `<div class="product-badge sale" style="background: #dc3545;">${product.discount}% OFF</div>` :
            product.discount > 0 ?
                `<div class="product-badge sale">${product.discount}% OFF</div>` : '';

        const isSaved = localStorage.getItem(`wishlist_${product.id}`);
        const heartIcon = isSaved ? 'bi-heart-fill' : 'bi-heart';
        const heartColor = isSaved ? 'style="color: #ff3f6c;"' : '';

        col.innerHTML = `
            <div class="product-card card-3d" onclick="window.location.href='product-detail.html?id=${product.id}'">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy" onload="this.classList.add('loaded'); this.parentElement.classList.add('image-loaded')" onerror="this.src='https://placehold.co/400x500/e0e0e0/333333?text=Product'; this.classList.add('loaded'); this.parentElement.classList.add('image-loaded')">
                    ${discountBadge}
                </div>
                <div class="product-info">
                    <h4>${product.name}</h4>
                    <p class="text-muted small mb-1">${product.brand}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="product-price mb-0">₹${product.price} ${product.oldPrice ? `<span class="old-price">₹${product.oldPrice}</span>` : ''}</p>
                        <button class="btn-wishlist-card wishlist-btn-${product.id}" onclick="event.stopPropagation(); toggleWishlist('${product.id}')">
                            <i class="bi ${heartIcon}" ${heartColor}></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        grid.appendChild(col);
    });

    const countDisplay = document.getElementById('product-count');
    if (countDisplay) countDisplay.textContent = `Showing ${products.length} products`;

    // Trigger animations
    setTimeout(() => {
        document.querySelectorAll('.product-card').forEach((el, index) => {
            el.style.opacity = '1';
            el.style.animation = `fadeInUp 0.6s ease-out ${index * 0.05}s forwards`;
        });
    }, 100);
}

// Clear all filters
function clearFilters() {
    setFilterValue('category', 'all');
    setFilterValue('price', 'all');
    setFilterValue('discount', 'all');
    setFilterValue('sort', 'default');

    // Reset Subcategory manually since it depends on Category
    updateSubcategoryOptions();
    setFilterValue('subcategory', 'all');

    const searchInput = document.getElementById('product-search');
    if (searchInput) searchInput.value = '';

    filteredProducts = [...allProducts];
    displayProducts(filteredProducts);
}
