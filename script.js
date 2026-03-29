/* ===================================================
   💖 LOVE MEMORIES WEBSITE - MAGICAL SCRIPT 💖
   =================================================== */

// ==========================================
// 1. FLOATING HEARTS BACKGROUND
// ==========================================
function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    const hearts = ['💖', '💕', '💗', '💝', '💘', '🩷', '♥️', '✨', '🌸', '🦋'];

    for (let i = 0; i < 25; i++) {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 12) + 'px';
        heart.style.animationDuration = (Math.random() * 15 + 10) + 's';
        heart.style.animationDelay = (Math.random() * 10) + 's';
        container.appendChild(heart);
    }
}

// ==========================================
// 2. STARRY SKY IN HERO
// ==========================================
function createStars() {
    const container = document.getElementById('heroStars');
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.classList.add('hero-star');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = (Math.random() * 3 + 1) + 'px';
        star.style.height = star.style.width;
        star.style.setProperty('--duration', (Math.random() * 3 + 1) + 's');
        star.style.animationDelay = (Math.random() * 3) + 's';
        container.appendChild(star);
    }
}

// ==========================================
// 3. SPARKLE CURSOR TRAIL
// ==========================================
let lastSparkle = 0;
function createSparkleTrail(e) {
    const now = Date.now();
    if (now - lastSparkle < 50) return;
    lastSparkle = now;

    const sparkle = document.createElement('div');
    sparkle.classList.add('cursor-sparkle');
    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';
    sparkle.style.setProperty('--tx', (Math.random() * 40 - 20) + 'px');
    sparkle.style.setProperty('--ty', (Math.random() * 40 - 20) + 'px');

    const colors = [
        'radial-gradient(circle, #faa2c1, #e599f7)',
        'radial-gradient(circle, #ffd43b, #faa2c1)',
        'radial-gradient(circle, #e599f7, #cc5de8)',
        'radial-gradient(circle, #fcc2d7, #ffd43b)',
    ];
    sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 800);
}

document.addEventListener('mousemove', createSparkleTrail);

// ==========================================
// 4. NAVIGATION
// ==========================================
const nav = document.getElementById('mainNav');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
});

// ==========================================
// 5. LOVE COUNTER
// ==========================================
// Set your relationship start date here!
const startDate = new Date('2023-03-27T00:00:00');

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));
    const seconds = Math.floor(diff / 1000);

    animateCounter('counterDays', days);
    animateCounter('counterHours', hours);
    animateCounter('counterMinutes', minutes);
    animateCounter('counterSeconds', seconds);
}

function animateCounter(id, target) {
    const el = document.getElementById(id);
    const current = parseInt(el.textContent.replace(/,/g, '')) || 0;

    if (current !== target) {
        el.textContent = target.toLocaleString();
    }
}

setInterval(updateCounter, 1000);
updateCounter();

// ==========================================
// 6. SCROLL ANIMATIONS
// ==========================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, observerOptions);

document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
});

// Also observe timeline items
document.querySelectorAll('.timeline-item').forEach(el => {
    observer.observe(el);
});

// ==========================================
// 7. LOVE ENVELOPE FLIP
// ==========================================
document.querySelectorAll('.love-envelope').forEach(envelope => {
    envelope.addEventListener('click', () => {
        envelope.classList.toggle('opened');
        if (envelope.classList.contains('opened')) {
            createMiniHearts(envelope);
        }
    });
});

function createMiniHearts(element) {
    const rect = element.getBoundingClientRect();
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.classList.add('cursor-sparkle');
        heart.textContent = '💖';
        heart.style.fontSize = '14px';
        heart.style.background = 'none';
        heart.style.width = 'auto';
        heart.style.height = 'auto';
        heart.style.boxShadow = 'none';
        heart.style.left = rect.left + rect.width / 2 + 'px';
        heart.style.top = rect.top + rect.height / 2 + 'px';
        heart.style.setProperty('--tx', (Math.random() * 100 - 50) + 'px');
        heart.style.setProperty('--ty', (Math.random() * -80 - 20) + 'px');
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 800);
    }
}

// ==========================================
// 8. REASONS I LOVE YOU - JAR
// ==========================================
const reasons = [
    "Your smile lights up my entire world 🌟",
    "The way you laugh at my terrible jokes 😂",
    "How you make even boring days magical ✨",
    "Your kind and caring heart 💖",
    "The way you look at me like I'm your whole world 🌍",
    "How safe I feel when I'm with you 🛡️",
    "Your beautiful eyes that I could stare into forever 👀",
    "The way you hold my hand 🤝",
    "Your silly dance moves that always make me laugh 💃",
    "How you always know exactly what to say 💬",
    "The way you smell — it's my favorite scent ever 🌸",
    "How you believe in me even when I don't believe in myself 💪",
    "Your morning texts that make my day before it even starts 📱",
    "The way you care about everyone around you 🤗",
    "How you make me want to be a better person 🌱",
    "Your voice — I could listen to you talk forever 🎵",
    "The way you surprise me with little things 🎁",
    "How you remember the smallest details about us 📝",
    "Your hugs that feel like home 🏠",
    "The way you say my name 💕",
    "How passionate you are about the things you love 🔥",
    "Your patience with me 🕊️",
    "The way you scrunch your nose when you're thinking 😊",
    "How we can sit in silence and it's still perfect 🌙",
    "Your determination and strength 💎",
    "The way you always put others before yourself 👑",
    "How you make my heart race even after all this time ❤️‍🔥",
    "Your creativity and imagination 🎨",
    "The way you look when you're sleeping peacefully 😴",
    "How you always encourage me to chase my dreams 🌈",
    "Your cute little habits that I adore 🐾",
    "The way food tastes better when I'm eating with you 🍝",
    "How you're my favorite adventure partner 🧭",
    "Your intelligence — beauty AND brains 🧠",
    "The way you make me feel like the luckiest person alive 🍀",
    "How every song reminds me of you now 🎶",
    "Your loyalty and commitment to us 💍",
    "The way you always try to make things work 🛠️",
    "How you've changed my life for the better 🌅",
    "Simply because you are YOU — and that's more than enough 💖",
];

// Fill jar with hearts
const jarHearts = document.getElementById('jarHearts');
const heartEmojis = ['💖', '💕', '💗', '💝', '🩷'];
for (let i = 0; i < 20; i++) {
    const h = document.createElement('div');
    h.classList.add('jar-heart-item');
    h.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    h.style.bottom = (Math.random() * 80 + 5) + '%';
    h.style.left = (Math.random() * 80 + 5) + '%';
    h.style.animationDelay = (Math.random() * 2) + 's';
    h.style.animationDuration = (Math.random() * 2 + 2) + 's';
    h.style.fontSize = (Math.random() * 10 + 14) + 'px';
    jarHearts.appendChild(h);
}

let lastReasonIndex = -1;
document.getElementById('pickReason').addEventListener('click', () => {
    let index;
    do {
        index = Math.floor(Math.random() * reasons.length);
    } while (index === lastReasonIndex);
    lastReasonIndex = index;

    const paper = document.getElementById('reasonPaper');
    const text = document.getElementById('reasonText');

    paper.classList.remove('pop');
    void paper.offsetWidth; // Trigger reflow
    paper.classList.add('pop');

    text.textContent = reasons[index];
});

// ==========================================
// 9. LOVE QUIZ
// ==========================================
const quizQuestions = [
    {
        question: "What makes our relationship special? 💕",
        options: ["We never fight", "We face everything together", "We only have good days", "We avoid problems"],
        correct: 1
    },
    {
        question: "What's the best part of being together? 🌟",
        options: ["Material gifts", "Being with each other", "Never disagreeing", "Having the same opinions"],
        correct: 1
    },
    {
        question: "What do we always say to each other? 💬",
        options: ["See you later", "Whatever", "I love you 💖", "Nothing much"],
        correct: 2
    },
    {
        question: "What's our love language? 🥰",
        options: ["Ignoring each other", "All of them — we love fully", "Only texts", "Only gifts"],
        correct: 1
    },
    {
        question: "What would we do with a free weekend? 🌈",
        options: ["Stay apart", "Spend every moment together", "Only sleep", "Watch TV separately"],
        correct: 1
    },
];

let currentQuestion = 0;
let score = 0;

const quizCard = document.getElementById('quizCard');
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const quizStartBtn = document.getElementById('quizStartBtn');
const quizResult = document.getElementById('quizResult');
const quizProgressBar = document.getElementById('quizProgressBar');

quizStartBtn.addEventListener('click', startQuiz);
document.getElementById('quizRestartBtn').addEventListener('click', () => {
    quizResult.style.display = 'none';
    quizCard.style.display = 'block';
    currentQuestion = 0;
    score = 0;
    quizProgressBar.style.width = '0%';
    startQuiz();
});

function startQuiz() {
    quizStartBtn.style.display = 'none';
    showQuestion();
}

function showQuestion() {
    const q = quizQuestions[currentQuestion];
    quizQuestion.textContent = q.question;
    quizOptions.innerHTML = '';
    quizProgressBar.style.width = ((currentQuestion / quizQuestions.length) * 100) + '%';

    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.classList.add('quiz-option');
        btn.textContent = option;
        btn.addEventListener('click', () => selectAnswer(index, btn));
        quizOptions.appendChild(btn);
    });
}

function selectAnswer(index, btn) {
    const q = quizQuestions[currentQuestion];
    const allBtns = quizOptions.querySelectorAll('.quiz-option');
    allBtns.forEach(b => b.style.pointerEvents = 'none');

    if (index === q.correct) {
        btn.classList.add('correct');
        score++;
    } else {
        btn.classList.add('wrong');
        allBtns[q.correct].classList.add('correct');
    }

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizQuestions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1200);
}

function showResult() {
    quizCard.style.display = 'none';
    quizResult.style.display = 'block';
    quizProgressBar.style.width = '100%';

    const resultEmoji = document.getElementById('resultEmoji');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');

    if (score === quizQuestions.length) {
        resultEmoji.textContent = '💖';
        resultTitle.textContent = 'Perfect Score!';
        resultMessage.textContent = `You got ${score}/${quizQuestions.length}! You know us perfectly! We're meant to be! 💕`;
    } else if (score >= quizQuestions.length * 0.6) {
        resultEmoji.textContent = '🥰';
        resultTitle.textContent = 'Almost Perfect!';
        resultMessage.textContent = `You got ${score}/${quizQuestions.length}! You know us so well! 💗`;
    } else {
        resultEmoji.textContent = '💕';
        resultTitle.textContent = 'Not Bad!';
        resultMessage.textContent = `You got ${score}/${quizQuestions.length}! Let's make more memories so you'll ace it next time! 🌟`;
    }
}

// ==========================================
// 10. SURPRISE SECTION
// ==========================================
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseMessage = document.getElementById('surpriseMessage');
const fireworksContainer = document.getElementById('fireworks');

surpriseBtn.addEventListener('click', () => {
    surpriseBtn.style.display = 'none';

    // Create fireworks
    createFireworks();

    // Heart rain
    setTimeout(createHeartRain, 500);

    // Show message
    setTimeout(() => {
        surpriseMessage.classList.add('show');
        typeMessage();
    }, 1500);
});

function createFireworks() {
    const colors = ['#f06595', '#e599f7', '#ffd43b', '#faa2c1', '#cc5de8', '#fb7185'];

    for (let burst = 0; burst < 5; burst++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * (window.innerHeight * 0.5);

            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.classList.add('firework-particle');
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                particle.style.boxShadow = `0 0 6px ${colors[Math.floor(Math.random() * colors.length)]}`;

                const angle = (Math.PI * 2 * i) / 30;
                const distance = Math.random() * 150 + 50;
                particle.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
                particle.style.setProperty('--ty', Math.sin(angle) * distance + 'px');

                fireworksContainer.appendChild(particle);
                setTimeout(() => particle.remove(), 1500);
            }
        }, burst * 400);
    }
}

function createHeartRain() {
    const container = document.getElementById('surpriseHeartRain');
    const hearts = ['💖', '💕', '💗', '💝', '🩷', '❤️', '🌹', '✨'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('rain-heart');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
            heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
            container.appendChild(heart);
            setTimeout(() => heart.remove(), 4000);
        }, i * 100);
    }
}

function typeMessage() {
    const text = "You are the most beautiful chapter of my life. Every moment with you is a gift I'll cherish forever. Thank you for choosing me, for loving me, and for making my world complete. I love you more than all the stars in the sky... 💖✨";
    const el = document.getElementById('typewriterText');
    let i = 0;

    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, 40);
        }
    }

    type();
}

// ==========================================
// 11. MUSIC TOGGLE (Background ambiance)
// ==========================================
const musicToggle = document.getElementById('musicToggle');
let audioContext = null;
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        playMelody();
        isPlaying = true;
        musicToggle.style.background = 'linear-gradient(135deg, rgba(76, 175, 80, 0.3), rgba(129, 199, 132, 0.3))';
    } else if (isPlaying) {
        audioContext.suspend();
        isPlaying = false;
        musicToggle.style.background = 'linear-gradient(135deg, rgba(230, 73, 128, 0.3), rgba(190, 75, 219, 0.3))';
    } else {
        audioContext.resume();
        isPlaying = true;
        musicToggle.style.background = 'linear-gradient(135deg, rgba(76, 175, 80, 0.3), rgba(129, 199, 132, 0.3))';
    }
});

function playMelody() {
    // A sweet romantic melody using Web Audio API
    const notes = [
        { freq: 523.25, dur: 0.5 },  // C5
        { freq: 587.33, dur: 0.5 },  // D5
        { freq: 659.25, dur: 0.75 }, // E5
        { freq: 523.25, dur: 0.25 }, // C5
        { freq: 659.25, dur: 0.5 },  // E5
        { freq: 698.46, dur: 0.5 },  // F5
        { freq: 659.25, dur: 1.0 },  // E5
        { freq: 0, dur: 0.25 },
        { freq: 587.33, dur: 0.5 },  // D5
        { freq: 659.25, dur: 0.5 },  // E5
        { freq: 698.46, dur: 0.75 }, // F5
        { freq: 783.99, dur: 0.25 }, // G5
        { freq: 698.46, dur: 0.5 },  // F5
        { freq: 659.25, dur: 0.5 },  // E5
        { freq: 587.33, dur: 1.0 },  // D5
        { freq: 0, dur: 0.25 },
        { freq: 523.25, dur: 0.5 },  // C5
        { freq: 493.88, dur: 0.5 },  // B4
        { freq: 440.00, dur: 0.75 }, // A4
        { freq: 493.88, dur: 0.25 }, // B4
        { freq: 523.25, dur: 1.0 },  // C5
        { freq: 0, dur: 0.5 },
    ];

    let time = audioContext.currentTime;

    function scheduleLoop() {
        notes.forEach(note => {
            if (note.freq > 0) {
                const osc = audioContext.createOscillator();
                const gain = audioContext.createGain();
                const filter = audioContext.createBiquadFilter();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(note.freq, time);

                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(2000, time);

                gain.gain.setValueAtTime(0, time);
                gain.gain.linearRampToValueAtTime(0.08, time + 0.05);
                gain.gain.setValueAtTime(0.08, time + note.dur * 0.7);
                gain.gain.linearRampToValueAtTime(0, time + note.dur);

                // Add a soft harmonic
                const osc2 = audioContext.createOscillator();
                const gain2 = audioContext.createGain();
                osc2.type = 'triangle';
                osc2.frequency.setValueAtTime(note.freq * 2, time);
                gain2.gain.setValueAtTime(0, time);
                gain2.gain.linearRampToValueAtTime(0.02, time + 0.05);
                gain2.gain.linearRampToValueAtTime(0, time + note.dur);

                osc.connect(filter);
                filter.connect(gain);
                gain.connect(audioContext.destination);

                osc2.connect(gain2);
                gain2.connect(audioContext.destination);

                osc.start(time);
                osc.stop(time + note.dur + 0.1);
                osc2.start(time);
                osc2.stop(time + note.dur + 0.1);
            }
            time += note.dur;
        });
    }

    scheduleLoop();

    // Loop the melody
    const totalDuration = notes.reduce((sum, n) => sum + n.dur, 0) * 1000;
    setInterval(() => {
        if (isPlaying && audioContext.state === 'running') {
            time = audioContext.currentTime;
            scheduleLoop();
        }
    }, totalDuration);
}

// ==========================================
// 12. SMOOTH SCROLL FOR NAV LINKS
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ==========================================
// 13. PHOTO GALLERY (Persistent with localStorage)
// ==========================================
const photoGallery = document.getElementById('photoGallery');
const galleryEmpty = document.getElementById('galleryEmpty');
const uploadBtn = document.getElementById('uploadBtn');
const photoUpload = document.getElementById('photoUpload');

const STORAGE_KEY = 'loveMemoryPhotos';

// Lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxCounter = document.getElementById('lightboxCounter');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
let currentPhotoIndex = 0;
let allPhotos = [];

// --- Storage helpers ---
function getSavedPhotos() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        return [];
    }
}

function savePhotos(photos) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
    } catch (e) {
        // localStorage might be full — warn user
        if (e.name === 'QuotaExceededError' || e.code === 22) {
            alert('⚠️ Storage is full! Try removing some photos first, or use smaller images.');
        }
    }
}

function addPhotoToStorage(dataUrl, name) {
    const photos = getSavedPhotos();
    photos.push({ src: dataUrl, name: name, id: Date.now() + Math.random() });
    savePhotos(photos);
    return photos;
}

function removePhotoFromStorage(id) {
    let photos = getSavedPhotos();
    photos = photos.filter(p => p.id !== id);
    savePhotos(photos);
    return photos;
}

// --- Convert file to base64 data URL ---
function fileToDataUrl(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// --- Render gallery from storage ---
function renderGallery() {
    photoGallery.innerHTML = '';
    const photos = getSavedPhotos();
    allPhotos = photos;

    if (photos.length === 0) {
        galleryEmpty.style.display = 'block';
        photoGallery.style.display = 'none';
    } else {
        galleryEmpty.style.display = 'none';
        photoGallery.style.display = 'grid';

        photos.forEach((photo, index) => {
            const card = createPhotoCard(photo, index);
            photoGallery.appendChild(card);
        });
    }
}

function formatPhotoName(filename) {
    return filename
        .replace(/\.[^/.]+$/, '')
        .replace(/[_-]/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());
}

function createPhotoCard(photo, index) {
    const card = document.createElement('div');
    card.classList.add('photo-card');
    card.setAttribute('data-id', photo.id);
    card.innerHTML = `
        <img src="${photo.src}" alt="${photo.name}" loading="lazy">
        <div class="photo-card-overlay">
            <span class="photo-heart">💖</span>
            <span class="photo-name">${photo.name}</span>
        </div>
        <button class="photo-remove-btn" title="Remove this photo">✕</button>
    `;

    // Click image to open lightbox
    card.addEventListener('click', (e) => {
        // Don't open lightbox if remove button was clicked
        if (e.target.closest('.photo-remove-btn')) return;
        openLightbox(index);
    });

    // Remove button
    const removeBtn = card.querySelector('.photo-remove-btn');
    removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm('Remove this photo? 🥺')) {
            removePhotoFromStorage(photo.id);
            card.style.transform = 'scale(0)';
            card.style.opacity = '0';
            setTimeout(() => {
                renderGallery();
            }, 400);
        }
    });

    return card;
}

// --- Upload handling ---
uploadBtn.addEventListener('click', () => {
    photoUpload.click();
});

photoUpload.addEventListener('change', async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    // Show a loading state
    uploadBtn.disabled = true;
    uploadBtn.innerHTML = '<span>⏳</span> Saving...';

    for (const file of files) {
        try {
            // Resize large images to save localStorage space
            const dataUrl = await resizeAndConvert(file, 1200);
            const name = formatPhotoName(file.name);
            addPhotoToStorage(dataUrl, name);
        } catch (err) {
            console.error('Failed to process photo:', err);
        }
    }

    // Reset button
    uploadBtn.disabled = false;
    uploadBtn.innerHTML = '<span>📸</span> Add Photos';
    photoUpload.value = '';

    // Re-render gallery
    renderGallery();
});

// Resize image to max dimension to save storage space
function resizeAndConvert(file, maxDim) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const url = URL.createObjectURL(file);
        img.onload = () => {
            let { width, height } = img;

            // Only resize if larger than maxDim
            if (width > maxDim || height > maxDim) {
                if (width > height) {
                    height = Math.round((height * maxDim) / width);
                    width = maxDim;
                } else {
                    width = Math.round((width * maxDim) / height);
                    height = maxDim;
                }
            }

            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);

            // Use JPEG for photos (much smaller than PNG)
            const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
            URL.revokeObjectURL(url);
            resolve(dataUrl);
        };
        img.onerror = reject;
        img.src = url;
    });
}

// --- Lightbox functions ---
function openLightbox(index) {
    currentPhotoIndex = index;
    updateLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightbox() {
    if (allPhotos.length === 0) return;
    const photo = allPhotos[currentPhotoIndex];
    lightboxImage.src = photo.src;
    lightboxCaption.textContent = photo.name;
    lightboxCounter.textContent = `${currentPhotoIndex + 1} / ${allPhotos.length}`;
}

function prevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + allPhotos.length) % allPhotos.length;
    updateLightbox();
}

function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % allPhotos.length;
    updateLightbox();
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', prevPhoto);
lightboxNext.addEventListener('click', nextPhoto);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevPhoto();
    if (e.key === 'ArrowRight') nextPhoto();
});

// ==========================================
// 14. INITIALIZE EVERYTHING
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    createStars();
    renderGallery();

    // Add a subtle parallax effect to the hero
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const hero = document.querySelector('.hero-content');
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
            hero.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    });

    // Add staggered animation to envelopes
    const envelopes = document.querySelectorAll('.love-envelope');
    envelopes.forEach((env, index) => {
        env.style.transitionDelay = (index * 0.15) + 's';
    });

    console.log('💖 This website was made with love 💖');
});

