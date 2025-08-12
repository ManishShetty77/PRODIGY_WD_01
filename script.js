// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }
});

// Close mobile menu when clicking on a link
const navLinkItems = document.querySelectorAll('nav ul li a');
navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks) {
      navLinks.classList.remove('show');
    }
  });
});
