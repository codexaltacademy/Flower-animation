const bloomBtn = document.getElementById('bloomBtn');
const bouquet = document.getElementById('bouquet');
const vase = document.getElementById('vase');

bloomBtn.addEventListener('click', () => {
    const isBlooming = bouquet.classList.toggle('bloom');
    
    if (isBlooming) {
        bloomBtn.innerText = "Close Bouquet";
        // Delay glow slightly for a magical feel
        setTimeout(() => {
            vase.classList.add('glowing');
            bloomBtn.classList.add('glowing');
        }, 500);
    } else {
        bloomBtn.innerText = "Unfold Petals";
        vase.classList.remove('glowing');
        bloomBtn.classList.remove('glowing');
    }


if (isBlooming) {
     bloomBtn.innerText = "Close Bouquet";
    // Trigger the petal confetti
    for (let i = 0; i < 50; i++) {
        createFallingPetal();
    }
}

// Add this function at the bottom of script.js
function createFallingPetal() {
    const container = document.getElementById('petal-rain-container');
    const petal = document.createElement('div');
    petal.classList.add('falling-petal');
    
    // Randomize position and animation
    const startX = Math.random() * 100; // 0 to 100vw
    const delay = Math.random() * 3; // 0 to 3 seconds
    const duration = 4 + Math.random() * 4; // 4 to 8 seconds
    const size = 10 + Math.random() * 10;
    
    petal.style.left = startX + 'vw';
    petal.style.width = size + 'px';
    petal.style.height = (size * 1.3) + 'px';
    petal.style.animation = `petalFall ${duration}s linear ${delay}s forwards`;
    
    // Randomize petal color slightly for vintage depth
    const colors = ['#700', '#900', '#b00', '#500'];
    petal.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    container.appendChild(petal);
    
    // Remove petal from DOM after animation ends to keep code clean
    setTimeout(() => petal.remove(), (duration + delay) * 1000);
}
});
// Disable button initially
bloomBtn.style.pointerEvents = "none";
bloomBtn.style.opacity = "0";

// Enable button after the cinematic transition is done (e.g., after 4.5 seconds)
setTimeout(() => {
    bloomBtn.style.pointerEvents = "auto";
    bloomBtn.style.opacity = "1";
    bloomBtn.style.transition = "opacity 1s ease";
}, 4500);

