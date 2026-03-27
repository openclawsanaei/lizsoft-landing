// Minimal JS for smooth interactions and mobile navigation
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav__toggle');
  const nav = document.querySelector('.nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.contains('nav--open');
      if (isOpen) {
        nav.classList.remove('nav--open');
        navToggle.setAttribute('aria-expanded', 'false');
      } else {
        nav.classList.add('nav--open');
        navToggle.setAttribute('aria-expanded', 'true');
      }
    });

    // Close mobile nav when clicking a link
    nav.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav--open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
