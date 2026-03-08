// ═══════════════════════════════════════════
// mirai software — zine terminal
// ═══════════════════════════════════════════

// scroll reveal
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const siblings = Array.from(reveals);
      const idx = siblings.indexOf(entry.target);
      const delay = (idx % 6) * 80;

      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);

      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.05,
  rootMargin: '0px 0px 40px 0px'
});

reveals.forEach(el => observer.observe(el));
