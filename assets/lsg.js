/* LSG — Luxury Selection Gallery · scripts del tema */
(function () {
  'use strict';
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Encabezado ---------- */
  var hdr = $('[data-hdr]');
  if (hdr) {
    var onScroll = function () { hdr.classList.toggle('is-solid', window.scrollY > 24 || document.body.classList.contains('menu-open')); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    var burger = $('[data-burger]');
    var setMenu = function (open) {
      document.body.classList.toggle('menu-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
      burger.setAttribute('aria-expanded', open);
      burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      onScroll();
    };
    if (burger) burger.addEventListener('click', function () { setMenu(!document.body.classList.contains('menu-open')); });
    $$('[data-mmenu] a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  }

  /* ---------- Aparición al hacer scroll ---------- */
  var reveals = $$('[data-reveal]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- Video del inicio: clips en secuencia con fundido ---------- */
  var media = $('[data-hero-video]');
  if (media && !reduced) {
    var mobile = window.matchMedia('(max-width: 767px)').matches;
    var clips = (media.getAttribute('data-hero-video') || '').split(';').filter(Boolean).map(function (c) {
      var p = c.split('|'); return mobile && p[1] ? p[1] : p[0];
    });
    var vids = $$('video', media);
    if (clips.length) {
      var st = { idx: 0, active: 0, switching: false };
      vids[0].src = clips[0]; vids[0].load();
      var p0 = vids[0].play(); if (p0 && p0.catch) p0.catch(function () {});
      vids[0].addEventListener('playing', function () { vids[0].classList.add('is-on'); }, { once: true });
      if (clips.length < 2) { vids[0].loop = true; }
      else { vids[1].src = clips[1]; vids[1].load(); }
      var next = function (which) {
        if (clips.length < 2 || which !== st.active || st.switching) return;
        st.switching = true;
        var cur = vids[which], nxt = vids[which ? 0 : 1];
        nxt.currentTime = 0;
        var pp = nxt.play();
        if (pp && pp.catch) pp.catch(function () { nxt.addEventListener('canplay', function () { nxt.play(); }, { once: true }); });
        nxt.classList.add('is-on'); cur.classList.remove('is-on');
        st.active = which ? 0 : 1; st.idx += 1;
        setTimeout(function () {
          cur.pause(); cur.src = clips[(st.idx + 1) % clips.length]; cur.load(); st.switching = false;
        }, 1200);
      };
      vids.forEach(function (v, i) {
        v.addEventListener('ended', function () { next(i); });
        v.addEventListener('timeupdate', function () { if (v.duration && v.currentTime >= v.duration - 0.6) next(i); });
      });
    }
  }

  /* ---------- Catálogo con filtros ---------- */
  var cat = $('[data-catalog]');
  if (cat) {
    var cards = $$('[data-card]', cat);
    var grid = $('[data-grid]', cat);
    var state = { brand: [], cat: [], size: [], sold: true, sort: 'recientes' };
    var params = new URLSearchParams(location.search);
    if (params.get('marca')) state.brand = [params.get('marca')];

    var uniq = function (arr) { return arr.filter(function (v, i) { return v && arr.indexOf(v) === i; }); };
    var letras = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];
    var sortSize = function (a, b) {
      if (a === 'Único') return 1; if (b === 'Único') return -1;
      var ia = letras.indexOf(a), ib = letras.indexOf(b);
      if (ia > -1 && ib > -1) return ia - ib; if (ia > -1) return -1; if (ib > -1) return 1;
      return parseFloat(a) - parseFloat(b);
    };
    var opts = {
      brand: uniq(cards.map(function (c) { return c.dataset.brand; })).sort(),
      cat: uniq(cards.map(function (c) { return c.dataset.cat; })).sort(),
      size: uniq(cards.map(function (c) { return c.dataset.size; })).sort(sortSize)
    };

    var chip = function (group, value) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'chip'; b.textContent = value;
      b.dataset.g = group; b.dataset.v = value;
      b.addEventListener('click', function () {
        var arr = state[group], i = arr.indexOf(value);
        if (i > -1) arr.splice(i, 1); else arr.push(value);
        render();
      });
      return b;
    };
    ['brand', 'cat', 'size'].forEach(function (g) {
      var box = $('[data-group="' + g + '"]', cat);
      if (box) opts[g].forEach(function (v) { box.appendChild(chip(g, v)); });
    });
    var inline = $('[data-inline-brands]', cat);
    if (inline) opts.brand.forEach(function (v) { inline.appendChild(chip('brand', v)); });

    var sheet = $('[data-sheet]', cat);
    var openSheet = function (on) {
      sheet.classList.toggle('on', on); sheet.setAttribute('aria-hidden', !on);
      document.body.style.overflow = on ? 'hidden' : '';
    };
    $$('[data-open-filters]', cat).forEach(function (b) { b.addEventListener('click', function () { openSheet(true); }); });
    $$('[data-close-filters]', cat).forEach(function (b) { b.addEventListener('click', function () { openSheet(false); }); });
    var clear = function () { state.brand = []; state.cat = []; state.size = []; render(); };
    $$('[data-clear], [data-clear-all]', cat).forEach(function (b) { b.addEventListener('click', clear); });
    var soldBtn = $('[data-sold-toggle]', cat);
    soldBtn.addEventListener('click', function () { state.sold = !state.sold; render(); });
    $('[data-sort]', cat).addEventListener('change', function (e) { state.sort = e.target.value; render(); });

    var render = function () {
      var visible = cards.filter(function (c) {
        return (state.sold || c.dataset.sold !== 'true') &&
          (!state.brand.length || state.brand.indexOf(c.dataset.brand) > -1) &&
          (!state.cat.length || state.cat.indexOf(c.dataset.cat) > -1) &&
          (!state.size.length || state.size.indexOf(c.dataset.size) > -1);
      });
      var sorted = cards.slice().sort(function (a, b) {
        var sa = a.dataset.sold === 'true' ? 1 : 0, sb = b.dataset.sold === 'true' ? 1 : 0;
        if (sa !== sb) return sa - sb;
        if (state.sort === 'precio-asc') return a.dataset.price - b.dataset.price;
        if (state.sort === 'precio-desc') return b.dataset.price - a.dataset.price;
        return (b.dataset.num || 0) - (a.dataset.num || 0);
      });
      sorted.forEach(function (c) { grid.appendChild(c); c.classList.toggle('hidden', visible.indexOf(c) === -1); });
      var n = visible.length;
      $('[data-count]', cat).textContent = n;
      $('[data-count2]', cat).textContent = n;
      $('[data-count-label]', cat).textContent = n === 1 ? 'pieza' : 'piezas';
      $('[data-empty]', cat).classList.toggle('on', n === 0);
      var active = state.brand.length + state.cat.length + state.size.length;
      var fc = $('[data-fcount]', cat); fc.textContent = active; fc.classList.toggle('on', active > 0);
      $('[data-clear]', cat).classList.toggle('hidden', active === 0);
      soldBtn.classList.toggle('on', state.sold); soldBtn.setAttribute('aria-pressed', state.sold);
      $$('.chip', cat).forEach(function (b) {
        var on = state[b.dataset.g].indexOf(b.dataset.v) > -1;
        b.classList.toggle('on', on); b.setAttribute('aria-pressed', on);
      });
    };
    render();
  }

  /* ---------- Galería de la ficha + zoom ---------- */
  var gal = $('[data-gallery]');
  if (gal) {
    var track = $('[data-track]', gal);
    var slides = $$('[data-open]', gal);
    var thumbs = $$('[data-thumb]', gal);
    var dots = $$('.dots i', gal);
    var idxEl = $('[data-idx]', gal);
    var cur = 0;
    var setIdx = function (i) {
      cur = i;
      thumbs.forEach(function (t, k) { t.classList.toggle('on', k === i); });
      dots.forEach(function (d, k) { d.classList.toggle('on', k === i); });
      if (idxEl) idxEl.textContent = i + 1;
    };
    track.addEventListener('scroll', function () { setIdx(Math.round(track.scrollLeft / track.clientWidth)); }, { passive: true });
    thumbs.forEach(function (t, k) { t.addEventListener('click', function () { track.scrollTo({ left: k * track.clientWidth, behavior: 'smooth' }); }); });

    var lbox = $('[data-lbox]', gal), limg = $('[data-limg]', gal), stage = $('[data-lstage]', gal);
    var lidx = $('[data-lidx]', gal), lhint = $('[data-lhint]', gal);
    var li = 0, zoom = false;
    var showL = function (i) {
      li = (i + slides.length) % slides.length; zoom = false;
      limg.src = slides[li].dataset.full; limg.style.transform = 'scale(1)';
      stage.classList.remove('z'); lidx.textContent = li + 1; lhint.textContent = 'Tocá para ampliar';
    };
    var openL = function (i) { showL(i); lbox.classList.add('on'); document.body.style.overflow = 'hidden'; };
    var closeL = function () { lbox.classList.remove('on'); document.body.style.overflow = ''; };
    slides.forEach(function (s, k) { s.addEventListener('click', function () { openL(k); }); });
    $('[data-lclose]', gal).addEventListener('click', closeL);
    var prev = $('[data-lprev]', gal), nxtB = $('[data-lnext]', gal);
    if (prev) prev.addEventListener('click', function () { showL(li - 1); });
    if (nxtB) nxtB.addEventListener('click', function () { showL(li + 1); });
    var origin = function (e) {
      var r = stage.getBoundingClientRect();
      limg.style.transformOrigin = ((e.clientX - r.left) / r.width * 100) + '% ' + ((e.clientY - r.top) / r.height * 100) + '%';
    };
    stage.addEventListener('click', function (e) {
      origin(e); zoom = !zoom;
      limg.style.transform = zoom ? 'scale(2.2)' : 'scale(1)';
      stage.classList.toggle('z', zoom); lhint.textContent = zoom ? 'Tocá para alejar' : 'Tocá para ampliar';
    });
    stage.addEventListener('mousemove', function (e) { if (zoom) origin(e); });
    document.addEventListener('keydown', function (e) {
      if (!lbox.classList.contains('on')) return;
      if (e.key === 'Escape') closeL();
      if (e.key === 'ArrowRight') showL(li + 1);
      if (e.key === 'ArrowLeft') showL(li - 1);
    });
  }
})();
