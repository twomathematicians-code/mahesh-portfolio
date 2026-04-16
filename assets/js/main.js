// Computational Mathematics Lab - Main JavaScript

// MathJax configuration (must be before MathJax script loads)
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']]
  },
  svg: {
    fontCache: 'global'
  }
};

// ===== Dark Mode =====
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle ? themeToggle.querySelector('.theme-icon') : null;

function applyTheme(theme) {
  document.body.classList.toggle('dark-mode', theme === 'dark');
  if (themeIcon) themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
}

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

themeToggle && themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-mode');
  const next = isDark ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme(next);
});

// ===== Mobile Menu =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle && menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.classList.toggle('active', isOpen);
  menuToggle.setAttribute('aria-expanded', isOpen);
});

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (navLinks && navLinks.classList.contains('open') &&
      !navLinks.contains(e.target) && e.target !== menuToggle && !menuToggle.contains(e.target)) {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', false);
  }
});

// ===== Scroll Progress Bar =====
const scrollProgress = document.getElementById('scrollProgress');

function updateScrollProgress() {
  if (!scrollProgress) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgress.style.width = pct + '%';
}

// ===== Navbar Scroll State =====
const navbar = document.querySelector('.navbar');

function updateNavbar() {
  if (!navbar) return;
  navbar.classList.toggle('scrolled', window.scrollY > 64);
}

// ===== Back to Top =====
const backToTop = document.getElementById('backToTop');

backToTop && backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function updateBackToTop() {
  if (!backToTop) return;
  backToTop.classList.toggle('visible', window.scrollY > 400);
}

// ===== Combined Scroll Handler =====
window.addEventListener('scroll', () => {
  updateScrollProgress();
  updateNavbar();
  updateBackToTop();
}, { passive: true });

// Initial call
updateScrollProgress();
updateNavbar();
updateBackToTop();

// ===== Scroll Reveal =====
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

  revealEls.forEach(el => observer.observe(el));
}

// ===== Typing Animation =====
function typeEffect(element, texts, speed, pause) {
  speed = speed || 80;
  pause = pause || 2200;
  let textIndex = 0, charIndex = 0, isDeleting = false;

  function tick() {
    const current = texts[textIndex];
    element.textContent = current.substring(0, charIndex);

    if (!isDeleting) {
      if (charIndex < current.length) {
        charIndex++;
        setTimeout(tick, speed);
      } else {
        setTimeout(function () { isDeleting = true; tick(); }, pause);
      }
    } else {
      if (charIndex > 0) {
        charIndex--;
        setTimeout(tick, speed / 2);
      } else {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(tick, 400);
      }
    }
  }
  tick();
}

// ===== Copy Code Buttons =====
function addCopyButtons() {
  document.querySelectorAll('pre').forEach(block => {
    if (block.closest('.code-wrapper')) return;
    const button = document.createElement('button');
    button.className = 'copy-btn';
    button.textContent = 'Copy';
    button.onclick = () => {
      navigator.clipboard.writeText(block.textContent).then(() => {
        button.textContent = 'Copied!';
        setTimeout(() => { button.textContent = 'Copy'; }, 2000);
      });
    };
    const wrapper = document.createElement('div');
    wrapper.className = 'code-wrapper';
    block.parentNode.insertBefore(wrapper, block);
    wrapper.appendChild(button);
    wrapper.appendChild(block);
  });
}

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu if open
      if (navLinks) navLinks.classList.remove('open');
      if (menuToggle) { menuToggle.classList.remove('active'); menuToggle.setAttribute('aria-expanded', false); }
    }
  });
});

// ===== Init on DOMContentLoaded =====
function init() {
  addCopyButtons();
  initScrollReveal();

  const typingTarget = document.querySelector('.typing-text');
  if (typingTarget) {
    typeEffect(typingTarget, [
      'Causal Inference',
      'Structural Equation Modelling',
      'Neural-Symbolic AI',
      'Computational Statistics'
    ]);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

console.log('Computational Mathematics Lab - Loaded');
