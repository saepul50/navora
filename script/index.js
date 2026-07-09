document.addEventListener('DOMContentLoaded', function () {
  var containers = Array.prototype.slice.call(document.querySelectorAll('.freshio2-products.products.swiper-wrapper'));
  if (!containers.length) return;

  var products = (window.dataProducts || []).slice();
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

  // Generate vertical menu dari kategori produk
  generateVerticalMenu();

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
            '<a href="cart.html" class="button_cart add_to_cart_button" rel="nofollow"><span class="button-text">Tambah ke keranjang</span><span class="button-icon"><i class="fas fa-angle-double-right"></i></span></a>' +
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
        navigation: { nextEl: '.elementor-swiper-button-next', prevEl: '.elementor-swiper-button-prev' },
        breakpoints: { 1024: { slidesPerView: 4 }, 768: { slidesPerView: 3 }, 480: { slidesPerView: 2 }, 0: { slidesPerView: 1 } }
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

  function generateVerticalMenu() {
    var verticalMenu = document.querySelector('#menu-1-05b5675');
    if (!verticalMenu || !window.dataCategories || !window.dataSubCategories) return;

    // Clear existing menu
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
  }
});

