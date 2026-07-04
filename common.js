// =========================================================
// NAVORA — perilaku bersama di semua halaman
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- NAV: shadow + mobile menu ---------- */
  const nav = document.getElementById('nav');
  const burger = document.getElementById('burger');
  if (burger) {
    burger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', String(isOpen));
    });
  }

  /* ---------- NAV SEARCH toggle ---------- */
  const searchToggle = document.getElementById('searchToggle');
  const navSearch = document.getElementById('navSearch');
  if (searchToggle && navSearch) {
    searchToggle.addEventListener('click', () => {
      const isOpen = navSearch.classList.toggle('is-open');
      searchToggle.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) {
        const input = navSearch.querySelector('input');
        setTimeout(() => input && input.focus(), 200);
      }
    });
  }

  /* ---------- WISHLIST (dekoratif, in-memory saja) ---------- */
  let wishlistCount = 0;
  const wishBadge = document.getElementById('wishlistBadge');
  window.NAVORA_toggleWishlist = function (btn, name) {
    const active = btn.classList.toggle('is-active');
    wishlistCount += active ? 1 : -1;
    if (wishBadge) wishBadge.textContent = wishlistCount;
    showToast(active ? `${name} ditambahkan ke wishlist` : `${name} dihapus dari wishlist`);
  };

  /* ---------- TOAST ---------- */
  let toastTimer = null;
  function showToast(message) {
    let toast = document.getElementById('navoraToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'navoraToast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
  }
  window.NAVORA_toast = showToast;

  /* ---------- SCROLL REVEAL ---------- */
  const revealTargets = document.querySelectorAll(
    '.pcard, .catcard, .testi, .heritage__map, .heritage__card, .feature'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(el => io.observe(el));

  /* ---------- PETA WARISAN NUSANTARA ---------- */
  const heritageCard = document.getElementById('heritageCard');
  const pins = document.querySelectorAll('.pin');
  if (heritageCard && pins.length && typeof HERITAGE_DATA !== 'undefined') {
    pins.forEach(pin => {
      const id = pin.getAttribute('data-id');
      const data = HERITAGE_DATA[id];
      if (!data) return;
      const activate = () => {
        pins.forEach(p => p.setAttribute('data-active', 'false'));
        pin.setAttribute('data-active', 'true');
        heritageCard.innerHTML = `
          <h3>${data.title}</h3>
          <p class="region">${data.region}</p>
          <p class="desc">${data.desc}</p>
          <span class="tag">${data.tag}</span>
        `;
      };
      pin.addEventListener('click', activate);
      pin.addEventListener('mouseenter', activate);
      pin.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
      });
    });
  }

  /* ---------- CTA NEWSLETTER FORM (statis, tanpa backend) ---------- */
  const ctaForm = document.getElementById('ctaForm');
  if (ctaForm) {
    ctaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('ctaEmail');
      const note = document.getElementById('ctaNote');
      const email = emailInput.value.trim();
      if (email && note) {
        note.textContent = `Terima kasih! Kabar dari Navora akan dikirim ke ${email}.`;
        ctaForm.reset();
      }
    });
  }

});

/* ---------- Helper render kartu produk (dipakai index & shop) ---------- */
function renderProductCard(p) {
  const catLabel = CATEGORIES[p.category].label;
  return `
    <article class="pcard">
      <div class="pcard__visual">
        ${productVisualSVG(p)}
        <span class="pcard__badge">${p.badge}</span>
        <button class="pcard__wish" aria-label="Tambah ke wishlist" onclick="NAVORA_toggleWishlist(this,'${p.name.replace(/'/g, "\\'")}')">
          <svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 21s-7-4.35-9.5-8.5C.9 9.2 2.3 6 5.6 6c1.9 0 3.3 1 4.4 2.4C11.1 7 12.5 6 14.4 6c3.3 0 4.7 3.2 3.1 6.5C19 16.65 12 21 12 21Z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
        </button>
      </div>
      <div class="pcard__body">
        <p class="pcard__cat">${catLabel}</p>
        <h3 class="pcard__name"><a href="product.html?id=${p.id}">${p.name}</a></h3>
        <div class="pcard__foot">
          <div><span class="pcard__price">${formatRupiah(p.price)}</span><br><span class="pcard__unit">${p.unit}</span></div>
          <a href="product.html?id=${p.id}" class="pcard__cart" aria-label="Lihat produk">
            <svg viewBox="0 0 24 24" width="16" height="16"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </div>
      </div>
    </article>
  `;
}
