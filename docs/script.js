// Minimal JS for smooth interactions
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for anchor links (fallback for older browsers)
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

  // Optional: mobile navigation toggle can be added here if needed
});
