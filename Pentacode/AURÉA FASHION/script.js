// Cart functionality
let cart = [];
let total = 0;

function addToCart(productName, price, size = 'L', image = '') {
    cart.push({ name: productName, price: price, size: size, image: image });
    total += price;

    saveCart();
    updateCartCount();
    showNotification(`${productName} (Size: ${size}) added to cart!`);
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        total = cart.reduce((sum, item) => sum + item.price, 0);
    }
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
        cartCount.style.animation = 'pulse 0.5s ease';
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #ff3f6c;
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideInRight 0.5s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Modern Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe product cards
    document.querySelectorAll('.product-card').forEach(card => {
        observer.observe(card);
    });

    // Observe category cards
    document.querySelectorAll('.category-card').forEach(card => {
        observer.observe(card);
    });

    // Observe other elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Carousel Auto-play Enhancement
document.addEventListener('DOMContentLoaded', function () {
    const carouselElement = document.querySelector('#fashionCarousel');
    if (carouselElement) {
        // Initialize carousel with auto-play
        const carousel = new bootstrap.Carousel(carouselElement, {
            interval: 3000, // 3 seconds
            ride: 'carousel', // Auto-start
            wrap: true, // Loop continuously
            keyboard: true, // Enable keyboard navigation
            pause: 'hover' // Pause on hover
        });

        // Ensure auto-play continues
        carouselElement.addEventListener('slid.bs.carousel', function () {
            // Carousel has finished sliding, ensure it continues
            if (!carouselElement.matches(':hover')) {
                carousel.cycle();
            }
        });

        // Pause on hover (optional - already handled by Bootstrap pause option)
        carouselElement.addEventListener('mouseenter', function () {
            carousel.pause();
        });

        carouselElement.addEventListener('mouseleave', function () {
            carousel.cycle();
        });

        // Start auto-play immediately
        carousel.cycle();
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Scroll Effect
// Navbar Scroll Effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Category Click Handler
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function () {
        const category = this.getAttribute('data-category');
        window.location.href = `products.html?category=${category}`;
    });
});

// Search Functionality
document.querySelectorAll('.search-box input').forEach(input => {
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const searchTerm = this.value;
            if (searchTerm.trim()) {
                window.location.href = `products.html?search=${encodeURIComponent(searchTerm)}`;
            }
        }
    });

    // Also add click handler for search button
    const searchBtn = input.parentElement.querySelector('button');
    if (searchBtn) {
        searchBtn.addEventListener('click', function () {
            const searchTerm = input.value;
            if (searchTerm.trim()) {
                window.location.href = `products.html?search=${encodeURIComponent(searchTerm)}`;
            }
        });
    }
});

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Parallax Effect for Carousel
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const carousel = document.querySelector('.hero-carousel');
    if (carousel && scrolled < window.innerHeight) {
        carousel.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Product Quick View (placeholder)
document.querySelectorAll('.btn-quick-view').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        showNotification('Quick view feature coming soon!');
    });
});

// Cart button click handler and animations
document.addEventListener('DOMContentLoaded', function () {
    loadCart();
    updateCartCount();
    initScrollAnimations();

    // Initialize Cart Sidebar if it exists (Index page)
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
        // Remove any existing listeners by cloning (simple way) or just add new one if not present
        // But since we are editing the source, we just define the behaviour we want.
        cartBtn.onclick = function (e) {
            e.preventDefault();
            const sidebarEl = document.getElementById('cartSidebar');
            if (sidebarEl) {
                updateCartSidebar();
                const bsOffcanvas = new bootstrap.Offcanvas(sidebarEl);
                bsOffcanvas.show();
            } else {
                window.location.href = 'cart.html';
            }
        };
    }

    // Add smooth entrance animations to elements
    setTimeout(() => {
        document.querySelectorAll('.product-card, .category-card').forEach((el, index) => {
            if (el.style.opacity !== '1') {
                el.style.opacity = '1';
                el.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
            }
        });
    }, 100);
});

// Render Cart Sidebar
function updateCartSidebar() {
    const container = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-total-price');
    if (!container || !totalEl) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="text-center py-5">
                <i class="bi bi-bag-x fs-1 text-muted mb-3"></i>
                <p class="text-muted">Your bag is empty.</p>
                <button class="btn btn-outline-dark btn-sm mt-3" data-bs-dismiss="offcanvas">Start Shopping</button>
            </div>
        `;
        totalEl.textContent = '₹0';
        return;
    }

    let html = '<ul class="list-group list-group-flush">';
    cart.forEach((item, index) => {
        html += `
            <li class="list-group-item d-flex gap-3 py-3">
                <div style="width: 70px; height: 70px; flex-shrink: 0;">
                    <img src="${item.image || 'https://placehold.co/70x70?text=No+Img'}" alt="${item.name}" class="w-100 h-100 object-fit-cover rounded">
                </div>
                <div class="flex-grow-1">
                    <div class="d-flex justify-content-between mb-1">
                        <h6 class="mb-0 text-truncate" style="max-width: 150px;">${item.name}</h6>
                        <button class="btn btn-sm text-danger p-0 border-0" onclick="removeFromCart(${index})"><i class="bi bi-trash"></i></button>
                    </div>
                    <small class="text-muted d-block mb-1">Size: ${item.size}</small>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="fw-bold">₹${item.price}</span>
                        <div class="input-group input-group-sm" style="width: 80px;">
                            <button class="btn btn-outline-secondary" type="button">-</button>
                            <input type="text" class="form-control text-center px-0" value="1" readonly>
                            <button class="btn btn-outline-secondary" type="button">+</button>
                        </div>
                    </div>
                </div>
            </li>
        `;
    });
    html += '</ul>';

    container.innerHTML = html;
    totalEl.textContent = '₹' + total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartCount();
    updateCartSidebar();
}

// Toggle Wishlist
function toggleWishlist(productId) {
    // This is a mockup of wishlist functionality
    // in a real app, you would check if it exists in a 'wishlist' array in localStorage

    // Find the button that was clicked or all buttons for this product
    // Since we pass ID, we might not have reference to the button easily unless we look it up
    // But for UI feedback, we can just show a notification

    const isSaved = localStorage.getItem(`wishlist_${productId}`);

    if (isSaved) {
        localStorage.removeItem(`wishlist_${productId}`);
        showNotification('Removed from wishlist');
        // Update UI icons if needed (toggle heart fill)
        updateWishlistIcon(productId, false);
    } else {
        localStorage.setItem(`wishlist_${productId}`, 'true');
        showNotification('Added to wishlist');
        updateWishlistIcon(productId, true);
    }
}

function updateWishlistIcon(productId, isSaved) {
    const btns = document.querySelectorAll(`.wishlist-btn-${productId}`);
    btns.forEach(btn => {
        const icon = btn.querySelector('i');
        if (isSaved) {
            icon.classList.remove('bi-heart');
            icon.classList.add('bi-heart-fill');
            icon.style.color = '#ff3f6c';
        } else {
            icon.classList.remove('bi-heart-fill');
            icon.classList.add('bi-heart');
            icon.style.color = '';
        }
    });
}
