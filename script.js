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
