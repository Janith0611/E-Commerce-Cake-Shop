const dummyProducts = [
  // Birthday Cakes
  { id: 1, name: 'Strawberry Dream Cake', category: 'Birthday Cakes', price: 45.00, rating: 5, reviews: 124, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80', description: 'Light vanilla sponge filled with fresh strawberry compote and whipped cream.', isBestseller: true, isNew: false },
  { id: 2, name: 'Funfetti Celebration', category: 'Birthday Cakes', price: 35.00, rating: 4.5, reviews: 89, image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80', description: 'Colorful vanilla cake packed with rainbow sprinkles and topped with buttercream.', isBestseller: false, isNew: true },
  { id: 3, name: 'Classic Chocolate Fudge', category: 'Birthday Cakes', price: 40.00, rating: 4.8, reviews: 210, image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=600&q=80', description: 'Decadent layers of chocolate fudge cake covered in rich chocolate ganache.', isBestseller: true, isNew: false },
  { id: 4, name: 'Lemon Raspberry Delight', category: 'Birthday Cakes', price: 42.00, rating: 4.6, reviews: 67, image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80', description: 'Zesty lemon cake layers with tangy raspberry filling and lemon buttercream.', isBestseller: false, isNew: false },
  { id: 5, name: 'Caramel Macchiato Cake', category: 'Birthday Cakes', price: 48.00, rating: 4.7, reviews: 54, image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=600&q=80', description: 'Coffee-infused sponge with salted caramel dripping and espresso buttercream.', isBestseller: false, isNew: true },

  // Wedding Cakes
  { id: 6, name: 'Elegant Floral Tier', category: 'Wedding Cakes', price: 250.00, rating: 5, reviews: 32, image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=600&q=80', description: 'Two-tier vanilla bean cake adorned with handcrafted sugar flowers.', isBestseller: true, isNew: false },
  { id: 7, name: 'Rustic Naked Cake', category: 'Wedding Cakes', price: 180.00, rating: 4.9, reviews: 45, image: 'https://images.unsplash.com/photo-1519340333755-56e9c1d04579?auto=format&fit=crop&w=600&q=80', description: 'Three tiers of naked almond cake layered with fresh berries and cream.', isBestseller: true, isNew: false },
  { id: 8, name: 'Golden Romance', category: 'Wedding Cakes', price: 300.00, rating: 4.8, reviews: 28, image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=600&q=80', description: 'Luxurious fondant-covered cake with edible 24k gold leaf accents.', isBestseller: false, isNew: false },
  { id: 9, name: 'Classic White Pearl', category: 'Wedding Cakes', price: 220.00, rating: 4.7, reviews: 56, image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=600&q=80', description: 'Traditional white cake with pearl piping and smooth buttercream finish.', isBestseller: false, isNew: false },
  
  // Chocolate Cakes
  { id: 10, name: 'Death by Chocolate', category: 'Chocolate Cakes', price: 55.00, rating: 5, reviews: 340, image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=600&q=80', description: 'The ultimate chocolate experience with six layers of dark chocolate goodness.', isBestseller: true, isNew: false },
  { id: 11, name: 'Black Forest', category: 'Chocolate Cakes', price: 45.00, rating: 4.6, reviews: 112, image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=600&q=80', description: 'Chocolate sponge soaked in cherry syrup, layered with whipped cream and cherries.', isBestseller: false, isNew: false },
  { id: 12, name: 'Hazelnut Truffle', category: 'Chocolate Cakes', price: 50.00, rating: 4.8, reviews: 95, image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=600&q=80', description: 'Rich chocolate and roasted hazelnut cake coated in a crunchy praline shell.', isBestseller: false, isNew: true },
  { id: 13, name: 'White Chocolate Raspberry', category: 'Chocolate Cakes', price: 48.00, rating: 4.7, reviews: 78, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80', description: 'Sweet white chocolate cake with a tart raspberry swirl inside.', isBestseller: false, isNew: false },

  // Cupcakes
  { id: 14, name: 'Vanilla Bean Cupcake', category: 'Cupcakes', price: 4.00, rating: 4.5, reviews: 420, image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=600&q=80', description: 'Classic vanilla cupcake topped with a swirl of fluffy buttercream.', isBestseller: true, isNew: false },
  { id: 15, name: 'Red Velvet Cupcake', category: 'Cupcakes', price: 4.50, rating: 4.8, reviews: 310, image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=600&q=80', description: 'Signature red velvet with tangy cream cheese frosting.', isBestseller: true, isNew: false },
  { id: 16, name: 'Matcha Green Tea', category: 'Cupcakes', price: 5.00, rating: 4.4, reviews: 85, image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=600&q=80', description: 'Earthy matcha cupcake paired with sweet white chocolate frosting.', isBestseller: false, isNew: true },
  { id: 17, name: 'Salted Caramel Cupcake', category: 'Cupcakes', price: 4.50, rating: 4.7, reviews: 150, image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=600&q=80', description: 'Vanilla cupcake with a gooey caramel center and sea salt sprinkle.', isBestseller: false, isNew: false },
  { id: 18, name: 'Peanut Butter Cup', category: 'Cupcakes', price: 5.00, rating: 4.9, reviews: 120, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80', description: 'Chocolate cupcake topped with creamy peanut butter frosting.', isBestseller: false, isNew: false },

  // Custom Cakes
  { id: 19, name: 'Unicorn Fantasy', category: 'Custom Cakes', price: 75.00, rating: 4.9, reviews: 88, image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=600&q=80', description: 'Magical unicorn cake with pastel mane and gold horn.', isBestseller: true, isNew: false },
  { id: 20, name: 'Galaxy Drip Cake', category: 'Custom Cakes', price: 65.00, rating: 4.7, reviews: 64, image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80', description: 'Mesmerizing galaxy-themed mirror glaze over dark chocolate cake.', isBestseller: false, isNew: true },
  { id: 21, name: 'Vintage Heart Cake', category: 'Custom Cakes', price: 60.00, rating: 4.8, reviews: 105, image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=600&q=80', description: 'Trendy retro-style heart-shaped cake with intricate piping.', isBestseller: true, isNew: true },
  { id: 22, name: 'Geode Rock Cake', category: 'Custom Cakes', price: 85.00, rating: 4.6, reviews: 42, image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=600&q=80', description: 'Stunning edible crystal geode carved into a marble fondant cake.', isBestseller: false, isNew: false },
];

function generateStars(rating) {
  let starsHtml = '';
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      starsHtml += '<i class="fas fa-star"></i>';
    } else if (i === fullStars && halfStar) {
      starsHtml += '<i class="fas fa-star-half-alt"></i>';
    } else {
      starsHtml += '<i class="far fa-star"></i>';
    }
  }
  return starsHtml;
}

function createProductCard(product) {
  const badges = [];
  if (product.isBestseller) badges.push('<span class="badge-tag">Bestseller</span>');
  if (product.isNew) badges.push('<span class="badge-tag" style="background: var(--accent-color); color: var(--text-color);">New</span>');

  return `
    <div class="product-card fade-in" data-id="${product.id}" data-category="${product.category}" data-price="${product.price}">
      <div class="product-img-wrapper">
        <div class="product-badges">
          ${badges.join('')}
        </div>
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="product-actions-overlay">
          <button class="action-btn add-to-wishlist" aria-label="Add to Wishlist" onclick="toggleWishlist(${product.id})">
            <i class="far fa-heart"></i>
          </button>
          <button class="action-btn quick-view" aria-label="Quick View" onclick="openQuickView(${product.id})">
            <i class="far fa-eye"></i>
          </button>
        </div>
      </div>
      <div class="product-info">
        <div class="stars">${generateStars(product.rating)} <span style="color:var(--text-muted); font-size: 0.8rem;">(${product.reviews})</span></div>
        <h3 class="product-title"><a href="product.html?id=${product.id}">${product.name}</a></h3>
        <div class="product-price">$${product.price.toFixed(2)}</div>
        <button class="btn btn-primary add-to-cart-btn" onclick="addToCart(${product.id})">
          <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
    </div>
  `;
}

// Function to render products into a container
function renderProducts(products, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  if (products.length === 0) {
    container.innerHTML = '<p class="text-center" style="grid-column: 1/-1; padding: 3rem;">No products found matching your criteria.</p>';
    return;
  }
  
  container.innerHTML = products.map(product => createProductCard(product)).join('');
  
  // Trigger intersection observer for new elements
  if (window.initScrollAnimations) {
    setTimeout(() => {
      window.initScrollAnimations();
    }, 50);
  }
}

// Quick View Functionality
function openQuickView(productId) {
  const product = dummyProducts.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickViewModal');
  if (!modal) return;

  modal.querySelector('.modal-img').src = product.image;
  modal.querySelector('.modal-img').alt = product.name;
  modal.querySelector('h2').textContent = product.name;
  modal.querySelector('.stars').innerHTML = generateStars(product.rating) + ` <span>(${product.reviews} reviews)</span>`;
  modal.querySelector('.modal-price').textContent = `$${product.price.toFixed(2)}`;
  modal.querySelector('.modal-desc').textContent = product.description;
  
  // Update add to cart button
  const addBtn = modal.querySelector('.modal-add-btn');
  addBtn.onclick = () => {
    const qty = parseInt(modal.querySelector('.qty-input').value);
    addToCart(product.id, qty);
    closeModal();
  };

  // Reset qty
  modal.querySelector('.qty-input').value = 1;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('quickViewModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Ensure quick view elements exist (they will be in footer or global include)
document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.querySelector('.close-modal');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  const modal = document.getElementById('quickViewModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Handle qty buttons in modal
  const minusBtn = document.querySelector('.qty-btn.minus');
  const plusBtn = document.querySelector('.qty-btn.plus');
  const qtyInput = document.querySelector('.qty-input');

  if (minusBtn && plusBtn && qtyInput) {
    minusBtn.addEventListener('click', () => {
      let val = parseInt(qtyInput.value);
      if (val > 1) qtyInput.value = val - 1;
    });
    plusBtn.addEventListener('click', () => {
      let val = parseInt(qtyInput.value);
      qtyInput.value = val + 1;
    });
  }
});
