// Toggle open/close state for the letter
function openLetter() {
    const envelope = document.getElementById('envelope');
    const hint = document.getElementById('hint-text');
    
    envelope.classList.toggle('open');
    
    if(envelope.classList.contains('open')) {
        hint.textContent = "Close to save the magic 💖";
        hint.style.transform = "translateY(20px)"; // Keeps layout clean on mobile
    } else {
        hint.textContent = "Tap the rose to reveal the magic ✨";
        hint.style.transform = "translateY(0)";
    }
}

// Generate glowing, floating background roses
const garden = document.getElementById('rose-garden');
const roseSymbols = ['🌹', '✨', '🌹']; // Fixed encoding visual glitches

function addFloatingRose() {
    const rose = document.createElement('div');
    rose.classList.add('floating-rose');
    
    // Random icon and position
    rose.innerText = roseSymbols[Math.floor(Math.random() * roseSymbols.length)];
    rose.style.left = Math.random() * 100 + "vw";
    
    // Randomize size and animation details for variation
    const size = Math.random() * 1.2 + 0.8; // Max 2rem to prevent overwhelming mobile screen
    rose.style.fontSize = `${size}rem`;
    rose.style.animationDuration = Math.random() * 4 + 6 + "s"; 
    rose.style.animationDelay = Math.random() * 2 + "s";

    garden.appendChild(rose);

    // Clean up memory after animation finishes
    setTimeout(() => {
        rose.remove();
    }, 10000);
}

// Start adding roses shortly after load
setTimeout(() => {
    setInterval(addFloatingRose, 900); // Slightly slower spawn rate so mobile processors stay cool
    for(let i=0; i<4; i++) { addFloatingRose(); }
}, 500);