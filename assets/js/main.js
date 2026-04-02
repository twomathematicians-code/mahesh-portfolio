// Computational Mathematics Lab - Main JavaScript

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar active state
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href').includes(currentPath.split('/')[1])) {
    link.style.color = 'var(--primary)';
    link.style.fontWeight = '600';
  }
});

// Copy code to clipboard
function addCopyButtons() {
  document.querySelectorAll('pre').forEach(block => {
    const button = document.createElement('button');
    button.className = 'copy-btn';
    button.textContent = 'Copy';
    button.onclick = () => copyCode(block, button);
    
    const wrapper = document.createElement('div');
    wrapper.className = 'code-wrapper';
    block.parentNode.insertBefore(wrapper, block);
    wrapper.appendChild(button);
    wrapper.appendChild(block);
  });
}

function copyCode(block, button) {
  const code = block.textContent;
  navigator.clipboard.writeText(code).then(() => {
    button.textContent = 'Copied!';
    setTimeout(() => {
      button.textContent = 'Copy';
    }, 2000);
  });
}

// Initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addCopyButtons);
} else {
  addCopyButtons();
}

// MathJax configuration
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']]
  },
  svg: {
    fontCache: 'global'
  }
};

console.log('Computational Mathematics Lab - Loaded');
