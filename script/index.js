document.addEventListener('DOMContentLoaded', function () {
  var containers = Array.prototype.slice.call(document.querySelectorAll('.freshio2-products.products.swiper-wrapper'));
  var products = (window.dataProducts || []).slice();

  if (containers.length) {
    // Fisher-Yates shuffle
    for (var i = products.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = products[i]; products[i] = products[j]; products[j] = tmp;
    }

    var featuredProducts = getSectionProducts(products, 0, 8);
    var bestSellerProducts = getSectionProducts(products, 8, 8);

    containers.forEach(function (container, index) {
      var selectedProducts = index === 1 ? bestSellerProducts : featuredProducts;

      renderProducts(container, selectedProducts);
      initSwiper(container);
    });
  }

  // Generate vertical menu dari kategori produk
  generateVerticalMenu();
  renderSubcategoryBanners();

  function renderProducts(container, selectedProducts) {
    container.innerHTML = '';

    (selectedProducts || []).forEach(function (p) {
      var li = document.createElement('li');
      li.className = 'swiper-slide product type-product';
      li.innerHTML = '' +
        '<div class="product-block" style="aspect-ratio: 9/16;">' +
          '<div class="product-top">' +
            '<div class="product-transition">' +
              '<div class="product-image">' +
                '<img loading="lazy" decoding="async" width="350" height="327" src="' + (getProductImage(p) || '../assets/foto-produk/placeholder.png') + '" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="' + (p.nama || '') + '" />' +
              '</div>' +
              '<div class="group-action">' +
                '<div class="shop-action">' +
                  '<button class="woosq-btn"><i class="fas fa-heart"></i> Tambah ke wishlist</button>' +
                  '<button class="woosq-btn"><i class="fas fa-eye"></i> Lihat cepat</button>' +
                  '<button class="woosc-btn"><i class="fas fa-exchange-alt"></i> Bandingkan</button>' +
                '</div>' +
              '</div>' +
              '<a href="product.html?id=' + encodeURIComponent(p.id || '') + '" class="woocommerce-LoopProduct-link woocommerce-loop-product__link"></a>' +
            '</div>' +
          '</div>' +
          '<div class="product-caption">' +
            '<h3 class="woocommerce-loop-product__title"><a href="product.html?id=' + encodeURIComponent(p.id || '') + '">' + (p.nama || '') + '</a></h3>' +
            '<span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">Rp</span> ' + formatPrice(p.price) + '</span></span>' +
            '<a href="cart.html" class="button_cart add_to_cart_button" rel="nofollow"><span class="button-text">Masukkan keranjang</span><span class="button-icon"><i class="fas fa-angle-double-right"></i></span></a>' +
          '</div>' +
        '</div>';
      container.appendChild(li);
    });
  }

  function getProductImage(product) {
    if (product && product.images && product.images.length) {
      return product.images[0];
    }
    return product && product.image;
  }

  function initSwiper(container) {
    var parent = container.closest('.freshio2-swiper');
    if (parent && window.Swiper) {
      try { if (parent.swiper && parent.swiper.destroy) parent.swiper.destroy(true, true); } catch (e) {}
      var swiper = new Swiper(parent, {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        autoplay: { delay: 5000 },
        watchOverflow: true,
        navigation: { nextEl: '.elementor-swiper-button-next', prevEl: '.elementor-swiper-button-prev' },
        breakpoints: {
          // Keep 4 slides up to 1000px width
          1000: { slidesPerView: 4, spaceBetween: 30 },
          // Fallback for medium screens (tablets)
          768: { slidesPerView: 4, spaceBetween: 20 },
          // Small screens (large phones): use auto sizing so CSS can control 2-per-row
          480: { slidesPerView: 'auto', spaceBetween: 16 },
          // Very small screens: use auto sizing to allow two slides side-by-side
          0: { slidesPerView: 'auto', spaceBetween: 12 }
        }
      });
      parent.swiper = swiper;
    }
  }

  function getSectionProducts(allProducts, startIndex, count) {
    if (!allProducts || !allProducts.length) return [];

    var result = [];
    for (var i = 0; i < count; i++) {
      var index = (startIndex + i) % allProducts.length;
      result.push(allProducts[index]);
    }
    return result;
  }

  function formatPrice(n) {
    var num = Number(n) || 0;
    return num.toLocaleString('id-ID');
  }

  function renderSubcategoryBanners() {
    var slotWrappers = Array.prototype.slice.call(document.querySelectorAll('.elementor-element-b9e1e1f .elementor-widget-freshio2-product-categories[data-subcategory-slot]'));
    if (!slotWrappers.length || !window.dataSubCategories || !window.dataSubCategories.length) return;

    var subcategorySlugs = ['perawatan-kulit-mandi', 'peralatan-pembersih-ramah-lingkungan', 'dekorasi-peralatan-makan-berkelanjutan', 'seduhan-nusantara', 'perawatan-diri-kesehatan'];
    var selectedSubcategories = subcategorySlugs.map(function (slug) {
      return (window.dataSubCategories || []).find(function (subcat) {
        return (subcat.slug || '').toLowerCase() === slug;
      });
    }).filter(Boolean);

    slotWrappers.forEach(function (wrapper, index) {
      var subcat = selectedSubcategories[index];
      if (!subcat) return;

      var container = wrapper.querySelector('.elementor-widget-container');
      if (!container) return;

      var shopHref = 'shop.html?category=' + encodeURIComponent(subcat.kategoriSlug || '') + '&subcategory=' + encodeURIComponent(subcat.slug || '');

      container.innerHTML = '' +
        '<div class="elementor-categories-item-wrapper freshio2-wrapper">' +
          '<div data-count="1" class="freshio2-con">' +
            '<div class="layout-1 freshio2-con-inner elementor-grid">' +
              '<div class="elementor-categories-item">' +
                '<div class="elementor-categories-item" style="background-image:url(\'' + (subcat.bannerImage || '../assets/banner-produk/all-kategori.png') + '\');">' +
                  '<a class="category-product-link" href="' + shopHref + '" title="' + escapeHtml(subcat.nama || '') + '"></a>' +
                  '<div class="category-product-caption">' +
                    '<div class="caption">' +
                      '<div class="category-title">' +
                        '<a class="category-product-link" href="' + shopHref + '" title="' + escapeHtml(subcat.nama || '') + '">' +
                          '<span class="category-title-span">' + escapeHtml(subcat.nama || '') + '</span>' +
                        '</a>' +
                      '</div>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>';
    });
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function generateVerticalMenu() {
    var menus = Array.prototype.slice.call(document.querySelectorAll('#menu-1-05b5675, #menu-1-a21f572'));
    if (!menus.length || !window.dataCategories || !window.dataSubCategories) return;

    // Render menu daftar di setiap placeholder yang ditemukan
    menus.forEach(function (verticalMenu) {
      verticalMenu.innerHTML = '';

      // Generate menu items dari dataCategories dan dataSubCategories
      (window.dataCategories || []).forEach(function (category, menuIndex) {
        var li = document.createElement('li');
        li.id = 'menu-item-' + (900 + menuIndex);
        li.className = 'menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-' + (900 + menuIndex);

        var html = '<a href="#">' +
          '<i class="menu-icon ' + (category.ikon || 'fas fa-circle') + '"></i>' +
          '<span class="menu-title">' + category.nama + '</span>' +
          '</a>';

        // Get subcategories untuk category ini
        var subCats = (window.dataSubCategories || []).filter(function (subcat) {
          return subcat.idKategori === category.id;
        });

        // Add subcategories
        if (subCats && subCats.length > 0) {
          html += '<ul class="sub-menu">';
          subCats.forEach(function (subcat, subIdx) {
            var subId = 10000 + menuIndex * 100 + subIdx;
            html += '<li id="menu-item-' + subId + '" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-' + subId + '">' +
              '<a href="#">' +
              '<span class="menu-title">' + subcat.nama + '</span>' +
              '</a>' +
              '</li>';
          });
          html += '</ul>';
        }

        li.innerHTML = html;
        verticalMenu.appendChild(li);
      });
    });
  }
});

