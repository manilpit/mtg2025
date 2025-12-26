// countdown.js - Countdown timer for hovedeventet

function updateCountdown() {
    // Target date: August 9, 2025, 09:00
    const targetDate = new Date('2026-08-09T09:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update DOM
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');

    // If countdown ends
    if (distance < 0) {
        const timerContainer = document.getElementById('countdownTimer');
        if (timerContainer) {
            timerContainer.innerHTML = '<div style="text-align: center; padding: 20px; color: var(--primary-color); font-weight: 700; font-size: 1.2em;">🎮 Turneringen er i gang!</div>';
        }
    }
}

// Update countdown immediately and then every second
document.addEventListener('DOMContentLoaded', function() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
});