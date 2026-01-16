const scenes = document.querySelectorAll('.scene');
const music = document.getElementById("music");

document.body.addEventListener("click", () => {
  music.play().catch(() => {});
}, { once: true });

function showScene(n) {
  scenes.forEach(s => s.classList.remove('active'));
  scenes[n].classList.add('active');
}

// SCENE 1
document.getElementById('cake').onclick = () => {
  music.play();
  showScene(1);
};

// SCENE 2
const noBtn = document.getElementById("no");
const runner = document.getElementById("runner");

noBtn.onclick = () => {
  // show runner
  runner.style.display = "block";

  // runner comes to button
  setTimeout(() => {
    runner.classList.add("take");
  }, 100);

  // remove NO button (runner "takes" it)
  setTimeout(() => {
    noBtn.style.display = "none";
  }, 600);

  // runner runs away
  setTimeout(() => {
    runner.classList.remove("take");
    runner.classList.add("run-away");
  }, 900);
};

document.getElementById('yes').onclick = () => {
  showScene(2);
};

// SCENE 3
// SCENE 3 — Gift opens, letter appears
gift.onclick = () => {
  gift.style.display = "none"; // hide gift
  letter.style.display = "block"; // show letter only
};
// Letter click → show memories + wish
letter.onclick = () => {
  letter.style.display = "none";
  memories.classList.remove("hidden");
};

// SCENE 4 → 5
function showHug() {
  showScene(4);
}

// SCENE 5 → 6
function showSae() {
  music.pause();
  music.currentTime = 0;
  showScene(5);
}
