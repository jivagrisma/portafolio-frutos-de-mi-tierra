/* =============================================
   FRUTOS DE MI TIERRA — Main Script
   ============================================= */

'use strict';

/* ─── PRODUCT DATA ─────────────────────────── */
const PRODUCTS = [
  // CHEESECAKES
  {
    id: 'cheesecake-maracuya', category: 'cheesecakes',
    name: 'Cheesecake de Maracuyá',
    desc: 'Cremoso con glaseado dorado de maracuyá y semillas de pulpa tropical',
    img: './assets/productos/Cheesecake-de-Maracuyá.png',
    sizes: ['5 oz', '8 oz', 'Tapa alta'],
    emoji: '🍰'
  },
  {
    id: 'cheesecake-mango', category: 'cheesecakes',
    name: 'Cheesecake de Mango',
    desc: 'Tropical con coulis de mango y rodajas frescas abanicadas sobre base cremosa',
    img: './assets/productos/Cheesecake-de-Mango.png',
    sizes: ['5 oz', '8 oz', 'Tapa alta'],
    emoji: '🍰'
  },
  {
    id: 'cheesecake-fresa', category: 'cheesecakes',
    name: 'Cheesecake de Fresa',
    desc: 'Glaseado rojo brillante con fresas frescas en rebanadas sobre cremosa base',
    img: './assets/productos/Cheesecake-de-Fresa.png',
    sizes: ['5 oz', '8 oz', 'Tapa alta'],
    emoji: '🍰'
  },
  {
    id: 'cheesecake-kiwi', category: 'cheesecakes',
    name: 'Cheesecake de Kiwi',
    desc: 'Glaseado verde vivo con rodajas de kiwi fresco sobre cremosa base blanca',
    img: './assets/productos/Cheesecake-de-Kiwi.png',
    sizes: ['5 oz', '8 oz', 'Tapa alta'],
    emoji: '🍰'
  },
  {
    id: 'cheesecake-pina', category: 'cheesecakes',
    name: 'Cheesecake de Piña',
    desc: 'Tropical y refrescante con piña caramelizada sobre base de galleta',
    img: './assets/productos/Cheesecake-de-Piña.png',
    sizes: ['5 oz', '8 oz', 'Tapa alta'],
    emoji: '🍰'
  },
  {
    id: 'cheesecake-naranja', category: 'cheesecakes',
    name: 'Cheesecake de Naranja',
    desc: 'Cítrico con glaseado naranja vibrante y ralladura fresca de naranja',
    img: './assets/productos/Cheesecake-de-Naranja.png',
    sizes: ['5 oz', '8 oz', 'Tapa alta'],
    emoji: '🍰'
  },
  {
    id: 'cheesecake-limon', category: 'cheesecakes',
    name: 'Cheesecake de Limón',
    desc: 'Ácido y cremoso con zeste de limón tahití y capas de crema suave',
    img: './assets/productos/Cheesecake-de-Limón.png',
    sizes: ['5 oz', '8 oz', 'Tapa alta'],
    emoji: '🍰'
  },

  // GALLETAS
  {
    id: 'galleta-miel-jengibre', category: 'galletas',
    name: 'Galletas de Miel con Jengibre',
    desc: 'Especiadas y dulces, horneadas artesanalmente con miel pura de campo',
    img: './assets/productos/Galletas-de-Miel-con-Jengibre.png',
    sizes: ['Bolsa'],
    emoji: '🍪'
  },
  {
    id: 'galleta-garbanzos', category: 'galletas',
    name: 'Galletas de Garbanzos con Parmesano',
    desc: 'Crujientes y saladas, base de garbanzo tostado con queso parmesano',
    img: './assets/productos/Galletas-de-Garbanzos-con-Queso-Parmesano.png',
    sizes: ['Bolsa'],
    emoji: '🍪'
  },
  {
    id: 'galleta-yuca', category: 'galletas',
    name: 'Galletas de Yuca',
    desc: 'Ligeras y crocantes, receta tradicional antioqueña de yuca rallada',
    img: './assets/productos/Galletas-de-Yuca.png',
    sizes: ['Bolsa'],
    emoji: '🍪'
  },
  {
    id: 'galleta-cafe', category: 'galletas',
    name: 'Galletas de Café',
    desc: 'Intensas con aroma inconfundible a café colombiano de altura',
    img: './assets/productos/Galletas-de-Café.png',
    sizes: ['Bolsa'],
    emoji: '🍪'
  },
  {
    id: 'galleta-algarroba', category: 'galletas',
    name: 'Galletas de Algarroba',
    desc: 'Naturalmente dulces, alternativa saludable al chocolate con algarroba andina',
    img: './assets/productos/Galletas-de-Algarroba.png',
    sizes: ['Bolsa'],
    emoji: '🍪'
  },

  // MERMELADAS
  {
    id: 'mermelada-tomate-alino', category: 'mermeladas',
    name: 'Mermelada de Tomate de Aliño con Jengibre y Canela',
    desc: 'Agridulce artesanal con especias cálidas, perfecta para quesos y panes',
    img: './assets/productos/Mermelada-de-Tomate-de-Aliño-con-Jengibre-y-Canela.png',
    sizes: ['Frasco'],
    emoji: '🫙'
  },
  {
    id: 'mermelada-tomate-arbol', category: 'mermeladas',
    name: 'Mermelada de Tomate de Árbol',
    desc: 'Frutal y levemente ácida, con la intensidad del tomate de árbol colombiano',
    img: './assets/productos/Mermelada-de-Tomate-de-Árbol.png',
    sizes: ['Frasco'],
    emoji: '🫙'
  },
  {
    id: 'mermelada-maracuya', category: 'mermeladas',
    name: 'Mermelada de Maracuyá',
    desc: 'Tropical e intensa, con semillas de pulpa fresca y aroma exótico',
    img: './assets/productos/Mermelada-de-Maracuyá.png',
    sizes: ['Frasco'],
    emoji: '🫙'
  },
  {
    id: 'mermelada-mango', category: 'mermeladas',
    name: 'Mermelada de Mango',
    desc: 'Dulce y aromática, con trozos visibles de mango maduro de la región',
    img: './assets/productos/Mermelada-de-Mango.png',
    sizes: ['Frasco'],
    emoji: '🫙'
  },
  {
    id: 'mermelada-cafe-naranja', category: 'mermeladas',
    name: 'Mermelada de Café + Naranja',
    desc: 'Sofisticada fusión colombiana, ideal para acompañar quesos y panes artesanales',
    img: './assets/productos/Mermelada-de-Café-Naranja.png',
    sizes: ['Frasco'],
    emoji: '🫙'
  },

  // GUACAMOLE
  {
    id: 'guacamole-mango', category: 'guacamole',
    name: 'Guacamole de Mango con Nachos',
    desc: 'Fresco y tropical, servido con nachos crocantes. Receta artesanal antioqueña',
    img: './assets/productos/Guacamole-de-Mango.png',
    sizes: ['Porción'],
    emoji: '🥑'
  },

  // ARROZ CON LECHE
  {
    id: 'arroz-milo', category: 'arroz-con-leche',
    name: 'Arroz con Leche Sabor a Milo',
    desc: 'Cremoso y reconfortante con toque de malta de chocolate Milo',
    img: './assets/productos/Arroz-con-Leche-Sabor-Milo.png',
    sizes: ['8 oz', '12 oz'],
    emoji: '🥛'
  },
  {
    id: 'arroz-cafe', category: 'arroz-con-leche',
    name: 'Arroz con Leche Sabor Café',
    desc: 'Reconfortante postre de cuchara con aroma intenso a café colombiano',
    img: './assets/productos/Arroz-con-Leche-Sabor-Café.png',
    sizes: ['8 oz', '12 oz'],
    emoji: '🥛'
  },

  // MUFFINS
  {
    id: 'muffin-coca-cola', category: 'muffins',
    name: 'Muffin Sabor a Coca-Cola',
    desc: 'Esponjoso con sorpresa de caramelo de cola y textura húmeda irresistible',
    img: './assets/productos/Muffin-Sabor-a-Coca-Cola.png',
    sizes: ['Unidad'],
    emoji: '🧁'
  },
  {
    id: 'muffin-vino', category: 'muffins',
    name: 'Muffin Sabor a Vino Tinto',
    desc: 'Sofisticado con reducción de vino tinto y frutos rojos del campo',
    img: './assets/productos/Muffin-Sabor-a-Vino-Tinto.png',
    sizes: ['Unidad'],
    emoji: '🧁'
  },

  // POSTRES
  {
    id: 'postre-guanabana', category: 'postres',
    name: 'Postre de Guanábana con Mora',
    desc: 'Tropical con contraste ácido de mora silvestre y crema de guanábana',
    img: './assets/productos/Postre-de-Guanábana-con-Mora.png',
    sizes: ['Porción'],
    emoji: '🍮'
  },
  {
    id: 'postre-pina', category: 'postres',
    name: 'Postre de Piña',
    desc: 'Refrescante y ligero, con capas de crema y piña caramelizada tropical',
    img: './assets/productos/Postre-de-Piña.png',
    sizes: ['Porción'],
    emoji: '🍮'
  },
  {
    id: 'postre-mango', category: 'postres',
    name: 'Postre de Mango',
    desc: 'Cremoso y frutal con capas alternas de mousse de mango fresco',
    img: './assets/productos/Postre-de-Mango.png',
    sizes: ['Porción'],
    emoji: '🍮'
  },
  {
    id: 'postre-fresa', category: 'postres',
    name: 'Postre de Fresa',
    desc: 'Clásico y romántico, capas de crema con coulís de fresa artesanal',
    img: './assets/productos/Postre-de-Fresa.png',
    sizes: ['Porción'],
    emoji: '🍮'
  },
  {
    id: 'postre-maracuya', category: 'postres',
    name: 'Postre de Maracuyá',
    desc: 'Intenso y tropical, mousse de maracuyá con textura sedosa irresistible',
    img: './assets/productos/Postre-de-Maracuyá.png',
    sizes: ['Porción'],
    emoji: '🍮'
  },
  {
    id: 'postre-tomate', category: 'postres',
    name: 'Postre de Tomate de Árbol',
    desc: 'Único y artesanal, el tomate de árbol transformado en postre cremoso',
    img: './assets/productos/Postre-de-Tomate-de-Árbol.png',
    sizes: ['Porción'],
    emoji: '🍮'
  },

  // SALPICONES
  {
    id: 'salpicon-papaya', category: 'salpicones',
    name: 'Salpicón en Jugo de Papaya',
    desc: 'Frutas frescas de temporada en base de jugo natural de papaya dulce',
    img: './assets/productos/Salpicón-en-Jugo-de-Papaya.png',
    sizes: ['Vaso'],
    emoji: '🥤'
  },
  {
    id: 'salpicon-maracuya', category: 'salpicones',
    name: 'Salpicón en Jugo de Maracuyá',
    desc: 'Frutas tropicales en base ácida y refrescante de maracuyá artesanal',
    img: './assets/productos/Salpicón-en-Jugo-de-Maracuyá.png',
    sizes: ['Vaso'],
    emoji: '🥤'
  },

  // TORTAS
  {
    id: 'torta-platano-maduro', category: 'tortas',
    name: 'Torta de Plátano Maduro',
    desc: 'Húmeda y dulce, receta casera antioqueña con plátano maduro de la región',
    img: './assets/productos/Torta-de-Plátano-Maduro.png',
    sizes: ['Porción', 'Torta entera'],
    emoji: '🎂'
  },
  {
    id: 'torta-banano', category: 'tortas',
    name: 'Torta de Banano',
    desc: 'Suave y aromática, banana bread artesanal con especias de la tierra',
    img: './assets/productos/Torta-de-Plátano-de-Banano.png',
    sizes: ['Porción', 'Torta entera'],
    emoji: '🎂'
  },
  {
    id: 'torta-chocolate', category: 'tortas',
    name: 'Torta de Plátano con Chocolate',
    desc: 'Irresistible combinación dulce-tropical con cobertura de chocolate intenso',
    img: './assets/productos/Torta-de-Plátano-de-Chocolate.png',
    sizes: ['Porción', 'Torta entera'],
    emoji: '🎂'
  }
];

const SECTIONS = [
  { id: 'cheesecakes',    label: 'Cheesecakes',     emoji: '🍰', desc: 'Presentaciones en 5 oz · 8 oz · Tapa alta' },
  { id: 'galletas',       label: 'Galletas',         emoji: '🍪', desc: 'Presentación en bolsa artesanal' },
  { id: 'mermeladas',     label: 'Mermeladas',       emoji: '🫙', desc: 'Presentación en frasco de vidrio' },
  { id: 'guacamole',      label: 'Guacamole',        emoji: '🥑', desc: 'Presentación en porción con nachos' },
  { id: 'arroz-con-leche',label: 'Arroz con Leche',  emoji: '🥛', desc: 'Presentaciones en 8 oz · 12 oz' },
  { id: 'muffins',        label: 'Muffins',          emoji: '🧁', desc: 'Presentación por unidad' },
  { id: 'postres',        label: 'Postres',          emoji: '🍮', desc: 'Presentación en porción' },
  { id: 'salpicones',     label: 'Salpicones',       emoji: '🥤', desc: 'Presentación en vaso' },
  { id: 'tortas',         label: 'Tortas',           emoji: '🎂', desc: 'Porción individual o torta entera' }
];

/* ─── CART STATE ───────────────────────────── */
let cart = { items: [] };
let pendingProduct = null;
let selectedSize = null;

/* ─── DARK MODE ────────────────────────────── */
function initTheme() {
  const stored = localStorage.getItem('fdt-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  setTheme(theme);
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('fdt-theme', theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  const icon = document.getElementById('theme-icon');
  if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  setTheme(current === 'dark' ? 'light' : 'dark');
}

/* ─── RENDER SECTIONS ──────────────────────── */
function renderProducts() {
  const wrapper = document.getElementById('products-wrapper');
  wrapper.innerHTML = '';

  SECTIONS.forEach(section => {
    const sectionProducts = PRODUCTS.filter(p => p.category === section.id);
    if (!sectionProducts.length) return;

    const sec = document.createElement('section');
    sec.className = 'product-section';
    sec.id = section.id;
    sec.setAttribute('data-category', section.id);

    sec.innerHTML = `
      <div class="section-header">
        <p class="section-label">${section.label}</p>
        <h2 class="section-title">
          <span class="section-emoji" aria-hidden="true">${section.emoji}</span>
          ${section.label}
        </h2>
        <p class="section-desc">${section.desc}</p>
      </div>
      <div class="product-grid">
        ${sectionProducts.map(p => renderCard(p)).join('')}
      </div>
    `;

    wrapper.appendChild(sec);
  });

  // Attach card events
  document.querySelectorAll('.btn-add').forEach(btn => {
    btn.addEventListener('click', handleAddClick);
  });

  // Img fallback
  document.querySelectorAll('.card-img-wrap img').forEach(img => {
    img.addEventListener('error', function () {
      const wrap = this.closest('.card-img-wrap');
      const emoji = this.dataset.emoji;
      wrap.innerHTML = `<div class="card-img-placeholder" aria-hidden="true">${emoji}</div>`;
    });
  });
}

function renderCard(product) {
  const cartItem = cart.items.find(i => i.id === product.id);
  const qty = cartItem ? cartItem.qty : 0;
  const btnLabel = qty > 0 ? qty : '+';

  return `
    <article class="product-card" data-id="${product.id}">
      <div class="card-img-wrap">
        <img
          src="${product.img}"
          alt="${product.name}"
          loading="lazy"
          data-emoji="${product.emoji}"
        />
        <button
          class="btn-add${qty > 0 ? ' has-items' : ''}"
          data-id="${product.id}"
          aria-label="Agregar ${product.name} al carrito"
        >${btnLabel}</button>
      </div>
      <div class="card-body">
        <h3 class="card-name">${product.name}</h3>
        <p class="card-desc">${product.desc}</p>
        <div class="card-badges">
          ${product.sizes.map(s => `<span class="badge-size">${s}</span>`).join('')}
        </div>
      </div>
    </article>
  `;
}

function updateCardButton(productId) {
  const btn = document.querySelector(`.btn-add[data-id="${productId}"]`);
  if (!btn) return;
  const item = cart.items.find(i => i.id === productId);
  btn.textContent = item && item.qty > 0 ? item.qty : '+';
  btn.classList.toggle('has-items', !!(item && item.qty > 0));
}

/* ─── ADD TO CART FLOW ─────────────────────── */
function handleAddClick(e) {
  const id = e.currentTarget.dataset.id;
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  // Animate button
  e.currentTarget.classList.add('pulse');
  setTimeout(() => e.currentTarget.classList.remove('pulse'), 300);

  if (product.sizes.length > 1) {
    openSizeModal(product);
  } else {
    addToCart(product, product.sizes[0]);
    showToast(`✓ ${product.name} agregado`);
  }
}

function addToCart(product, size) {
  const existing = cart.items.find(i => i.id === product.id && i.size === size);
  if (existing) {
    existing.qty++;
  } else {
    cart.items.push({ id: product.id, name: product.name, qty: 1, size, img: product.img, emoji: product.emoji });
  }
  updateCartUI();
  updateCardButton(product.id);
}

/* ─── SIZE MODAL ───────────────────────────── */
function openSizeModal(product) {
  pendingProduct = product;
  selectedSize = product.sizes[0];

  const modal = document.getElementById('size-modal');
  document.getElementById('modal-product-name').textContent = product.name;

  const optionsEl = document.getElementById('size-options');
  optionsEl.innerHTML = product.sizes.map(s => `
    <button class="size-option${s === selectedSize ? ' selected' : ''}" data-size="${s}" aria-label="Presentación ${s}">
      ${s}
    </button>
  `).join('');

  optionsEl.querySelectorAll('.size-option').forEach(btn => {
    btn.addEventListener('click', function () {
      optionsEl.querySelectorAll('.size-option').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');
      selectedSize = this.dataset.size;
    });
  });

  modal.classList.add('open');
}

function closeSizeModal() {
  document.getElementById('size-modal').classList.remove('open');
  pendingProduct = null;
  selectedSize = null;
}

function confirmSize() {
  if (pendingProduct && selectedSize) {
    addToCart(pendingProduct, selectedSize);
    showToast(`✓ ${pendingProduct.name} (${selectedSize}) agregado`);
  }
  closeSizeModal();
}

/* ─── CART UI ──────────────────────────────── */
function updateCartUI() {
  const total = cart.items.reduce((sum, i) => sum + i.qty, 0);

  // Update badges
  document.querySelectorAll('.cart-badge').forEach(b => {
    b.textContent = total;
    b.classList.toggle('visible', total > 0);
  });

  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cart-items');

  if (cart.items.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon" aria-hidden="true">🛍️</div>
        <p>Tu pedido está vacío</p>
        <p style="font-size:0.78rem;opacity:0.7">Agrega productos desde el catálogo</p>
      </div>
    `;
    return;
  }

  container.innerHTML = cart.items.map(item => `
    <div class="cart-item" data-id="${item.id}" data-size="${item.size}">
      <img class="cart-item-img"
        src="${item.img}"
        alt="${item.name}"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
        loading="lazy"
      />
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-size">${item.size}</p>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" aria-label="Disminuir cantidad" data-action="dec" data-id="${item.id}" data-size="${item.size}">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" aria-label="Aumentar cantidad" data-action="inc" data-id="${item.id}" data-size="${item.size}">+</button>
      </div>
      <button class="cart-item-remove" aria-label="Eliminar ${item.name}" data-action="remove" data-id="${item.id}" data-size="${item.size}">×</button>
    </div>
  `).join('');

  // Attach qty events
  container.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', handleCartAction);
  });
}

function handleCartAction(e) {
  const { action, id, size } = e.currentTarget.dataset;
  const idx = cart.items.findIndex(i => i.id === id && i.size === size);
  if (idx === -1) return;

  if (action === 'inc') {
    cart.items[idx].qty++;
  } else if (action === 'dec') {
    cart.items[idx].qty--;
    if (cart.items[idx].qty <= 0) cart.items.splice(idx, 1);
  } else if (action === 'remove') {
    cart.items.splice(idx, 1);
  }

  updateCartUI();
  updateCardButton(id);
}

function openCart() {
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('cart-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCartItems();
}

function closeCart() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── WHATSAPP ─────────────────────────────── */
const WA_NUMBER = '573103710992';

function buildWhatsAppMessage() {
  if (cart.items.length === 0) {
    window.open(`https://wa.me/${WA_NUMBER}`, '_blank');
    return;
  }

  const lines = cart.items.map(
    item => `• ${item.qty}x ${item.name} (${item.size})`
  );

  const message = [
    '🌿 *Hola Frutos de mi Tierra!* 🌿',
    'Me gustaría hacer el siguiente pedido:',
    '',
    ...lines,
    '',
    '📍 Por favor confírmame disponibilidad y precio. ¡Gracias! 😊'
  ].join('\n');

  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
}

/* ─── TOAST ────────────────────────────────── */
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

/* ─── NAVIGATION & SCROLL SPY ──────────────── */
function initNavFilters() {
  const filterBtns = document.querySelectorAll('.nav-filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      if (target === 'todos') {
        window.scrollTo({ top: document.getElementById('productos').offsetTop - 70, behavior: 'smooth' });
      } else {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initScrollSpy() {
  const sections = document.querySelectorAll('.product-section[data-category]');
  const filterBtns = document.querySelectorAll('.nav-filter-btn[data-target]');

  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.dataset.category;
        filterBtns.forEach(btn => {
          btn.classList.toggle('active', btn.dataset.target === id);
        });
      }
    });
  }, { rootMargin: '-30% 0px -65% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ─── SCROLL TO TOP ────────────────────────── */
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ─── PRINT / PDF ──────────────────────────── */
function downloadCatalog() {
  window.print();
}

/* ─── INIT ─────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProducts();
  initNavFilters();
  initScrollSpy();
  initScrollTop();

  // Dark mode toggle
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

  // Cart open/close
  document.getElementById('btn-cart-nav').addEventListener('click', openCart);
  document.getElementById('btn-fab-cart').addEventListener('click', openCart);
  document.getElementById('cart-close').addEventListener('click', closeCart);
  document.getElementById('cart-overlay').addEventListener('click', closeCart);

  // WhatsApp
  document.getElementById('fab-whatsapp').addEventListener('click', buildWhatsAppMessage);
  document.getElementById('btn-whatsapp-order').addEventListener('click', () => {
    closeCart();
    buildWhatsAppMessage();
  });

  // Size modal
  document.getElementById('modal-cancel').addEventListener('click', closeSizeModal);
  document.getElementById('modal-confirm').addEventListener('click', confirmSize);
  document.getElementById('size-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeSizeModal();
  });

  // PDF
  document.getElementById('btn-pdf').addEventListener('click', downloadCatalog);

  // Hero scroll CTA
  document.getElementById('btn-ver-catalogo').addEventListener('click', () => {
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
  });

  // Keyboard esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeSizeModal();
    }
  });
});
