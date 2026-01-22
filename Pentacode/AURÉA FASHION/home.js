document.addEventListener('DOMContentLoaded', function () {
    loadTrendingProducts();
    loadHeroCarousel();
});

function loadHeroCarousel() {
    const carouselInner = document.querySelector('#fashionCarousel .carousel-inner');
    const carouselIndicators = document.querySelector('#fashionCarousel .carousel-indicators');

    if (!carouselInner || !carouselIndicators) return;

    // Modern High-Quality Images (Verified)
    const slides = [
        {
            image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=80',
            title: 'Summer Collection 2026',
            subtitle: 'Fresh Styles for Every Occasion',
            cta: 'Shop Now',
            link: 'products.html?category=women'
        },
        {
            image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80',
            title: 'Luxury Fashion',
            subtitle: 'Elevate Your Style',
            cta: 'Explore',
            link: 'products.html?sort=price-high'
        },
        {
            image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1600&q=80',
            title: 'Men\'s Essentials',
            subtitle: 'Refined Looks for Him',
            cta: 'Discover',
            link: 'products.html?category=men'
        },
        {
            image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80',
            title: 'Designer Accessories',
            subtitle: 'Complete Your Look',
            cta: 'View Collection',
            link: 'products.html?category=accessories'
        }
    ];

    carouselInner.innerHTML = '';
    carouselIndicators.innerHTML = '';

    slides.forEach((slide, index) => {
        // Create Indicator
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.dataset.bsTarget = '#fashionCarousel';
        btn.dataset.bsSlideTo = index;
        if (index === 0) btn.className = 'active';
        carouselIndicators.appendChild(btn);

        // Create Slide
        const div = document.createElement('div');
        div.className = `carousel-item ${index === 0 ? 'active' : ''}`;

        div.innerHTML = `
            <div class="carousel-slide" style="background-image: url('${slide.image}');">
                <div class="carousel-content">
                    <h2 class="slide-title">${slide.title}</h2>
                    <p class="slide-subtitle">${slide.subtitle}</p>
                    <button class="btn-slide" onclick="window.location.href='${slide.link}'">${slide.cta}</button>
                </div>
            </div>
        `;
        carouselInner.appendChild(div);
    });
}


function loadTrendingProducts() {
    const grid = document.getElementById('trending-grid');
    if (!grid) return;

    // Get 8 random products for trending
    const trendingProducts = getRandomProducts(8);

    grid.innerHTML = '';

    trendingProducts.forEach((product, index) => {
        const col = document.createElement('div');
        col.className = 'col-lg-3 col-md-4 col-sm-6';

        // Calculate discount badge
        let badgeHtml = '';
        if (product.discount >= 40) {
            badgeHtml = `<div class="product-badge sale">-${product.discount}%</div>`;
        } else if (index < 2) {
            badgeHtml = `<div class="product-badge" style="background: #ff3f6c;">Trending</div>`;
        } else if (index === 2) {
            badgeHtml = `<div class="product-badge" style="background: #28a745;">New</div>`;
        }

        const isSaved = localStorage.getItem(`wishlist_${product.id}`);
        const heartIcon = isSaved ? 'bi-heart-fill' : 'bi-heart';
        const heartColor = isSaved ? 'style="color: #ff3f6c;"' : '';

        col.innerHTML = `
            <div class="product-card card-3d" onclick="window.location.href='product-detail.html?id=${product.id}'">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy" onload="this.classList.add('loaded'); this.parentElement.classList.add('image-loaded')" onerror="this.src='https://placehold.co/400x500/e0e0e0/333333?text=Product'; this.classList.add('loaded'); this.parentElement.classList.add('image-loaded')">
                    ${badgeHtml}
                </div>
                <div class="product-info">
                    <div class="d-flex justify-content-between align-items-center mb-1">
                        <span class="text-muted small text-uppercase">${product.brand}</span>
                        <div class="small text-warning"><i class="bi bi-star-fill"></i> ${product.rating}</div>
                    </div>
                    <h4 class="text-truncate" title="${product.name}">${product.name}</h4>
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="product-price mb-0">₹${product.price} <span class="old-price">₹${product.oldPrice}</span></p>
                        <button class="btn-wishlist-card wishlist-btn-${product.id}" onclick="event.stopPropagation(); toggleWishlist('${product.id}')">
                            <i class="bi ${heartIcon}" ${heartColor}></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Add animation delay
        col.style.opacity = '0';
        col.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;

        grid.appendChild(col);
    });
}

function getRandomProducts(count) {
    if (!allProducts || allProducts.length === 0) return [];

    const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
