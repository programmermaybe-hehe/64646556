const scenes = document.querySelectorAll('.scene');
const music = document.getElementById('music');

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
const noBtn = document.getElementById('no');
const runner = document.getElementById('runner');

noBtn.onclick = () => {
  runner.style.display = 'block';
  noBtn.style.display = 'none';
};

document.getElementById('yes').onclick = () => {
  showScene(2);
};

// SCENE 3
document.getElementById('gift').onclick = () => {
  showScene(3);
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
