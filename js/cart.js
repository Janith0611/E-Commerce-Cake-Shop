// Cart State Management

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add to Cart
function addToCart(productId, quantity = 1) {
  const product = dummyProducts.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      ...product,
      quantity: quantity
    });
  }

  saveCart();
  updateCartUI();
  showToast(`${product.name} added to cart!`);
  
  // Optional: open cart sidebar automatically
  openCartSidebar();
}

// Remove from Cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
  
  // Also update cart page if we are on it
  if (typeof renderCartPage === 'function') {
    renderCartPage();
  }
}

// Update Quantity
function updateQuantity(productId, newQty) {
  if (newQty < 1) return;
  
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity = parseInt(newQty);
    saveCart();
    updateCartUI();
    
    // Also update cart page if we are on it
    if (typeof renderCartPage === 'function') {
      renderCartPage();
    }
  }
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Cart Sidebar Logic
function openCartSidebar() {
  const sidebar = document.getElementById('cartSidebar');
  if (sidebar) {
    sidebar.classList.add('active');
    // document.body.style.overflow = 'hidden'; // Optional: disable body scroll
  }
}

function closeCartSidebar() {
  const sidebar = document.getElementById('cartSidebar');
  if (sidebar) {
    sidebar.classList.remove('active');
    // document.body.style.overflow = '';
  }
}

// Update UI
function updateCartUI() {
  // Update Badge counter
  const counters = document.querySelectorAll('.cart-count');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  counters.forEach(counter => {
    counter.textContent = totalItems;
    // Hide badge if 0
    counter.style.display = totalItems > 0 ? 'flex' : 'none';
  });

  // Update Sidebar content
  const cartItemsContainer = document.getElementById('cart-sidebar-items');
  const cartTotalAmount = document.getElementById('cart-sidebar-total');
  
  if (cartItemsContainer && cartTotalAmount) {
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p class="text-center" style="margin-top: 2rem;">Your cart is empty.</p>';
      cartTotalAmount.textContent = '$0.00';
      return;
    }

    let total = 0;
    cartItemsContainer.innerHTML = cart.map(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      return `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-info">
            <div class="cart-item-title">${item.name}</div>
            <div style="font-size: 0.9rem; color: var(--text-muted); margin: 5px 0;">Qty: ${item.quantity}</div>
            <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
          </div>
        </div>
      `;
    }).join('');

    cartTotalAmount.textContent = `$${total.toFixed(2)}`;
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();

  // Setup sidebar toggles
  const cartIcons = document.querySelectorAll('.cart-toggle');
  cartIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
      e.preventDefault();
      openCartSidebar();
    });
  });

  const closeCartBtn = document.getElementById('close-cart');
  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', closeCartSidebar);
  }
});
