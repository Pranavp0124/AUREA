// Load saved data
let savedAddresses = [];
let savedUPIs = [];
let savedCards = [];

function loadSavedData() {
    const addresses = localStorage.getItem('savedAddresses');
    const upis = localStorage.getItem('savedUPIs');
    const cards = localStorage.getItem('savedCards');

    if (addresses) savedAddresses = JSON.parse(addresses);
    if (upis) savedUPIs = JSON.parse(upis);
    if (cards) savedCards = JSON.parse(cards);

    displayAddresses();
    displayUPIs();
    displayCards();
    displayCheckoutItems();
}

// Display saved addresses
function displayAddresses() {
    const container = document.getElementById('saved-addresses');
    if (!container) return;

    if (savedAddresses.length === 0) {
        container.innerHTML = '<p class="text-muted">No saved addresses. Please add one.</p>';
        return;
    }

    container.innerHTML = savedAddresses.map((addr, index) => `
        <div class="address-card border rounded p-3 mb-3">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="selectedAddress" id="addr-${index}" value="${index}" ${index === 0 ? 'checked' : ''}>
                <label class="form-check-label" for="addr-${index}">
                    <strong>${addr.name}</strong> - ${addr.type}
                    <p class="mb-0 text-muted small">${addr.line1}, ${addr.line2 ? addr.line2 + ', ' : ''}${addr.city}, ${addr.state} - ${addr.pincode}</p>
                    <p class="mb-0 text-muted small">Phone: ${addr.phone}</p>
                </label>
            </div>
        </div>
    `).join('');
}

// Display saved UPI IDs
function displayUPIs() {
    const select = document.getElementById('upi-select');
    if (!select) return;

    select.innerHTML = '<option value="">Select UPI ID</option>' +
        savedUPIs.map((upi, index) =>
            `<option value="${index}">${upi}</option>`
        ).join('');
}

// Display saved cards
function displayCards() {
    const select = document.getElementById('card-select');
    if (!select) return;

    select.innerHTML = '<option value="">Select Card</option>' +
        savedCards.map((card, index) =>
            `<option value="${index}">${card.number.replace(/\d(?=\d{4})/g, '*')} - ${card.name}</option>`
        ).join('');
}

// Display checkout items
function displayCheckoutItems() {
    const container = document.getElementById('checkout-items');
    if (!container) return;

    loadCart();

    if (cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }

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

    container.innerHTML = Object.values(groupedCart).map(item => `
        <div class="d-flex justify-content-between mb-2">
            <span>${item.name} (${item.size}) <span class="text-muted ms-1">x${item.quantity}</span></span>
            <span>₹${item.total_price.toFixed(2)}</span>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

    // Calculate GST based on item price
    // 5% for items <= 2500, 18% for items > 2500
    let totalGST = 0;
    cart.forEach(item => {
        if (item.price <= 2500) {
            totalGST += item.price * 0.05;
        } else {
            totalGST += item.price * 0.18;
        }
    });

    const tax = totalGST;
    const total = subtotal + tax;

    document.getElementById('checkout-subtotal').textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById('checkout-tax').textContent = `₹${tax.toFixed(2)}`;
    document.getElementById('checkout-total').textContent = `₹${total.toFixed(2)}`;
}

// Payment method change handler
document.addEventListener('DOMContentLoaded', function () {
    loadSavedData();
    updateCartCount();

    document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
        radio.addEventListener('change', function () {
            if (this.value === 'upi') {
                document.getElementById('upi-details').style.display = 'block';
                document.getElementById('card-details').style.display = 'none';
            } else {
                document.getElementById('upi-details').style.display = 'none';
                document.getElementById('card-details').style.display = 'block';
            }
        });
    });

    // Address form
    document.getElementById('addressForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const address = {
            name: document.getElementById('address-name').value,
            phone: document.getElementById('address-phone').value,
            pincode: document.getElementById('address-pincode').value,
            line1: document.getElementById('address-line1').value,
            line2: document.getElementById('address-line2').value,
            city: document.getElementById('address-city').value,
            state: document.getElementById('address-state').value,
            type: document.getElementById('address-type').value
        };
        savedAddresses.push(address);
        localStorage.setItem('savedAddresses', JSON.stringify(savedAddresses));
        displayAddresses();
        bootstrap.Modal.getInstance(document.getElementById('addressModal')).hide();
        this.reset();
        showNotification('Address saved successfully!');
    });

    // UPI form
    document.getElementById('upiForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const upi = document.getElementById('upi-id').value;
        savedUPIs.push(upi);
        localStorage.setItem('savedUPIs', JSON.stringify(savedUPIs));
        displayUPIs();
        bootstrap.Modal.getInstance(document.getElementById('upiModal')).hide();
        this.reset();
        showNotification('UPI ID saved successfully!');
    });

    // Card form
    document.getElementById('cardForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const card = {
            number: document.getElementById('card-number').value,
            expiry: document.getElementById('card-expiry').value,
            cvv: document.getElementById('card-cvv').value,
            name: document.getElementById('card-name').value
        };
        savedCards.push(card);
        localStorage.setItem('savedCards', JSON.stringify(savedCards));
        displayCards();
        bootstrap.Modal.getInstance(document.getElementById('cardModal')).hide();
        this.reset();
        showNotification('Card saved successfully!');
    });

    // Format card number
    document.getElementById('card-number')?.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\s/g, '');
        let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
        e.target.value = formattedValue;
    });

    // Format expiry date
    document.getElementById('card-expiry')?.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        e.target.value = value;
    });
});

// Place order
function placeOrder() {
    const selectedAddress = document.querySelector('input[name="selectedAddress"]:checked');
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');

    if (!selectedAddress) {
        showNotification('Please select a delivery address');
        return;
    }

    if (paymentMethod.value === 'upi') {
        const upiSelect = document.getElementById('upi-select');
        if (!upiSelect.value) {
            showNotification('Please select a UPI ID');
            return;
        }
    } else if (paymentMethod.value === 'card') {
        const cardSelect = document.getElementById('card-select');
        if (!cardSelect.value) {
            showNotification('Please select a card');
            return;
        }
    }

    // Generate order ID
    const orderId = 'ORD' + Date.now();

    // Save order
    const order = {
        id: orderId,
        items: cart,
        address: savedAddresses[selectedAddress.value],
        paymentMethod: paymentMethod.value,
        date: new Date().toISOString(),
        status: 'confirmed'
    };

    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Clear cart
    cart = [];
    saveCart();

    // Redirect to tracking page
    window.location.href = `tracking.html?order=${orderId}`;
}

