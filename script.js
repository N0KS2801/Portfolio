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



const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
});





const slides = document.querySelectorAll('.slides img');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

document.querySelector('.slide-btn.next').addEventListener('click', nextSlide);
document.querySelector('.slide-btn.prev').addEventListener('click', prevSlide);
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentIndex = i;
    showSlide(currentIndex);
  });
});

// Auto slide every 4 seconds
setInterval(nextSlide, 4000);

// Initial display
showSlide(currentIndex);



const greetings = [
  "Hello",
  "Hola",
  "Bonjour",
  "Ciao",
  "こんにちは",
  "안녕하세요",
  "你好",
  "Olá",
  "Привет",
  "Kamusta"
];

let index = 0;
const textEl = document.getElementById("intro-text");

function showGreeting() {
  textEl.classList.remove("show");

  setTimeout(() => {
    textEl.textContent = greetings[index];
    textEl.classList.add("show");
    index = (index + 1) % greetings.length;
  }, 120);
}

// initial show
setTimeout(() => {
  textEl.classList.add("show");
}, 100);

// ⚡ smooth fast rotation
const interval = setInterval(showGreeting, 400);

// fade out intro (cinematic exit)
setTimeout(() => {
  clearInterval(interval);

  const intro = document.getElementById("intro");

  intro.style.opacity = "0";

  // slight zoom out effect before disappearing
  textEl.style.transform = "scale(1.2)";
  textEl.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
  }, 600);
}, 3500);


const roles = [
  "Software Engineer",
  "Web Developer",
  "Graphic Designer",
  "UI/UX Designer",
  
];

let i = 0;        // role index
let j = 0;        // character index
let currentRole = "";
let isDeleting = false;

const el = document.getElementById("typing-roles");

function typeEffect() {
  if (!el) return; // 🔥 prevents error if element not found

  currentRole = roles[i];

  if (!isDeleting) {
    el.textContent = currentRole.substring(0, j++);
  } else {
    el.textContent = currentRole.substring(0, j--);
  }

  let speed = isDeleting ? 50 : 90;

  // finished typing
  if (!isDeleting && j === currentRole.length + 1) {
    speed = 1200; // pause
    isDeleting = true;
  }

  // finished deleting
  else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

// ✅ IMPORTANT: wait until page is loaded
window.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});


window.addEventListener("DOMContentLoaded", () => {
  // Lock scroll at first
  document.body.classList.add("intro-active");

  // Simulate intro duration (e.g., 2.5s)
  setTimeout(() => {
    const intro = document.getElementById("intro");
    if (intro) intro.style.display = "none"; // hide intro
    document.body.classList.remove("intro-active"); // unlock scroll
  }, 2500); // adjust duration to match your animation
});


window.scrollTo({
  top: document.getElementById("hero").offsetTop,
  behavior: "smooth"
});




