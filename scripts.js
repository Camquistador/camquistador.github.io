// Dark mode toggle (with persistence)
const body = document.body;
const toggle = document.getElementById('themeToggle');

// initialize
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggle.textContent = 'Light Mode';
} else {
  toggle.textContent = 'Dark Mode';
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  toggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
});

// Smooth scroll for in‐page nav (if you add any anchors)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      target.focus({ preventScroll: true });
    }
  });
});
