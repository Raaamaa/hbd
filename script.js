// Start Experience Logic
function startExperience() {
    const overlay = document.getElementById('entry-overlay');
    overlay.classList.add('hide');

    // Start music
    if (!isMusicPlaying) {
        toggleMusic();
    }
}

// Page Navigation
function nextPage(pageNumber) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show target page
    const targetPage = document.getElementById(`page-${pageNumber}`);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Trigger specific behavior based on page
    if (pageNumber === 1) {
        resetGift();
    }
}

// Background Music Logic
const bgMusic = document.getElementById('bg-music');
const musicIcon = document.getElementById('music-icon');
const musicControl = document.getElementById('music-control');
let isMusicPlaying = false;

function toggleMusic() {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicIcon.innerText = '🔇';
        musicControl.classList.remove('playing');
    } else {
        bgMusic.play().catch(e => console.log("Audio play failed:", e));
        musicIcon.innerText = '🎵';
        musicControl.classList.add('playing');
    }
    isMusicPlaying = !isMusicPlaying;
}

// Floating Elements (Cute Edition)
function createFloatingElement() {
    const container = document.getElementById('floating-elements');
    const element = document.createElement('div');
    element.className = 'floating-element';

    // Cute Sky Blue & White theme symbols
    const symbols = ['☁️', '⭐', '✨', '🎈', '🍦', '🍬', '🕊️'];
    element.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    element.style.left = Math.random() * 100 + 'vw';
    element.style.fontSize = (Math.random() * 2 + 1.5) + 'rem';
    element.style.animationDuration = (Math.random() * 10 + 8) + 's';
    element.style.opacity = Math.random() * 0.5 + 0.4;

    container.appendChild(element);

    setTimeout(() => {
        element.remove();
    }, 5000);
}

setInterval(createFloatingElement, 700);

// Gift Box Interaction
const giftBox = document.getElementById('gift-box');
const surpriseMessage = document.getElementById('surprise-message');
const giftContainer = document.getElementById('gift-container');

if (giftContainer) {
    giftContainer.addEventListener('click', () => {
        if (!giftBox.classList.contains('open')) {
            giftBox.classList.add('open');
            surpriseMessage.classList.add('show');

            // Cute Sky Blue & White Confetti
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 },
                colors: ['#87CEEB', '#FFFFFF', '#5DADE2', '#E0F7FA']
            });

            // Extra bursts
            setTimeout(() => {
                confetti({ particleCount: 60, angle: 60, spread: 50, origin: { x: 0 }, colors: ['#87CEEB', '#FFFFFF'] });
                confetti({ particleCount: 60, angle: 120, spread: 50, origin: { x: 1 }, colors: ['#87CEEB', '#FFFFFF'] });
            }, 300);
        }
    });
}

function resetGift() {
    if (giftBox) giftBox.classList.remove('open');
    if (surpriseMessage) surpriseMessage.classList.remove('show');
}

// Magnetic Button Effect
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.08)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = `translate(0, 0) scale(1)`;
    });
});
