// =========================================================
// NAVORA — logika halaman Detail Produk
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const product = id ? getProductById(id) : null;
  const pdpContent = document.getElementById('pdpContent');
  const breadcrumb = document.getElementById('breadcrumb');

  if (!product) {
    pdpContent.innerHTML = `
      <div style="padding:80px 0; text-align:center;">
        <h1 class="h2">Produk Tidak Ditemukan</h1>
        <p style="color:var(--ink-soft); margin-bottom:24px;">Produk yang Anda cari mungkin sudah tidak tersedia atau tautannya salah.</p>
        <a href="shop.html" class="btn btn--primary">Kembali ke Toko</a>
      </div>
    `;
    return;
  }

  const cat = CATEGORIES[product.category];
  const subLabel = cat.subs[product.sub];

  document.title = `${product.name} — Navora`;
  breadcrumb.innerHTML = `
    <a href="index.html">Beranda</a><span>/</span>
    <a href="shop.html">Toko</a><span>/</span>
    <a href="shop.html?cat=${product.category}">${cat.label}</a><span>/</span>
    ${product.name}
  `;

  const waMessage = encodeURIComponent(`Halo Navora, saya ingin memesan ${product.name} (${product.unit}).`);

  pdpContent.innerHTML = `
    <div class="pdp__grid">
      <div class="pdp__visual">${productVisualSVG(product)}</div>
      <div>
        <span class="pill pdp__badge">${product.badge}</span>
        <h1 class="pdp__title">${product.name}</h1>
        <div class="pdp__meta">
          <span>${cat.label}</span> · <span>${subLabel}</span>
        </div>
        <p class="pdp__price">${formatRupiah(product.price)} <span style="font-size:0.9rem;font-weight:500;color:var(--ink-soft);"> / ${product.unit}</span></p>
        <p class="pdp__short">${product.shortDesc}</p>

        <div class="pdp__actions">
          <a href="https://wa.me/6281234567890?text=${waMessage}" target="_blank" rel="noopener" class="btn btn--wa">Pesan via WhatsApp</a>
          <button class="btn btn--outline" id="wishBtn" onclick="NAVORA_toggleWishlist(this,'${product.name.replace(/'/g, "\\'")}')">Simpan ke Wishlist</button>
        </div>

        <div class="pdp__section">
          <h3>Deskripsi</h3>
          <p>${product.description}</p>
        </div>

        <div class="pdp__section">
          <h3>Bahan-Bahan</h3>
          <div class="pdp__ing">
            ${product.ingredients.map(i => `<span>${i}</span>`).join('')}
          </div>
        </div>

        <div class="pdp__section">
          <div class="pdp__origin">
            <svg viewBox="0 0 24 24"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="10" r="2.6" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
            <p style="margin:0;"><strong>Asal Bahan:</strong> ${product.origin}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  /* ---------- Produk terkait ---------- */
  const related = getRelatedProducts(product, 4);
  const relatedSection = document.getElementById('relatedSection');
  const relatedGrid = document.getElementById('relatedGrid');
  if (related.length) {
    relatedSection.hidden = false;
    relatedGrid.innerHTML = related.map(renderProductCard).join('');
    document.querySelectorAll('#relatedGrid .pcard').forEach(el => {
      el.classList.add('reveal');
      requestAnimationFrame(() => el.classList.add('is-visible'));
    });
  }
});
