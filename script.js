let timer;
let milliseconds = 0, seconds = 0, minutes = 0, hours = 0;
let running = false;

function updateDisplay() {
  let h = String(hours).padStart(2, '0');
  let m = String(minutes).padStart(2, '0');
  let s = String(seconds).padStart(2, '0');
  let ms = String(milliseconds).padStart(2, '0');

  document.getElementById("display").innerHTML =
    `<span class="main-time">${h}:${m}:${s}</span><span class="ms">.${ms}</span>`;
}

function tick() {
  milliseconds += 1;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function start() {
  if (!running) {
    timer = setInterval(tick, 10);
    running = true;
  }
}

function pause() {
  clearInterval(timer);
  running = false;
}

function reset() {
  clearInterval(timer);
  running = false;
  milliseconds = 0; seconds = 0; minutes = 0; hours = 0;
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (running) {
    let laps = document.getElementById("laps");
    let li = document.createElement("li");
    let h = String(hours).padStart(2, '0');
    let m = String(minutes).padStart(2, '0');
    let s = String(seconds).padStart(2, '0');
    let ms = String(milliseconds).padStart(2, '0');

    li.innerHTML = `<span class="main-time">${h}:${m}:${s}</span><span class="ms">.${ms}</span>`;
    laps.appendChild(li);
  }
}

/* Theme Toggle */
function toggleTheme() {
  document.body.classList.toggle("light");
  const btn = document.getElementById("themeBtn");
  if (document.body.classList.contains("light")) {
    btn.innerText = "Dark Mode";
  } else {
    btn.innerText = "Light Mode";
  }
}
