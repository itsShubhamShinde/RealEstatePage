const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(nav => nav.classList.remove('active', 'text-success'));
      this.classList.add('active', 'text-success');

      // Collapse the navbar (for mobile)
      const navbarCollapse = document.querySelector('.navbar-collapse');
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide();
    });
  });