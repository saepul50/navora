(function () {
  function normalize(value) {
    return String(value || '').toLowerCase().trim();
  }

  function getSearchValue(field) {
    return field ? (field.value || '').trim() : '';
  }

  function getSearchTargetUrl(term) {
    var url = new URL('shop.html', window.location.href);
    if (term) {
      url.searchParams.set('q', term);
    } else {
      url.searchParams.delete('q');
    }
    return url.pathname + url.search;
  }

  function initializeSearchForms() {
    var forms = Array.prototype.slice.call(document.querySelectorAll('form.search-form, form.woocommerce-product-search'));

    forms.forEach(function (form) {
      var field = form.querySelector('input[type="search"], input[name="s"], input[name="q"]');
      if (!field) return;

      if (!field.name) {
        field.name = 'q';
      }

      if (!form.getAttribute('action')) {
        form.setAttribute('action', 'shop.html');
      }

      if (form.getAttribute('method') !== 'get') {
        form.setAttribute('method', 'get');
      }

      form.addEventListener('submit', function (event) {
        var term = getSearchValue(field);
        event.preventDefault();
        window.location.href = getSearchTargetUrl(term);
      });

      if (window.location.pathname.toLowerCase().endsWith('/shop.html')) {
        var params = new URLSearchParams(window.location.search);
        var currentValue = params.get('q') || params.get('s') || '';
        if (currentValue) {
          field.value = currentValue;
        }
      }
    });
  }

  document.addEventListener('DOMContentLoaded', initializeSearchForms);
})();
