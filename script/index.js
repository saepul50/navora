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
  initSubcategoryBanner();

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
        slidesPerView: 2,
        spaceBetween: 12,
        loop: true,
        autoplay: { delay: 5000 },
        watchOverflow: true,
        navigation: { nextEl: '.elementor-swiper-button-next', prevEl: '.elementor-swiper-button-prev' },
        breakpoints: {
          // Keep 4 slides per view from 480px and up
          480: { slidesPerView: 4, spaceBetween: 20 },
          1000: { slidesPerView: 4, spaceBetween: 30 }
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
              '<a href="#" data-subcategory-id="' + subcat.id + '">' +
            '<span class="menu-title">' + subcat.nama + '</span>' +
            '</a>' +
            '</li>';
        });
        html += '</ul>';
      }

      li.innerHTML = html;
      verticalMenu.appendChild(li);
    });

      bindSubcategoryBannerLinks();
  }

    function initSubcategoryBanner() {
      var defaultSubcategoryId = getSubcategoryIdFromUrl() || ((window.dataSubCategories || [])[0] || {}).id;
      if (defaultSubcategoryId) {
        updateSubcategoryBannerById(defaultSubcategoryId);
      }
    }

    function bindSubcategoryBannerLinks() {
      var links = document.querySelectorAll('#menu-1-05b5675 a[data-subcategory-id]');
      links.forEach(function (link) {
        link.addEventListener('click', function (event) {
          event.preventDefault();
          var subcategoryId = this.getAttribute('data-subcategory-id');
          if (subcategoryId) {
            updateSubcategoryBannerById(subcategoryId);
          }
        });
      });
    }

    function getSubcategoryIdFromUrl() {
      try {
        return new URLSearchParams(window.location.search).get('subcategory');
      } catch (e) {
        return null;
      }
    }

    function updateSubcategoryBannerById(subcategoryId) {
      var subcategory = (window.dataSubCategories || []).find(function (item) {
        return item.id === subcategoryId;
      });
      if (!subcategory) {
        subcategory = (window.dataSubCategories || [])[0];
      }
      renderSubcategoryBanner(subcategory);
    }

    function renderSubcategoryBanner(subcategory) {
      if (!subcategory) return;
      var bannerContainer = document.querySelector('#subcategory-banner .elementor-widget-container');
      if (!bannerContainer) return;

      var imageUrl = subcategory.bannerImage || '../assets/banner-produk/banner-summersale.png';
      var title = subcategory.nama || subcategory.namaKategori || 'Subcategory';
      var description = subcategory.deskripsi || '';
      var buttonUrl = 'shop.html?subcategory=' + encodeURIComponent(subcategory.id);

      bannerContainer.innerHTML =
        '<div class="elementor-cta--skin-cover elementor-cta elementor-freshio2-banner">' +
          '<div class="elementor-cta__bg-wrapper">' +
            '<div class="elementor-cta__bg-overlay"></div>' +
            '<div class="elementor-cta__bg elementor-bg" style="background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(' + imageUrl + ');"></div>' +
          '</div>' +
          '<div class="elementor-cta__content">' +
            '<div class="elementor-cta__content_inner">' +
              '<div class="elementor-cta__title elementor-cta__content-item elementor-content-item">' + title + '</div>' +
              '<div class="elementor-cta__description elementor-cta__content-item elementor-content-item">' + description + '</div>' +
              '<div class="elementor-cta__button-wrapper elementor-cta__content-item elementor-content-item">' +
                '<a class="elementor-cta__button elementor-button" href="' + buttonUrl + '">' +
                  '<span class="elementor-button-content-wrapper">' +
                    '<span class="elementor-button-icon"><i aria-hidden="true" class="fas fa-angle-double-right"></i></span>' +
                    '<span class="elementor-button-text">Lihat Kategori</span>' +
                  '</span>' +
                '</a>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>';
    }
});

