// Page navigation
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Close mobile menu
  document.getElementById('nav-links').classList.remove('active');
}

// Scroll to top button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile menu toggle
function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('active');
}

// Navbar slide-in effect
let lastScroll = 0;
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll) {
    navbar.classList.remove("show"); // hide on scroll down
  } else {
    navbar.classList.add("show"); // show on scroll up
  }
  lastScroll = currentScroll;
});