/* LSG · Carrito con cierre por WhatsApp */
(function () {
  'use strict';
  var WA = '5491135072796';
  var css = [
    '.lsgc-act{display:flex;align-items:center;gap:14px}',
    '.lsgc-btn{position:relative;display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border:1px solid rgba(156,122,60,.5);background:transparent;color:#9c7a3c;cursor:pointer;padding:0;transition:background .3s,color .3s}',
    '.lsgc-btn:hover{background:#9c7a3c;color:#fff}',
    '.lsgc-btn svg{width:16px;height:16px}',
    '.lsgc-count{position:absolute;top:-7px;right:-7px;min-width:17px;height:17px;padding:0 4px;border-radius:9px;background:#111;color:#fff;font:500 9.5px/17px Jost,system-ui,sans-serif;text-align:center;letter-spacing:0}',
    '.lsgc-count[hidden]{display:none}',
    '.lsgc-bump{animation:lsgcBump .5s ease}',
    '@keyframes lsgcBump{0%{transform:scale(1)}40%{transform:scale(1.18)}100%{transform:scale(1)}}',
    '.lsgc-add{position:absolute;left:10px;right:10px;bottom:10px;z-index:3;display:flex;align-items:center;justify-content:center;gap:8px;padding:11px 10px;border:1px solid rgba(156,122,60,.7);background:rgba(255,255,255,.92);backdrop-filter:blur(4px);color:#9c7a3c;font:500 9.5px/1 Jost,system-ui,sans-serif;letter-spacing:.3em;text-transform:uppercase;cursor:pointer;opacity:0;transform:translateY(6px);transition:opacity .3s,transform .3s,background .3s,color .3s}',
    '.lsgc-add svg{width:13px;height:13px;flex:none}',
    'a.card:hover .lsgc-add,.lsgc-add:focus-visible,.lsgc-add.is-in{opacity:1;transform:none}',
    '.lsgc-add:hover{background:#9c7a3c;color:#fff}',
    '.lsgc-add.is-in{background:#111;border-color:#111;color:#fff}',
    '@media (hover:none){.lsgc-add{opacity:1;transform:none;padding:9px 6px;font-size:8.5px;letter-spacing:.2em;left:6px;right:6px;bottom:6px}}',
    '@media (max-width:600px){.lsgc-add{white-space:nowrap;padding:9px 6px;font-size:8px;letter-spacing:.16em;left:6px;right:6px;bottom:6px}.lsgc-add svg{display:none}}',
    '.lsgc-sizes{position:absolute;left:10px;right:10px;bottom:52px;z-index:4;background:#fff;border:1px solid #e4e2de;padding:12px;box-shadow:0 10px 30px rgba(0,0,0,.08)}',
    '.lsgc-sizes p{margin:0 0 8px;font:500 9px/1 Jost,system-ui,sans-serif;letter-spacing:.3em;text-transform:uppercase;color:#6e6a64}',
    '.lsgc-sizes button{display:block;width:100%;text-align:left;padding:9px 10px;margin-top:4px;border:1px solid #e4e2de;background:#fff;color:#111;font:400 12px/1.2 Jost,system-ui,sans-serif;cursor:pointer}',
    '.lsgc-sizes button:hover{border-color:#9c7a3c;color:#9c7a3c}',
    '.lsgc-sizes button[disabled]{opacity:.35;cursor:not-allowed;text-decoration:line-through}',
    '.lsgc-pdp{margin-bottom:12px;width:100%;display:flex;align-items:center;justify-content:center;gap:12px;padding:16px 32px;border:1px solid #111;background:#111;color:#fff;font:500 10.5px/1 Jost,system-ui,sans-serif;letter-spacing:.32em;text-transform:uppercase;cursor:pointer;transition:background .3s,color .3s}',
    '.lsgc-pdp:hover{background:#fff;color:#111}',
    '.lsgc-pdp svg{width:14px;height:14px}',
    '.lsgc-pdp-sizes{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 14px}',
    '.lsgc-pdp-sizes button{padding:10px 14px;border:1px solid #e4e2de;background:#fff;color:#111;font:400 12px/1 Jost,system-ui,sans-serif;cursor:pointer}',
    '.lsgc-pdp-sizes button.on{border-color:#111;background:#111;color:#fff}',
    '.lsgc-pdp-sizes button[disabled]{opacity:.35;cursor:not-allowed;text-decoration:line-through}',
    '.lsgc-ov{position:fixed;inset:0;z-index:9998;background:rgba(17,17,17,.35);opacity:0;pointer-events:none;transition:opacity .35s}',
    '.lsgc-ov.open{opacity:1;pointer-events:auto}',
    '.lsgc-dr{position:fixed;top:0;right:0;bottom:0;z-index:9999;width:min(420px,100%);background:#fff;color:#111;display:flex;flex-direction:column;transform:translateX(100%);transition:transform .45s cubic-bezier(.2,.7,.2,1);font-family:Jost,system-ui,sans-serif}',
    '.lsgc-dr.open{transform:none}',
    '.lsgc-h{display:flex;align-items:center;justify-content:space-between;padding:26px 28px;border-bottom:1px solid #e4e2de}',
    '.lsgc-h p{margin:0;font-size:10px;letter-spacing:.32em;text-transform:uppercase;color:#9c7a3c}',
    '.lsgc-x{border:0;background:none;font-size:16px;cursor:pointer;color:#111;padding:4px}',
    '.lsgc-list{flex:1;overflow-y:auto;padding:8px 28px}',
    '.lsgc-it{display:grid;grid-template-columns:76px 1fr auto;gap:16px;padding:18px 0;border-bottom:1px solid #e4e2de;align-items:start}',
    '.lsgc-it img{width:76px;height:92px;object-fit:contain;background:#fff;display:block}',
    '.lsgc-it .b{margin:0 0 4px;font-size:9.5px;letter-spacing:.28em;text-transform:uppercase;color:#6e6a64}',
    '.lsgc-it .t{margin:0 0 6px;font-size:15px;line-height:1.25;font-weight:300;color:#111;text-decoration:none;display:block}',
    '.lsgc-it .v{margin:0 0 8px;font-size:12px;color:#6e6a64}',
    '.lsgc-it .p{margin:0;font-size:13px;color:#111}',
    '.lsgc-rm{border:0;background:none;color:#6e6a64;font-size:9.5px;letter-spacing:.25em;text-transform:uppercase;cursor:pointer;padding:2px 0;text-decoration:underline;text-underline-offset:3px}',
    '.lsgc-rm:hover{color:#111}',
    '.lsgc-empty{padding:60px 0;text-align:center;color:#6e6a64;font-size:14px;line-height:1.7}',
    '.lsgc-empty a{display:inline-block;margin-top:14px;color:#9c7a3c;font-size:10px;letter-spacing:.3em;text-transform:uppercase}',
    '.lsgc-f{padding:22px 28px 28px;border-top:1px solid #e4e2de}',
    '.lsgc-tot{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px;font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:#6e6a64}',
    '.lsgc-tot strong{font-size:20px;letter-spacing:0;font-weight:400;color:#111}',
    '.lsgc-note{margin:0 0 18px;font-size:12px;color:#6e6a64;line-height:1.6}',
    '.lsgc-wa{display:flex;align-items:center;justify-content:center;gap:12px;width:100%;padding:17px 20px;background:#9c7a3c;border:1px solid #9c7a3c;color:#fff;font:500 10.5px/1 Jost,system-ui,sans-serif;letter-spacing:.3em;text-transform:uppercase;text-decoration:none;transition:background .3s,color .3s}',
    '.lsgc-wa:hover{background:#fff;color:#9c7a3c}',
    '.lsgc-wa svg{width:16px;height:16px}',
    '.lsgc-toast{position:fixed;left:50%;bottom:28px;z-index:10000;transform:translate(-50%,20px);opacity:0;background:#111;color:#fff;padding:13px 22px;font:400 12px/1.4 Jost,system-ui,sans-serif;letter-spacing:.04em;transition:opacity .3s,transform .3s;pointer-events:none;max-width:90vw;text-align:center}',
    '.lsgc-toast.show{opacity:1;transform:translate(-50%,0)}',
    'body.lsgc-lock{overflow:hidden}'
  ].join('\n');

  var ICON_BAG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M5 8h14l-1.2 12.2a1 1 0 0 1-1 .8H7.2a1 1 0 0 1-1-.8L5 8Z"/><path d="M9 10V6.5a3 3 0 0 1 6 0V10"/></svg>';
  var ICON_WA = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.7.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.5-.5.3-.5v-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.4 3.4 0 0 0-1 2.5 5.9 5.9 0 0 0 1.2 3.1 13.5 13.5 0 0 0 5.2 4.6c1.9.8 2.7.9 3.6.7a3.1 3.1 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.1-.3-.2-.6-.3ZM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.8 9.8 0 1 1 8.3 4.6Zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.9L.1 24l6.3-1.6a11.8 11.8 0 0 0 5.6 1.4 11.8 11.8 0 0 0 8.4-20.2Z"/></svg>';

  var state = { items: [], count: 0, total: 0 };
  var els = {};

  function money(cents) {
    return 'USD ' + Math.round(cents / 100).toLocaleString('es-AR');
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function root() {
    return (window.Shopify && Shopify.routes && Shopify.routes.root) || '/';
  }
  function api(path, body) {
    var opts = body
      ? { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(body) }
      : { headers: { Accept: 'application/json' } };
    return fetch(root() + path, opts).then(function (r) {
      return r.json().then(function (j) {
        if (!r.ok) throw j;
        return j;
      });
    });
  }

  function toast(msg) {
    var t = els.toast;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._t);
    t._t = setTimeout(function () { t.classList.remove('show'); }, 2600);
  }

  /* ---------- UI base ---------- */
  function build() {
    var st = document.createElement('style');
    st.id = 'lsgc-style';
    st.textContent = css;
    document.head.appendChild(st);

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'lsgc-btn';
    btn.setAttribute('aria-label', 'Abrir carrito');
    btn.innerHTML = ICON_BAG + '<span class="lsgc-count" hidden>0</span>';
    btn.addEventListener('click', open);
    els.btn = btn;
    els.count = btn.querySelector('.lsgc-count');

    var cta = document.querySelector('.hdr-cta');
    var hdrIn = document.querySelector('.hdr-in');
    if (cta) {
      var wrap = document.createElement('div');
      wrap.className = 'lsgc-act';
      cta.parentNode.insertBefore(wrap, cta);
      wrap.appendChild(cta);
      wrap.appendChild(btn);
    } else if (hdrIn) {
      var burger = hdrIn.querySelector('.burger');
      hdrIn.insertBefore(btn, burger || null);
    } else {
      btn.style.cssText = 'position:fixed;top:18px;right:18px;z-index:9000;background:#fff';
      document.body.appendChild(btn);
    }

    var ov = document.createElement('div');
    ov.className = 'lsgc-ov';
    ov.addEventListener('click', close);
    var dr = document.createElement('aside');
    dr.className = 'lsgc-dr';
    dr.setAttribute('role', 'dialog');
    dr.setAttribute('aria-label', 'Carrito');
    dr.innerHTML =
      '<div class="lsgc-h"><p>Tu carrito</p><button type="button" class="lsgc-x" aria-label="Cerrar">✕</button></div>' +
      '<div class="lsgc-list"></div>' +
      '<div class="lsgc-f"></div>';
    dr.querySelector('.lsgc-x').addEventListener('click', close);
    document.body.appendChild(ov);
    document.body.appendChild(dr);
    els.ov = ov;
    els.dr = dr;
    els.list = dr.querySelector('.lsgc-list');
    els.foot = dr.querySelector('.lsgc-f');

    var t = document.createElement('div');
    t.className = 'lsgc-toast';
    t.setAttribute('role', 'status');
    document.body.appendChild(t);
    els.toast = t;

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { close(); closeSizes(); }
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.lsgc-sizes') && !e.target.closest('.lsgc-add')) closeSizes();
    });
  }

  function open() {
    els.ov.classList.add('open');
    els.dr.classList.add('open');
    document.body.classList.add('lsgc-lock');
  }
  function close() {
    if (!els.dr) return;
    els.ov.classList.remove('open');
    els.dr.classList.remove('open');
    document.body.classList.remove('lsgc-lock');
  }

  /* ---------- Carrito ---------- */
  function refresh() {
    return api('cart.js').then(function (c) {
      state.items = c.items || [];
      state.count = c.item_count || 0;
      state.total = c.total_price || 0;
      render();
      return c;
    });
  }

  function inCart(variantId) {
    return state.items.some(function (i) { return String(i.variant_id) === String(variantId); });
  }

  function variantLabel(i) {
    if (!i.variant_title || /default title/i.test(i.variant_title)) return '';
    return i.variant_title;
  }

  function waText() {
    var lines = ['Hola LSG! Quiero consultar por estas piezas:', ''];
    state.items.forEach(function (i, n) {
      var v = variantLabel(i);
      lines.push((n + 1) + '. ' + (i.vendor && i.product_title.toLowerCase().indexOf(i.vendor.toLowerCase()) !== 0 ? i.vendor + ' ' : '') + i.product_title);
      if (v) lines.push('   Talle: ' + v);
      if (i.quantity > 1) lines.push('   Cantidad: ' + i.quantity);
      lines.push('   Precio: ' + money(i.final_line_price));
      lines.push('   ' + location.origin + i.url.split('?')[0]);
      lines.push('');
    });
    lines.push('Total: ' + money(state.total));
    return lines.join('\n');
  }

  function render() {
    els.count.textContent = state.count;
    els.count.hidden = state.count === 0;
    els.btn.setAttribute('aria-label', 'Abrir carrito (' + state.count + ')');

    if (!state.items.length) {
      els.list.innerHTML = '<div class="lsgc-empty">Tu carrito está vacío.<br><a href="' + root() + 'collections/all">Ver la selección</a></div>';
      els.foot.innerHTML = '';
    } else {
      els.list.innerHTML = state.items.map(function (i) {
        var v = variantLabel(i);
        var img = i.image ? i.image + (i.image.indexOf('?') > -1 ? '&' : '?') + 'width=200' : '';
        return '<div class="lsgc-it">' +
          (img ? '<img src="' + esc(img) + '" alt="' + esc(i.product_title) + '" loading="lazy">' : '<span></span>') +
          '<div>' +
            (i.vendor ? '<p class="b">' + esc(i.vendor) + '</p>' : '') +
            '<a class="t" href="' + esc(i.url) + '">' + esc(i.product_title) + '</a>' +
            (v ? '<p class="v">Talle ' + esc(v) + '</p>' : '') +
            '<p class="p">' + money(i.final_line_price) + '</p>' +
          '</div>' +
          '<button type="button" class="lsgc-rm" data-key="' + esc(i.key) + '">Quitar</button>' +
        '</div>';
      }).join('');
      els.list.querySelectorAll('.lsgc-rm').forEach(function (b) {
        b.addEventListener('click', function () { remove(b.getAttribute('data-key'), b); });
      });
      var href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(waText());
      els.foot.innerHTML =
        '<div class="lsgc-tot"><span>Total</span><strong>' + money(state.total) + '</strong></div>' +
        '<p class="lsgc-note">Precios en dólares. Coordinamos pago y envío por WhatsApp.</p>' +
        '<a class="lsgc-wa" href="' + href + '" target="_blank" rel="noopener">' + ICON_WA + 'Consultar por WhatsApp</a>';
    }
    syncButtons();
  }

  function remove(key, btn) {
    if (btn) btn.disabled = true;
    api('cart/change.js', { id: key, quantity: 0 }).then(function () { return refresh(); })
      .catch(function () { toast('No pudimos quitar la pieza. Probá de nuevo.'); if (btn) btn.disabled = false; });
  }

  function add(variantId, btn) {
    if (inCart(variantId)) { open(); return Promise.resolve(); }
    if (btn) btn.disabled = true;
    return api('cart/add.js', { items: [{ id: Number(variantId), quantity: 1 }] })
      .then(function () { return refresh(); })
      .then(function () {
        els.btn.classList.remove('lsgc-bump');
        void els.btn.offsetWidth;
        els.btn.classList.add('lsgc-bump');
        toast('Pieza añadida al carrito');
        open();
      })
      .catch(function (e) {
        toast((e && e.description) || 'Esta pieza ya no está disponible.');
      })
      .then(function () { if (btn) btn.disabled = false; });
  }

  /* ---------- Productos: cache ---------- */
  var products = {};
  function getProduct(handle) {
    if (!products[handle]) {
      products[handle] = api('products/' + handle + '.js').catch(function (e) { delete products[handle]; throw e; });
    }
    return products[handle];
  }
  function handleFromHref(href) {
    var m = (href || '').match(/\/products\/([^/?#]+)/);
    return m ? decodeURIComponent(m[1]) : null;
  }
  function vLabel(v) {
    return /default title/i.test(v.title) ? 'Única' : v.title;
  }

  /* ---------- Tarjetas del catálogo ---------- */
  function closeSizes() {
    document.querySelectorAll('.lsgc-sizes').forEach(function (p) { p.remove(); });
  }

  function decorateCards(scope) {
    (scope || document).querySelectorAll('a.card[data-card]').forEach(function (card) {
      if (card.querySelector('.lsgc-add')) return;
      if (card.getAttribute('data-sold') === 'true') return;
      var handle = handleFromHref(card.getAttribute('href'));
      var host = card.querySelector('.card-img');
      if (!handle || !host) return;
      if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'lsgc-add';
      b.setAttribute('data-handle', handle);
      b.innerHTML = ICON_BAG + '<span>Añadir al carrito</span>';
      b.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        onCardAdd(b, handle, host);
      });
      host.appendChild(b);
    });
    syncButtons();
  }

  function onCardAdd(b, handle, host) {
    closeSizes();
    if (b.classList.contains('is-in')) { open(); return; }
    b.disabled = true;
    getProduct(handle).then(function (p) {
      b.disabled = false;
      var avail = p.variants.filter(function (v) { return v.available; });
      if (!avail.length) { toast('Esta pieza ya no está disponible.'); return; }
      if (p.variants.length === 1 || avail.length === 1) { add(avail[0].id, b); return; }
      var box = document.createElement('div');
      box.className = 'lsgc-sizes';
      box.innerHTML = '<p>Elegí talle</p>' + p.variants.map(function (v) {
        return '<button type="button" data-id="' + v.id + '"' + (v.available ? '' : ' disabled') + '>' + esc(vLabel(v)) + '</button>';
      }).join('');
      box.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var s = e.target.closest('button[data-id]');
        if (!s || s.disabled) return;
        closeSizes();
        add(s.getAttribute('data-id'), b);
      });
      host.appendChild(box);
    }).catch(function () {
      b.disabled = false;
      toast('No pudimos cargar la pieza. Probá de nuevo.');
    });
  }

  /* ---------- Página de producto ---------- */
  var pdp = null;
  function decoratePDP() {
    var m = location.pathname.match(/\/products\/([^/?#]+)/);
    if (!m) return;
    var anchor = document.querySelector('.info-in .wa-desk') || document.querySelector('.info-in .btn-gold') || document.querySelector('.info-in');
    if (!anchor) return;
    var handle = decodeURIComponent(m[1]);
    getProduct(handle).then(function (p) {
      var avail = p.variants.filter(function (v) { return v.available; });
      if (!avail.length) return;
      pdp = { p: p, sel: avail.length === 1 ? avail[0].id : null };
      var wrap = document.createElement('div');
      wrap.className = 'lsgc-pdp-wrap';
      var html = '';
      if (p.variants.length > 1) {
        html += '<div class="lsgc-pdp-sizes" role="group" aria-label="Elegí talle">' + p.variants.map(function (v) {
          return '<button type="button" data-id="' + v.id + '"' + (v.available ? '' : ' disabled') + (String(pdp.sel) === String(v.id) ? ' class="on"' : '') + '>' + esc(vLabel(v)) + '</button>';
        }).join('') + '</div>';
      }
      html += '<button type="button" class="lsgc-pdp">' + ICON_BAG + '<span>Añadir al carrito</span></button>';
      wrap.innerHTML = html;
      wrap.querySelectorAll('.lsgc-pdp-sizes button').forEach(function (s) {
        s.addEventListener('click', function () {
          if (s.disabled) return;
          wrap.querySelectorAll('.lsgc-pdp-sizes button').forEach(function (o) { o.classList.remove('on'); });
          s.classList.add('on');
          pdp.sel = s.getAttribute('data-id');
          syncButtons();
        });
      });
      var main = wrap.querySelector('.lsgc-pdp');
      main.addEventListener('click', function () {
        if (!pdp.sel) { toast('Elegí un talle'); return; }
        add(pdp.sel, main);
      });
      pdp.btn = main;
      if (anchor.classList.contains('info-in')) anchor.appendChild(wrap);
      else anchor.parentNode.insertBefore(wrap, anchor);
      syncButtons();
    }).catch(function () {});
  }

  function syncButtons() {
    document.querySelectorAll('.lsgc-add').forEach(function (b) {
      var h = b.getAttribute('data-handle');
      var on = state.items.some(function (i) { return i.handle === h; });
      if (b.classList.contains('is-in') !== on) b.classList.toggle('is-in', on);
      setText(b.querySelector('span'), on ? 'En tu carrito' : 'Añadir al carrito');
    });
    if (pdp && pdp.btn) {
      var on2 = pdp.sel && inCart(pdp.sel);
      setText(pdp.btn.querySelector('span'), on2 ? 'En tu carrito · Ver' : 'Añadir al carrito');
    }
  }
  function setText(el, txt) {
    if (el && el.textContent !== txt) el.textContent = txt;
  }

  /* ---------- Init ---------- */
  function init() {
    if (document.getElementById('lsgc-style')) return;
    build();
    render();
    refresh().catch(function () {});
    decorateCards();
    decoratePDP();
    var grid = document.querySelector('[data-grid]') || document.querySelector('main');
    if (grid && 'MutationObserver' in window) {
      var tm;
      new MutationObserver(function () {
        clearTimeout(tm);
        tm = setTimeout(function () { decorateCards(); }, 60);
      }).observe(grid, { childList: true, subtree: true });
    }
    if (/\/cart\/?$/.test(location.pathname)) open();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
