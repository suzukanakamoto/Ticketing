// app.js

// Sticky Navbar on Scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
      });
  });
});

AOS.init({
  duration: 1200,
  once: true,
});
