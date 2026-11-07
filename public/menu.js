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
