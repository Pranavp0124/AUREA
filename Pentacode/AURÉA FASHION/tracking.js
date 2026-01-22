// Load order tracking
function loadOrderTracking() {
    const params = new URLSearchParams(window.location.search);
    const orderId = params.get('order');

    if (!orderId) {
        window.location.href = 'settings.html';
        return;
    }

    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const order = orders.find(o => o.id === orderId);

    if (!order) {
        document.querySelector('.tracking-content').innerHTML = `
            <div class="container">
                <div class="alert alert-danger">Order not found!</div>
            </div>
        `;
        return;
    }

    // Display order info
    document.getElementById('order-id').textContent = `Order ID: ${order.id}`;
    document.getElementById('order-date').textContent = new Date(order.date).toLocaleString();
    document.getElementById('order-status').textContent = order.status || 'Confirmed';

    // Display items
    const itemsList = document.getElementById('order-items-list');
    itemsList.innerHTML = order.items.map(item => `
        <div class="d-flex justify-content-between mb-2">
            <span>${item.name} (${item.size || 'L'})</span>
            <span>₹${item.price}</span>
        </div>
    `).join('');

    const total = order.items.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('order-total').textContent = `₹${total.toFixed(2)}`;

    // Display address
    const addressDiv = document.getElementById('delivery-address-details');
    if (order.address) {
        addressDiv.innerHTML = `
            <p><strong>${order.address.name}</strong></p>
            <p>${order.address.line1}</p>
            ${order.address.line2 ? `<p>${order.address.line2}</p>` : ''}
            <p>${order.address.city}, ${order.address.state} - ${order.address.pincode}</p>
            <p>Phone: ${order.address.phone}</p>
        `;
    }

    // Update timeline based on order status
    updateTimeline(order);
}

// Update tracking timeline
function updateTimeline(order) {
    const orderDate = new Date(order.date);
    const now = new Date();
    const hoursDiff = (now - orderDate) / (1000 * 60 * 60);

    // Initial state: Confirmed is always active
    document.getElementById('date-confirmed').textContent = formatDate(orderDate);
    activateStep('step-confirmed', true);
    let progress = 0;

    // Processing (1 hour)
    if (hoursDiff >= 1) {
        progress = 25;
        activateStep('step-confirmed', false, true); // Completed
        activateStep('step-processing', true);
        document.getElementById('date-processing').textContent = 'In Progress';
    }

    // Shipped (6 hours)
    if (hoursDiff >= 6) {
        progress = 50;
        activateStep('step-processing', false, true);
        activateStep('step-shipped', true);
        const shippedDate = new Date(orderDate.getTime() + 6 * 60 * 60 * 1000);
        document.getElementById('date-shipped').textContent = formatDate(shippedDate);
    }

    // Out for Delivery (12 hours)
    if (hoursDiff >= 12) {
        progress = 75;
        activateStep('step-shipped', false, true);
        activateStep('step-out', true);
        const outDate = new Date(orderDate.getTime() + 12 * 60 * 60 * 1000);
        document.getElementById('date-out').textContent = formatDate(outDate);
    }

    // Delivered (24 hours)
    if (hoursDiff >= 24) {
        progress = 100;
        activateStep('step-out', false, true);
        activateStep('step-delivered', true, true);
        const deliveredDate = new Date(orderDate.getTime() + 24 * 60 * 60 * 1000);
        document.getElementById('date-delivered').textContent = formatDate(deliveredDate);

        document.getElementById('order-status').textContent = 'Delivered';
        document.getElementById('order-status').className = 'badge bg-success px-3 py-2 rounded-pill';
    }

    // Animate progress bar with a slight delay for visual effect
    setTimeout(() => {
        const fill = document.getElementById('progress-fill');
        if (window.innerWidth <= 768) {
            fill.style.height = `${progress}%`;
        } else {
            fill.style.width = `${progress}%`;
        }
    }, 300);
}

function activateStep(stepId, isActive, isCompleted = false) {
    const step = document.getElementById(stepId);
    if (!step) return;

    if (isActive) step.classList.add('active');
    if (isCompleted) {
        step.classList.add('completed');
        const icon = step.querySelector('.step-icon i');
        if (stepId === 'step-delivered') {
            icon.className = 'bi bi-check-lg'; // Checkmark for final step
        }
    }
}

function formatDate(date) {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    loadOrderTracking();
    updateCartCount();
});

