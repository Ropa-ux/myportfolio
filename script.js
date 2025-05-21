AOS.init();


document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.hidden').forEach(section => {
        observer.observe(section);
    });
});
document.getElementById('toggle-theme').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode');
});

// Fade in on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach(el => observer.observe(el));
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}
