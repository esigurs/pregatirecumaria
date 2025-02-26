// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile menu toggle
const menuToggle = document.createElement('div');
menuToggle.innerHTML = '☰';
menuToggle.style.position = 'fixed';
menuToggle.style.right = '20px';
menuToggle.style.top = '20px';
menuToggle.style.zIndex = '1000';
menuToggle.style.cursor = 'pointer';
menuToggle.style.display = 'none';
document.body.appendChild(menuToggle);

function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

menuToggle.addEventListener('click', toggleMenu);

// Responsive menu handling
window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    menuToggle.style.display = 'block';
    document.querySelector('.nav-links').style.display = 'none';
  } else {
    menuToggle.style.display = 'none';
    document.querySelector('.nav-links').style.display = 'flex';
  }
});

// Initial check
window.dispatchEvent(new Event('resize'));
