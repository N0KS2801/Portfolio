// ── HAMBURGER ────────────────────────────────────────
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener("click", (e) => {
  const nav = document.getElementById("hamburger-nav");
  if (nav && !nav.contains(e.target)) {
    document.querySelector(".menu-links")?.classList.remove("open");
    document.querySelector(".hamburger-icon")?.classList.remove("open");
  }
});

// ── NAV SCROLL STATE ─────────────────────────────────
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 20;
  document.querySelectorAll("nav").forEach(n => n.classList.toggle("scrolled", scrolled));
}, { passive: true });

// ── SCROLL REVEAL ─────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// ── HERO ENTRANCE ─────────────────────────────────────
// Trigger hero elements immediately on load
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelectorAll("#hero .reveal").forEach(el => {
      el.classList.add("visible");
    });
  }, 100);
});

// ── ACTIVE NAV HIGHLIGHT ──────────────────────────────
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const sectionObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      navLinks.forEach(link => {
        const isActive = link.getAttribute("href") === `#${id}`;
        link.style.color = isActive ? "var(--white)" : "";
      });
    }
  });
}, { threshold: 0.45 });

sections.forEach(s => sectionObs.observe(s));



