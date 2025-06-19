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
