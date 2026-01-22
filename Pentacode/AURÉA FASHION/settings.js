// Load and display saved data
function loadSettingsData() {
    loadCart();
    updateCartCount();
    
    const addresses = localStorage.getItem('savedAddresses');
    const upis = localStorage.getItem('savedUPIs');
    const cards = localStorage.getItem('savedCards');
    const orders = localStorage.getItem('orders');
    const profile = localStorage.getItem('profile');
    
    if (addresses) {
        const savedAddresses = JSON.parse(addresses);
        displayAddressesList(savedAddresses);
    }
    
    if (upis) {
        const savedUPIs = JSON.parse(upis);
        displayUPIList(savedUPIs);
    }
    
    if (cards) {
        const savedCards = JSON.parse(cards);
        displayCardsList(savedCards);
    }
    
    if (orders) {
        const orderHistory = JSON.parse(orders);
        displayOrderHistory(orderHistory);
    }
    
    if (profile) {
        const profileData = JSON.parse(profile);
        document.getElementById('profile-name').value = profileData.name || '';
        document.getElementById('profile-email').value = profileData.email || '';
        document.getElementById('profile-phone').value = profileData.phone || '';
    }
}

// Display addresses list
function displayAddressesList(addresses) {
    const container = document.getElementById('settings-addresses-list');
    if (!container) return;
    
    if (addresses.length === 0) {
        container.innerHTML = '<p class="text-muted">No saved addresses.</p>';
        return;
    }
    
    container.innerHTML = addresses.map((addr, index) => `
        <div class="address-item border rounded p-3 mb-3">
            <div class="d-flex justify-content-between align-items-start">
                <div>
                    <strong>${addr.name}</strong> - ${addr.type}
                    <p class="mb-0 text-muted small">${addr.line1}, ${addr.line2 ? addr.line2 + ', ' : ''}${addr.city}, ${addr.state} - ${addr.pincode}</p>
                    <p class="mb-0 text-muted small">Phone: ${addr.phone}</p>
                </div>
                <button class="btn btn-sm btn-outline-danger" onclick="deleteAddress(${index})">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Display UPI list
function displayUPIList(upis) {
    const container = document.getElementById('settings-upi-list');
    if (!container) return;
    
    if (upis.length === 0) {
        container.innerHTML = '<p class="text-muted">No saved UPI IDs.</p>';
        return;
    }
    
    container.innerHTML = upis.map((upi, index) => `
        <div class="upi-item border rounded p-3 mb-3">
            <div class="d-flex justify-content-between align-items-center">
                <span><i class="bi bi-phone"></i> ${upi}</span>
                <button class="btn btn-sm btn-outline-danger" onclick="deleteUPI(${index})">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Display cards list
function displayCardsList(cards) {
    const container = document.getElementById('settings-cards-list');
    if (!container) return;
    
    if (cards.length === 0) {
        container.innerHTML = '<p class="text-muted">No saved cards.</p>';
        return;
    }
    
    container.innerHTML = cards.map((card, index) => `
        <div class="card-item border rounded p-3 mb-3">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <strong><i class="bi bi-credit-card"></i> ${card.number.replace(/\d(?=\d{4})/g, '*')}</strong>
                    <p class="mb-0 text-muted small">${card.name} | Expires: ${card.expiry}</p>
                </div>
                <button class="btn btn-sm btn-outline-danger" onclick="deleteCard(${index})">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Display order history
function displayOrderHistory(orders) {
    const container = document.getElementById('order-history-list');
    if (!container) return;
    
    if (orders.length === 0) {
        container.innerHTML = '<p class="text-muted">No orders yet.</p>';
        return;
    }
    
    container.innerHTML = orders.reverse().map(order => `
        <div class="order-item border rounded p-3 mb-3">
            <div class="d-flex justify-content-between align-items-start mb-2">
                <div>
                    <strong>Order ID: ${order.id}</strong>
                    <p class="mb-0 text-muted small">${new Date(order.date).toLocaleDateString()}</p>
                </div>
                <a href="tracking.html?order=${order.id}" class="btn btn-sm btn-primary">Track Order</a>
            </div>
            <div class="order-items">
                ${order.items.map(item => `<span class="badge bg-secondary me-2">${item.name} (${item.size})</span>`).join('')}
            </div>
            <div class="mt-2">
                <strong>Total: ₹${order.items.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</strong>
            </div>
        </div>
    `).join('');
}

// Delete address
function deleteAddress(index) {
    const addresses = JSON.parse(localStorage.getItem('savedAddresses') || '[]');
    addresses.splice(index, 1);
    localStorage.setItem('savedAddresses', JSON.stringify(addresses));
    displayAddressesList(addresses);
    showNotification('Address deleted');
}

// Delete UPI
function deleteUPI(index) {
    const upis = JSON.parse(localStorage.getItem('savedUPIs') || '[]');
    upis.splice(index, 1);
    localStorage.setItem('savedUPIs', JSON.stringify(upis));
    displayUPIList(upis);
    showNotification('UPI ID deleted');
}

// Delete card
function deleteCard(index) {
    const cards = JSON.parse(localStorage.getItem('savedCards') || '[]');
    cards.splice(index, 1);
    localStorage.setItem('savedCards', JSON.stringify(cards));
    displayCardsList(cards);
    showNotification('Card deleted');
}

// Save notification settings
function saveNotificationSettings() {
    const settings = {
        email: document.getElementById('notif-email').checked,
        sms: document.getElementById('notif-sms').checked,
        push: document.getElementById('notif-push').checked,
        orders: document.getElementById('notif-orders').checked
    };
    localStorage.setItem('notificationSettings', JSON.stringify(settings));
    showNotification('Notification settings saved!');
}

// Change password
function changePassword() {
    const current = document.getElementById('current-password').value;
    const newPass = document.getElementById('new-password').value;
    const confirm = document.getElementById('confirm-password').value;
    
    if (newPass !== confirm) {
        showNotification('New passwords do not match!');
        return;
    }
    
    if (newPass.length < 6) {
        showNotification('Password must be at least 6 characters!');
        return;
    }
    
    localStorage.setItem('password', newPass);
    document.getElementById('current-password').value = '';
    document.getElementById('new-password').value = '';
    document.getElementById('confirm-password').value = '';
    showNotification('Password changed successfully!');
}

// Save preferences
function savePreferences() {
    const prefs = {
        language: document.getElementById('pref-language').value,
        currency: document.getElementById('pref-currency').value,
        theme: document.getElementById('pref-theme').value
    };
    localStorage.setItem('preferences', JSON.stringify(prefs));
    showNotification('Preferences saved!');
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadSettingsData();
    
    // Address form
    document.getElementById('addressForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const addresses = JSON.parse(localStorage.getItem('savedAddresses') || '[]');
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
        addresses.push(address);
        localStorage.setItem('savedAddresses', JSON.stringify(addresses));
        displayAddressesList(addresses);
        bootstrap.Modal.getInstance(document.getElementById('addressModal')).hide();
        this.reset();
        showNotification('Address saved successfully!');
    });
    
    // UPI form
    document.getElementById('upiForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const upis = JSON.parse(localStorage.getItem('savedUPIs') || '[]');
        const upi = document.getElementById('upi-id').value;
        upis.push(upi);
        localStorage.setItem('savedUPIs', JSON.stringify(upis));
        displayUPIList(upis);
        bootstrap.Modal.getInstance(document.getElementById('upiModal')).hide();
        this.reset();
        showNotification('UPI ID saved successfully!');
    });
    
    // Card form
    document.getElementById('cardForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const cards = JSON.parse(localStorage.getItem('savedCards') || '[]');
        const card = {
            number: document.getElementById('card-number').value,
            expiry: document.getElementById('card-expiry').value,
            cvv: document.getElementById('card-cvv').value,
            name: document.getElementById('card-name').value
        };
        cards.push(card);
        localStorage.setItem('savedCards', JSON.stringify(cards));
        displayCardsList(cards);
        bootstrap.Modal.getInstance(document.getElementById('cardModal')).hide();
        this.reset();
        showNotification('Card saved successfully!');
    });
    
    // Profile form
    document.getElementById('profileForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const profile = {
            name: document.getElementById('profile-name').value,
            email: document.getElementById('profile-email').value,
            phone: document.getElementById('profile-phone').value
        };
        localStorage.setItem('profile', JSON.stringify(profile));
        showNotification('Profile updated successfully!');
    });
    
    // Format card number
    document.getElementById('card-number')?.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s/g, '');
        let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
        e.target.value = formattedValue;
    });
    
    // Format expiry date
    document.getElementById('card-expiry')?.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        e.target.value = value;
    });
});

