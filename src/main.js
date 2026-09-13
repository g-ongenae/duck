import './style.css';

const eyes = document.querySelectorAll('.eye');
let blinkTimer;

eyes.forEach(eye => eye.addEventListener('animationend', () => eye.classList.remove('blink')));

function scheduleBlink() {
  clearTimeout(blinkTimer);
  if (document.hidden) return;

  blinkTimer = setTimeout(() => {
    eyes.forEach(eye => eye.classList.add('blink'));
    scheduleBlink();
  }, 1000 + Math.random() * 4000);
}

document.addEventListener('visibilitychange', scheduleBlink);
window.addEventListener('pagehide', () => clearTimeout(blinkTimer));
window.addEventListener('pageshow', event => { if (event.persisted) scheduleBlink(); });
scheduleBlink();
