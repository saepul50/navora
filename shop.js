// =========================================================
// NAVORA — logika halaman Toko (filter, pencarian, render grid)
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  const params = new URLSearchParams(window.location.search);
  let activeCategory = params.get('cat') || 'all';
  let activeSubs = new Set();
  let query = (params.get('q') || '').toLowerCase();

  const categoryFiltersEl = document.getElementById('categoryFilters');
  const subFiltersEl = document.getElementById('subFilters');
  const shopGrid = document.getElementById('shopGrid');
  const shopEmpty = document.getElementById('shopEmpty');
  const shopResults = document.getElementById('shopResults');
  const shopTitle = document.getElementById('shopTitle');
  const shopSubtitle = document.getElementById('shopSubtitle');
  const shopSearch = document.getElementById('shopSearch');
  const navSearchInput = document.getElementById('navSearchInput');

  shopSearch.value = query;
  if (navSearchInput) navSearchInput.value = query;

  /* ---------- Render filter kategori ---------- */
  function renderCategoryFilters() {
    let html = `
      <label>
        <input type="radio" name="cat" value="all" ${activeCategory === 'all' ? 'checked' : ''}>
        Semua Kategori
      </label>
    `;
    Object.keys(CATEGORIES).forEach(key => {
      html += `
        <label>
          <input type="radio" name="cat" value="${key}" ${activeCategory === key ? 'checked' : ''}>
          ${CATEGORIES[key].label}
        </label>
      `;
    });
    categoryFiltersEl.innerHTML = html;

    categoryFiltersEl.querySelectorAll('input').forEach(input => {
      input.addEventListener('change', () => {
        activeCategory = input.value;
        activeSubs.clear();
        renderSubFilters();
        updateHeader();
        applyFilters();
      });
    });
  }

  /* ---------- Render filter sub-kategori (tergantung kategori aktif) ---------- */
  function renderSubFilters() {
    const cats = activeCategory === 'all' ? Object.keys(CATEGORIES) : [activeCategory];
    let html = '';
    cats.forEach(catKey => {
      const subs = CATEGORIES[catKey].subs;
      Object.keys(subs).forEach(subKey => {
        html += `
          <label>
            <input type="checkbox" value="${subKey}" ${activeSubs.has(subKey) ? 'checked' : ''}>
            ${subs[subKey]}
          </label>
        `;
      });
    });
    subFiltersEl.innerHTML = html || '<p style="font-size:0.85rem;color:var(--ink-soft);">Pilih kategori terlebih dahulu.</p>';

    subFiltersEl.querySelectorAll('input').forEach(input => {
      input.addEventListener('change', () => {
        if (input.checked) activeSubs.add(input.value);
        else activeSubs.delete(input.value);
        applyFilters();
      });
    });
  }

  function updateHeader() {
    if (activeCategory === 'all') {
      shopTitle.textContent = 'Semua Produk';
      shopSubtitle.textContent = `${PRODUCTS.length} produk lokal berkelanjutan dari petani dan pengrajin mitra Navora.`;
    } else {
      const cat = CATEGORIES[activeCategory];
      shopTitle.textContent = cat.label;
      shopSubtitle.textContent = cat.tagline;
    }
  }

  /* ---------- Filter & render grid ---------- */
  function applyFilters() {
    let results = PRODUCTS.filter(p => {
      const matchCat = activeCategory === 'all' || p.category === activeCategory;
      const matchSub = activeSubs.size === 0 || activeSubs.has(p.sub);
      const matchQuery = !query || (p.name + ' ' + p.ingredients.join(' ')).toLowerCase().includes(query);
      return matchCat && matchSub && matchQuery;
    });

    shopResults.textContent = `Menampilkan ${results.length} dari ${PRODUCTS.length} produk`;
    shopGrid.innerHTML = results.map(renderProductCard).join('');
    shopEmpty.hidden = results.length !== 0;

    document.querySelectorAll('#shopGrid .pcard').forEach(el => {
      el.classList.add('reveal');
      requestAnimationFrame(() => el.classList.add('is-visible'));
    });
  }

  shopSearch.addEventListener('input', () => {
    query = shopSearch.value.trim().toLowerCase();
    applyFilters();
  });

  document.getElementById('resetFilters').addEventListener('click', () => {
    activeCategory = 'all';
    activeSubs.clear();
    query = '';
    shopSearch.value = '';
    renderCategoryFilters();
    renderSubFilters();
    updateHeader();
    applyFilters();
  });

  renderCategoryFilters();
  renderSubFilters();
  updateHeader();
  applyFilters();
});
