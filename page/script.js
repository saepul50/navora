document.addEventListener('DOMContentLoaded', () => {

  /* ---------- NAV: shadow on scroll + mobile menu ---------- */
  const nav = document.getElementById('nav');
  const burger = document.getElementById('burger');

  const onScroll = () => {
    if (window.scrollY > 20) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.nav__links a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('menu-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- NAV SEARCH toggle ---------- */
  const searchToggle = document.getElementById('searchToggle');
  const navSearch = document.getElementById('navSearch');
  const productSearch = document.getElementById('productSearch');

  searchToggle.addEventListener('click', () => {
    const isOpen = navSearch.classList.toggle('is-open');
    searchToggle.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
      setTimeout(() => productSearch.focus(), 200);
    }
  });

  /* ---------- SCROLL REVEAL ---------- */
  const revealTargets = document.querySelectorAll(
    '.story__panels .panel, .prinsip-card, .product, .testi, .heritage__map, .heritage__card'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => io.observe(el));

  /* ---------- PETA WARISAN: data + interaksi ---------- */
  const heritageData = {
    yogya: {
      title: 'Kunyit &amp; Beras',
      region: 'Sewon, Bantul — Yogyakarta',
      desc: 'Ditanam di sawah tadah hujan bergilir dengan padi, menjaga kesuburan tanah. Dipanen bersama kelompok tani "Sumber Rejeki" yang beranggotakan 14 keluarga.',
      tag: 'Rotasi tanam menjaga tanah'
    },
    sunda: {
      title: 'Beras &amp; Melati',
      region: 'Ciwidey — Jawa Barat',
      desc: 'Melati dipetik pagi hari sebelum mekar penuh agar aromanya maksimal, dari kebun keluarga yang telah tiga generasi menanam bunga untuk upacara dan kecantikan.',
      tag: 'Panen manual, tanpa pestisida'
    },
    kalimantan: {
      title: 'Daun Sirih',
      region: 'Kapuas Hulu — Kalimantan Barat',
      desc: 'Tumbuh liar di pekarangan hutan adat Dayak, dipetik secukupnya sesuai kebutuhan produksi untuk menjaga populasi tanaman tetap lestari.',
      tag: 'Dipetik sesuai kebutuhan'
    },
    kenanga: {
      title: 'Bunga Kenanga',
      region: 'Boyolali — Jawa Tengah',
      desc: 'Disuling dengan metode uap tradisional oleh koperasi penyuling kecil, menghasilkan minyak atsiri tanpa pelarut kimia.',
      tag: 'Distilasi uap tradisional'
    },
    bali: {
      title: 'Kelapa Dara',
      region: 'Karangasem — Bali',
      desc: 'Diproses dengan metode fermentasi dingin oleh kelompok perempuan tani, tanpa pemanasan tinggi agar nutrisi minyak tetap utuh.',
      tag: 'Fermentasi dingin, tanpa kimia'
    },
    sumba: {
      title: 'Kayu Cendana',
      region: 'Sumba Timur — NTT',
      desc: 'Setiap pohon yang ditebang diganti dengan lima bibit baru bersama Yayasan Pelestarian Cendana Sumba — praktik wajib bagi seluruh petani mitra kami.',
      tag: '1 tebang, 5 tanam kembali'
    }
  };

  const card = document.getElementById('heritageCard');
  const pins = document.querySelectorAll('.pin');

  pins.forEach(pin => {
    const id = pin.getAttribute('data-id');
    const data = heritageData[id];
    if (!data) return;

    const activate = () => {
      pins.forEach(p => p.setAttribute('data-active', 'false'));
      pin.setAttribute('data-active', 'true');
      card.innerHTML = `
        <h3>${data.title}</h3>
        <p class="region">${data.region}</p>
        <p class="desc">${data.desc}</p>
        <span class="tag">${data.tag}</span>
      `;
    };

    pin.addEventListener('click', activate);
    pin.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
    });
    pin.addEventListener('mouseenter', activate);
  });

  /* ---------- KATALOG: filter kategori + pencarian ---------- */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const products = document.querySelectorAll('.product');
  const emptyState = document.getElementById('katalogEmpty');
  let activeFilter = 'semua';

  const applyFilters = () => {
    const query = productSearch.value.trim().toLowerCase();
    let visibleCount = 0;

    products.forEach(p => {
      const matchCat = activeFilter === 'semua' || p.getAttribute('data-cat') === activeFilter;
      const matchQuery = !query || p.getAttribute('data-name').includes(query);
      const show = matchCat && matchQuery;
      p.classList.toggle('is-hidden', !show);
      if (show) visibleCount++;
    });

    emptyState.hidden = visibleCount !== 0;
  };

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => { b.classList.remove('is-active'); b.setAttribute('aria-selected', 'false'); });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      activeFilter = btn.getAttribute('data-filter');
      applyFilters();
    });
  });

  productSearch.addEventListener('input', applyFilters);

  /* ---------- CTA FORM: tanpa backend, konfirmasi statis ---------- */
  const ctaForm = document.getElementById('ctaForm');
  const ctaNote = document.getElementById('ctaNote');

  ctaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('ctaEmail').value.trim();
    if (email) {
      ctaNote.textContent = `Terima kasih! Kabar dari BumiLokal akan dikirim ke ${email}.`;
      ctaForm.reset();
    }
  });

});
