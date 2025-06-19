const counter = document.querySelector('.counter');
const fill = document.querySelector('.progress-fill');
const loader = document.querySelector('.loader');
const left = document.querySelector('.loader-left');
const right = document.querySelector('.loader-right');
const main = document.querySelector('.main-content');

let count = 0;

let loading = setInterval(() => {
  count++;
  counter.textContent = count + "%";
  fill.style.width = count + "%";

  if (count === 100) {
    clearInterval(loading);

    // Split loader halves
    left.style.transform = "translateX(-100%)";
    right.style.transform = "translateX(100%)";

    // Fade in main site after split
    setTimeout(() => {
      loader.style.display = "none";
      main.classList.remove("hidden");
      main.classList.add("visible");
    }, 1000);
  }
}, 30); // speed

const toggle = document.getElementById("themeToggle");
const root = document.documentElement;

// Load previous theme
if (localStorage.getItem("theme") === "dark") {
  root.setAttribute("data-theme", "dark");
  toggle.checked = true;
}

// Toggle theme
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    root.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
});
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = btn.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    btn.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});
document.querySelectorAll(".cta-btn, button").forEach(btn => {
  btn.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = btn.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    btn.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});
document.querySelectorAll(".cta-btn, .product-card button").forEach(btn => {
  btn.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = btn.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    btn.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

document.querySelectorAll(".cta-btn, .product-card button, .ripple-link").forEach(btn => {
  // same ripple logic
  btn.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = btn.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    btn.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});
 window.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro-split');
    const testimonial = document.getElementById('testimonial-section');
    const scroll = document.getElementById('testimonial-scroll');

    // Reveal testimonial after animation
    setTimeout(() => {
      testimonial.style.opacity = '1';
      scroll.style.animationPlayState = 'running';
    }, 3000); // Wait for text to slide out
  });