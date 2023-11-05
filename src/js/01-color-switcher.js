let buttonStart = document.querySelector('[data-start]');
let buttonStop = document.querySelector('[data-stop]');
let timerChangeColor;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonStart.addEventListener('click', () => {
  timerChangeColor = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

buttonStop.addEventListener('click', () => {
  clearInterval(timerChangeColor);
});
