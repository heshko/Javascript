const canvasEl = document.querySelector("#canvas");
const buttonEl = document.querySelector("#start-button");

const ctx = canvasEl.getContext("2d");

function clear() {
  ctx.clearRect(0, 0, 400, 300);
}

function animate(duration) {
  const startX = 50;
  const startY = 50;

  const steps = Math.floor(duration / (1000 / 60));
  let i = 0;

  const interval = setInterval(() => {
    clear();

    i += 1;

    const t = i / steps;
    const x = startX + 200 * t;
    const y = startY + 200 * t;

    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.stroke();
    ctx.fill();

    if (t >= 1.0) {
      clearInterval(interval);
    }

  }, 1000 / 60);
}

buttonEl.addEventListener("click", animate.bind(null, 2000));