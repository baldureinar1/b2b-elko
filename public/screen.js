const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// One short animation per touch; no persistent canvas or animation loop.
document.addEventListener('pointerdown', (event) => {
  if (reducedMotion.matches || event.target.closest('a, button') || !event.isPrimary) return;
  if (document.querySelectorAll('.touch-ripple').length >= 4) return;
  const ripple = document.createElement('div');
  ripple.className = 'touch-ripple';
  ripple.setAttribute('aria-hidden', 'true');
  ripple.style.left = `${event.clientX}px`;
  ripple.style.top = `${event.clientY}px`;
  document.querySelector('.ambient').append(ripple);
  ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
  setTimeout(() => ripple.remove(), 1800);
});

const fullscreenButton = document.querySelector('.fullscreen');
if (document.fullscreenEnabled) {
  fullscreenButton.hidden = false;
  fullscreenButton.addEventListener('click', async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      document.querySelector('.screen-status').textContent = 'Ekki tókst að opna fullan skjá.';
    }
  });
  document.addEventListener('fullscreenchange', () => {
    const active = Boolean(document.fullscreenElement);
    fullscreenButton.setAttribute('aria-pressed', String(active));
    fullscreenButton.setAttribute('aria-label', active ? 'Loka fullum skjá' : 'Opna í fullum skjá');
  });
}
