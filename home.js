// =========================================================
// NAVORA — logika khusus halaman beranda
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- HERO ILLUSTRATIONS ---------- */
  const heroArt = {
    slideVisual1: `
      <circle cx="190" cy="190" r="170" fill="var(--green-light)"/>
      <ellipse cx="190" cy="300" rx="110" ry="16" fill="var(--green)" opacity="0.15"/>
      <rect x="150" y="140" width="80" height="150" rx="18" fill="var(--green)"/>
      <rect x="164" y="108" width="52" height="40" rx="8" fill="var(--green-dark)"/>
      <rect x="158" y="180" width="64" height="70" rx="6" fill="#fff" opacity="0.9"/>
      <path d="M110 160c10-40 40-70 70-80" stroke="var(--sirih)" stroke-width="6" stroke-linecap="round" fill="none"/>
      <circle cx="110" cy="160" r="12" fill="var(--gold)"/>
      <circle cx="255" cy="120" r="10" fill="var(--clay)"/>
    `,
    slideVisual2: `
      <circle cx="190" cy="190" r="170" fill="var(--gold-light)"/>
      <ellipse cx="190" cy="300" rx="110" ry="16" fill="var(--clay)" opacity="0.12"/>
      <path d="M120 300c0-70 40-120 70-160 30 40 70 90 70 160Z" fill="var(--clay)"/>
      <ellipse cx="190" cy="222" rx="40" ry="12" fill="var(--clay-light)"/>
      <circle cx="130" cy="130" r="14" fill="var(--green)"/>
      <circle cx="250" cy="150" r="10" fill="var(--gold)"/>
      <path d="M150 200c14 4 26 4 40 0" stroke="#fff" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.7"/>
    `,
    slideVisual3: `
      <circle cx="190" cy="190" r="170" fill="var(--green-light)"/>
      <rect x="120" y="150" width="140" height="110" rx="16" fill="var(--white)"/>
      <rect x="120" y="150" width="140" height="34" rx="16" fill="var(--green)"/>
      <text x="190" y="173" text-anchor="middle" font-family="Manrope, sans-serif" font-size="14" font-weight="800" fill="#fff">NAVORA20</text>
      <text x="190" y="220" text-anchor="middle" font-family="Fraunces, serif" font-size="30" font-weight="600" fill="var(--green-dark)">20% OFF</text>
      <text x="190" y="242" text-anchor="middle" font-family="Manrope, sans-serif" font-size="11" fill="var(--ink-soft)">Pemesanan Pertama</text>
      <circle cx="120" cy="150" r="6" fill="var(--gold)"/>
      <circle cx="260" cy="260" r="8" fill="var(--clay)"/>
    `
  };
  Object.keys(heroArt).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = heroArt[id];
  });

  /* ---------- HERO SLIDER ---------- */
  const slides = document.querySelectorAll('.slide');
  const dotsWrap = document.getElementById('heroDots');
  const prevBtn = document.getElementById('heroPrev');
  const nextBtn = document.getElementById('heroNext');
  let current = 0;
  let autoTimer = null;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    if (i === 0) dot.classList.add('is-active');
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap.querySelectorAll('button');

  function goTo(index) {
    slides[current].classList.remove('is-active');
    dots[current].classList.remove('is-active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    dots[current].classList.add('is-active');
    resetAuto();
  }
  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 6000);
  }
  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));
  resetAuto();

  /* ---------- FEATURED PRODUCTS ---------- */
  const featuredIds = [
    'nirmala-kelapa-serum', 'kala-aromatherapy-candle', 'kopi-lokal-fair-trade', 'madu-hutan-murni',
    'shampoo-bar', 'beeswax-wrap', 'cokelat-tree-to-bar', 'minyak-kayu-putih-buru'
  ];
  const featuredGrid = document.getElementById('featuredGrid');
  if (featuredGrid) {
    const items = featuredIds.map(getProductById).filter(Boolean);
    featuredGrid.innerHTML = items.map(renderProductCard).join('');
    // Re-observe newly injected cards for scroll reveal
    document.querySelectorAll('#featuredGrid .pcard').forEach(el => {
      el.classList.add('reveal');
      requestAnimationFrame(() => el.classList.add('is-visible'));
    });
  }

});
