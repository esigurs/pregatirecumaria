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
  const header = document.querySelector('.header');

  darkModeToggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      header.classList.toggle('dark-mode');
    });
  });

  // Responsive menu handling (initial setup)
  const checkResponsiveMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const darkModeToggleDesktop = document.querySelector('.dark-mode-toggle.desktop-only'); // Select only desktop toggle
    const darkModeToggleMobile = document.querySelector('.mobile-menu .dark-mode-toggle'); // Select toggle in mobile menu

    if (window.innerWidth <= 768) {
      navLinks.style.display = 'none';
      mobileMenuButton.style.display = 'block';
      if (darkModeToggleDesktop) {
        darkModeToggleDesktop.style.display = 'none'; // Hide in main header
      }
      if (darkModeToggleMobile) {
          darkModeToggleMobile.style.display = 'block'; // Ensure it's visible in mobile menu
      }
    } else {
      navLinks.style.display = 'flex';
      mobileMenuButton.style.display = 'none';
      if (darkModeToggleDesktop) {
        darkModeToggleDesktop.style.display = 'block'; // Show in main header
      }
      mobileMenu.classList.remove('active'); // Hide mobile menu when going back to desktop
    }
  };

  // Initial check and event listener for responsive menu
  checkResponsiveMenu();
  window.addEventListener('resize', checkResponsiveMenu);
});
