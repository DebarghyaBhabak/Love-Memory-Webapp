/* ===================================================
   🦾 IRON MAN FUTURISTIC LOGIN - SCRIPT
   =================================================== */

// === Constants ===
const ACCESS_CODE = '27032023';
const SESSION_KEY = 'loveWebAccess';
const MAX_ATTEMPTS = 5;
let attempts = 0;

// === Check if already authenticated ===
if (sessionStorage.getItem(SESSION_KEY) === 'granted') {
    window.location.href = 'index.html';
}

// === Create Background Particles ===
function createParticles() {
    const bg = document.querySelector('.im-bg');
    for (let i = 0; i < 40; i++) {
        const p = document.createElement('div');
        p.classList.add('im-particle');
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (Math.random() * 12 + 8) + 's';
        p.style.animationDelay = (Math.random() * 10) + 's';
        p.style.setProperty('--drift', (Math.random() * 100 - 50) + 'px');
        p.style.width = (Math.random() * 2 + 1) + 'px';
        p.style.height = p.style.width;
        bg.appendChild(p);
    }
}

// === Create Arc Reactor Blades ===
function createArcBlades() {
    const reactor = document.querySelector('.arc-reactor');
    const bladeCount = 12;
    for (let i = 0; i < bladeCount; i++) {
        const blade = document.createElement('div');
        blade.classList.add('arc-blade');
        const angle = (360 / bladeCount) * i;
        blade.style.transform = `rotate(${angle}deg) translateY(-35px)`;
        reactor.appendChild(blade);
    }
}

// === Matrix Rain Columns ===
function createMatrixRain() {
    const chars = '0123456789ABCDEF<>{}[]|/\\+=*&^%$#@!';
    const columns = 6;
    
    for (let i = 0; i < columns; i++) {
        const col = document.createElement('div');
        col.classList.add('matrix-column');
        
        let text = '';
        for (let j = 0; j < 50; j++) {
            text += chars[Math.floor(Math.random() * chars.length)];
        }
        col.textContent = text;
        
        // Position on left or right edges
        if (i < columns / 2) {
            col.style.left = (i * 25 + 10) + 'px';
        } else {
            col.style.right = ((i - columns / 2) * 25 + 10) + 'px';
        }
        
        col.style.animationDuration = (Math.random() * 15 + 15) + 's';
        col.style.animationDelay = (Math.random() * 10) + 's';
        
        document.body.appendChild(col);
    }
}

// === Status Bar Time ===
function updateStatusTime() {
    const el = document.getElementById('statusTime');
    if (!el) return;
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    el.textContent = `${h}:${m}:${s}`;
}

// === Security Bar Animation ===
function updateSecurityBar(length) {
    const segments = document.querySelectorAll('.security-segment');
    const maxSegments = segments.length;
    const activeCount = Math.min(Math.ceil((length / ACCESS_CODE.length) * maxSegments), maxSegments);
    
    segments.forEach((seg, i) => {
        if (i < activeCount) {
            seg.classList.add('active');
        } else {
            seg.classList.remove('active');
        }
    });
}

// === Toggle Password Visibility ===
function togglePasswordVisibility() {
    const input = document.getElementById('accessCode');
    const btn = document.getElementById('togglePass');
    
    if (input.type === 'password') {
        input.type = 'text';
        btn.innerHTML = '🔓';
    } else {
        input.type = 'password';
        btn.innerHTML = '🔒';
    }
}

// === Handle Login ===
function handleLogin(e) {
    e.preventDefault();
    
    const input = document.getElementById('accessCode');
    const submitBtn = document.getElementById('submitBtn');
    const statusMsg = document.getElementById('statusMessage');
    const code = input.value.trim();
    
    if (!code) {
        statusMsg.textContent = '⚠ ACCESS CODE REQUIRED';
        statusMsg.className = 'status-message error';
        return;
    }
    
    // Loading state
    submitBtn.classList.add('loading');
    statusMsg.textContent = '⏳ VERIFYING BIOMETRIC SIGNATURE...';
    statusMsg.className = 'status-message info';
    
    // Simulate verification delay
    setTimeout(() => {
        if (code === ACCESS_CODE) {
            // SUCCESS
            accessGranted(submitBtn, statusMsg);
        } else {
            // DENIED
            accessDenied(submitBtn, statusMsg, input);
        }
    }, 1500);
}

// === Access Granted ===
function accessGranted(btn, msg) {
    btn.classList.remove('loading');
    msg.textContent = '✓ IDENTITY VERIFIED — ACCESS GRANTED';
    msg.className = 'status-message success';
    
    // Play success sound
    playTone(880, 0.15, 'sine');
    setTimeout(() => playTone(1100, 0.15, 'sine'), 150);
    setTimeout(() => playTone(1320, 0.2, 'sine'), 300);
    
    // Store session
    sessionStorage.setItem(SESSION_KEY, 'granted');
    
    // Show granted overlay
    setTimeout(() => {
        showGrantedOverlay();
    }, 800);
}

// === Access Denied ===
function accessDenied(btn, msg, input) {
    attempts++;
    btn.classList.remove('loading');
    
    const remaining = MAX_ATTEMPTS - attempts;
    
    if (remaining <= 0) {
        msg.textContent = '🔴 SYSTEM LOCKED — TOO MANY ATTEMPTS';
        msg.className = 'status-message error';
        input.disabled = true;
        btn.disabled = true;
        btn.style.opacity = '0.3';
        playTone(220, 0.3, 'sawtooth');
        return;
    }
    
    msg.textContent = `✕ ACCESS DENIED — ${remaining} ATTEMPT${remaining !== 1 ? 'S' : ''} REMAINING`;
    msg.className = 'status-message error';
    
    // Update attempt counter
    const attemptEl = document.getElementById('attemptCount');
    if (attemptEl) attemptEl.textContent = attempts;
    
    // Flash effect
    const flash = document.createElement('div');
    flash.classList.add('denied-flash');
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 600);
    
    // Error sound
    playTone(200, 0.2, 'square');
    setTimeout(() => playTone(150, 0.3, 'square'), 200);
    
    // Shake input
    input.style.borderColor = 'rgba(255, 26, 26, 0.5)';
    input.style.boxShadow = '0 0 20px rgba(255, 26, 26, 0.2)';
    setTimeout(() => {
        input.style.borderColor = '';
        input.style.boxShadow = '';
    }, 1500);
    
    input.value = '';
    updateSecurityBar(0);
    input.focus();
}

// === Show Granted Overlay ===
function showGrantedOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('granted-overlay');
    overlay.innerHTML = `
        <div class="granted-text">Access Granted</div>
        <div class="granted-sub">WELCOME BACK — INITIALIZING INTERFACE</div>
        <div class="granted-loading">
            <div class="granted-loading-bar"></div>
        </div>
    `;
    document.body.appendChild(overlay);
    
    // Redirect after loading bar animation
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2500);
}

// === Play Tone (Web Audio) ===
function playTone(freq, duration, type) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = type || 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + duration);
    } catch (e) {
        // Audio not supported
    }
}

// === Keyboard shortcut: Enter to submit ===
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const form = document.getElementById('loginForm');
        if (form) {
            handleLogin(e);
        }
    }
});

// === Initialize ===
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    createArcBlades();
    createMatrixRain();
    updateStatusTime();
    setInterval(updateStatusTime, 1000);
    
    // Input events
    const input = document.getElementById('accessCode');
    input.addEventListener('input', () => {
        updateSecurityBar(input.value.length);
    });
    
    // Toggle password
    const toggleBtn = document.getElementById('togglePass');
    toggleBtn.addEventListener('click', togglePasswordVisibility);
    
    // Form submission
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', handleLogin);
    
    // Play startup sound
    setTimeout(() => {
        playTone(440, 0.1, 'sine');
        setTimeout(() => playTone(660, 0.1, 'sine'), 100);
        setTimeout(() => playTone(880, 0.15, 'sine'), 200);
    }, 500);
    
    // Auto-focus
    setTimeout(() => input.focus(), 800);
});
