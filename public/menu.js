// Menu des pages statiques : bouton « Menu » + petit menu déroulant (même comportement que l'accueil)
(function () {
  var btn = document.querySelector('.menu-btn');
  var menu = document.getElementById('site-menu');
  var backdrop = document.querySelector('.drop-backdrop');
  if (!btn || !menu) return;
  var label = btn.querySelector('.menu-btn-label');

  // Pastille « Nouveau » et point bleu pendant 30 jours après le dernier article du blog
  var latest = btn.getAttribute('data-blog-latest');
  if (latest) {
    var age = (Date.now() - new Date(latest + 'T00:00:00').getTime()) / 86400000;
    if (age >= 0 && age < 30) {
      var dot = btn.querySelector('.menu-dot'); if (dot) dot.hidden = false;
      var badge = menu.querySelector('.nav-new'); if (badge) badge.hidden = false;
    }
  }
  var dotEl = btn.querySelector('.menu-dot');
  var showDot = dotEl && !dotEl.hidden;

  function setOpen(open) {
    menu.hidden = !open;
    if (backdrop) backdrop.hidden = !open;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    if (label) label.textContent = open ? 'Fermer' : 'Menu';
    var path = btn.querySelector('svg path');
    if (path) path.setAttribute('d', open ? 'M6 6l12 12M18 6L6 18' : 'M4 6h16M4 12h16M4 18h16');
    if (dotEl && showDot) dotEl.hidden = open;
  }
  btn.addEventListener('click', function () { setOpen(menu.hidden); });
  if (backdrop) backdrop.addEventListener('click', function () { setOpen(false); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) { setOpen(false); btn.focus(); } });
})();

// Raccourcis de contact (mêmes que l'accueil) :
// - les liens « Demander un devis » préchoisissent le besoin de la page dans le formulaire ;
// - sur mobile, une barre en bas d'écran (Réserver un appel + Devis) apparaît après le haut de page
//   et disparaît quand l'encadré « Parlons de votre projet » ou le pied de page est à l'écran.
(function () {
  var BOOKING_URL = 'https://calendly.com/a2agency-icp8/30min';
  var NEEDS = {
    '/gestion-reseaux-sociaux/': 'reseaux',
    '/creation-logo-identite-visuelle/': 'branding',
    '/creation-affiches-flyers/': 'affiches',
    '/creation-site-internet/': 'site',
    '/audit-instagram-gratuit/': 'audit'
  };
  var need = NEEDS[location.pathname];
  var devis = need ? '/?besoin=' + need + '#contact' : '/#contact';
  if (need) {
    document.querySelectorAll('a[href="/#contact"]').forEach(function (a) { a.setAttribute('href', devis); });
  }

  var bar = document.createElement('div');
  bar.className = 'action-bar';
  bar.setAttribute('aria-hidden', 'true');
  bar.innerHTML =
    '<a class="ab-main" target="_blank" rel="noopener noreferrer" tabindex="-1" href="' + BOOKING_URL + '">' +
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/></svg>' +
    'Réserver un appel</a>' +
    '<a class="ab-alt" tabindex="-1" href="' + devis + '">Demander un devis</a>';
  document.body.appendChild(bar);

  var end = document.querySelector('.cta') || document.querySelector('footer');
  var raf = 0;
  function update() {
    raf = 0;
    var endVisible = end ? end.getBoundingClientRect().top < window.innerHeight * 0.85 : false;
    var show = window.scrollY > 420 && !endVisible;
    bar.classList.toggle('is-visible', show);
    bar.setAttribute('aria-hidden', show ? 'false' : 'true');
    bar.querySelectorAll('a').forEach(function (a) { a.tabIndex = show ? 0 : -1; });
  }
  function onScroll() { if (!raf) raf = requestAnimationFrame(update); }
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
})();
