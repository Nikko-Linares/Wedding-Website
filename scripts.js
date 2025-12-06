// Site-wide scripts

document.addEventListener('DOMContentLoaded', function () {
  // Menu toggle (works on pages sharing this script)
  var menuButtons = document.querySelectorAll('#menuToggle');
  menuButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var quick = document.getElementById('quickLinks');
      // If multiple pages include this, use the closest quickLinks sibling
      if (!quick) {
        // try to find a sibling quickLinks in the same nav
        var nav = btn.closest('.nav-container');
        if (nav) quick = nav.querySelector('#quickLinks');
      }
      if (!quick) return;
      var isHidden = quick.hasAttribute('hidden');
      if (isHidden) {
        quick.removeAttribute('hidden');
        btn.setAttribute('aria-expanded', 'true');
      } else {
        quick.setAttribute('hidden', '');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
