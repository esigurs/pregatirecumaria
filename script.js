document.addEventListener('DOMContentLoaded', () => {
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
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  // Dark mode toggle
  const darkModeToggleButtons = document.querySelectorAll('.dark-mode-toggle');
  const body = document.body;

  darkModeToggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
    });
  });

  // Responsive menu handling (initial setup)
  const checkResponsiveMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuButton = document.querySelector('.mobile-menu-button');

    if (window.innerWidth <= 768) {
      navLinks.style.display = 'none';
      mobileMenuButton.style.display = 'block';
    } else {
      navLinks.style.display = 'flex';
      mobileMenuButton.style.display = 'none';
      mobileMenu.classList.remove('active'); // Hide mobile menu when going back to desktop
    }
  };

  // Initial check and event listener for responsive menu
  checkResponsiveMenu();
  window.addEventListener('resize', checkResponsiveMenu);
});
