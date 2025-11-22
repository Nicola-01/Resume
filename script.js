/* --- 1. LANGUAGE LOGIC --- */
const translations = {
    en: {
        greeting: "Hello World, I am",
        roles: ["Cybersecurity Engineer", "Full Stack Developer", "UI/UX Enthusiast", "Problem Creator", "Problem Solver"],
        cta: "Contact Me",
        about_title: "About Me",
        about_desc: "Passionate developer specializing in building exceptional digital experiences. Currently focused on building accessible, human-centered products.",
        skills_title: "Tech Stack",
        projects_title: "Selected Projects",
        proj1_desc: "A scalable RESTful API built with Node.js and MongoDB. Handles authentication and payments.",
        proj2_desc: "Real-time data visualization dashboard using React and D3.js with WebSocket integration.",
        proj3_desc: "Responsive chat UI integrated with OpenAI API, featuring dark mode and history storage.",
        contact_title: "Get In Touch",
        contact_desc: "My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
    },
    it: {
        greeting: "Hello World, sono",
        roles: ["Ingegnere Cybersecurity", "Sviluppatore Full Stack", "Appassionato UI/UX", "Creatore di Problemi", "Problem Solver"],
        cta: "Contattami",
        about_title: "Chi Sono",
        about_desc: "Sviluppatore appassionato specializzato nella creazione di esperienze digitali eccezionali. Attualmente concentrato su prodotti accessibili e user-centered.",
        skills_title: "Competenze Tecniche",
        projects_title: "Progetti Selezionati",
        proj1_desc: "Una API RESTful scalabile costruita con Node.js e MongoDB. Gestisce autenticazione e pagamenti.",
        proj2_desc: "Dashboard di visualizzazione dati in tempo reale usando React e D3.js con integrazione WebSocket.",
        proj3_desc: "Interfaccia chat responsive integrata con API OpenAI, con dark mode e cronologia.",
        contact_title: "Contatti",
        contact_desc: "La mia casella di posta è sempre aperta. Che tu abbia una domanda o voglia solo salutare, farò del mio meglio per risponderti!"
    }
};

let currentLang = Intl.DateTimeFormat().resolvedOptions().locale.startsWith('it') ? 'it' : 'en';

// Typing Effect Variables
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeTimeout;

function typeWriter() {
    const roles = translations[currentLang].roles;
    const currentRole = roles[roleIndex];
    const typingElement = document.getElementById('typing-text');
    
    if (!typingElement) return;

    if (isDeleting) {
        // Deleting
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Typing
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
        // Finished typing, wait before deleting
        typeSpeed = 2000;
        if (currentRole === "Problem Creator") typeSpeed = 50;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next role
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }

    clearTimeout(typeTimeout);
    typeTimeout = setTimeout(typeWriter, typeSpeed);
}

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if(translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    document.getElementById('lang-toggle').textContent = currentLang === 'en' ? 'IT' : 'EN';
    
    // Update header logo text (invisible but needed for layout)
    const heroName = document.getElementById('hero-name');
    const headerLogo = document.getElementById('header-logo');
    if (heroName && headerLogo) {
        headerLogo.textContent = heroName.textContent;
        headerLogo.style.opacity = '0'; // Keep it invisible, we just need the space/position
    }

    // Reset typing effect
    clearTimeout(typeTimeout);
    roleIndex = 0;
    charIndex = 0;
    isDeleting = false;
    typeWriter();
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'it' : 'en';
    updateContent();
});
updateContent();


/* --- 2. KINETIC SCROLL PHYSICS ENGINE & MORPH ANIMATION --- */
const canvas = document.getElementById('canvas-bg');
const ctx = canvas.getContext('2d');

// Scroll Physics Variables
let scrollY = window.scrollY;
let scrollVelocity = 0.1;
let lastScrollY = scrollY;

const heroName = document.getElementById('hero-name');
const headerLogo = document.getElementById('header-logo');

// Listen to scroll
window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
    
    // --- 1. PHYSICS LOGIC ---
    const delta = scrollY - lastScrollY;
    scrollVelocity += delta * 0.25; 
    lastScrollY = scrollY;

    // --- 2. HERO NAME MORPH ANIMATION ---
    if (heroName && headerLogo) {
        const maxScroll = 300;
        const offset = 100;
        const progress = Math.min(Math.max((scrollY-offset) / (maxScroll-offset), 0), 1);

        if (progress >= 0) {

            const namePos = heroName.getBoundingClientRect();
            const logoPos = headerLogo.getBoundingClientRect();

            const deltaY = logoPos.top - namePos.top;

            const startSize = parseFloat(window.getComputedStyle(heroName).fontSize);
            const endSize = parseFloat(window.getComputedStyle(headerLogo).fontSize);
            const scale = endSize / startSize;

            const ease = 1 - Math.pow(1 - progress, 3); // Cubic ease out
            const currentScale = 1 + (scale - 1) * ease;

            heroName.style.setProperty(
                'transform', 
                `scale(${currentScale})`
            );

            heroName.style.opacity = deltaY > 0 ? 0 : 1;
            headerLogo.style.opacity = deltaY > 0 ? 1 : 0;
        } else {
            heroName.style.transform = 'none';
        }
    }
});

let particles = [];
const particleCount = 120; 

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Particle {
    constructor() {
        this.reset();
        // Initialize random positions everywhere
        this.y = Math.random() * canvas.height;
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height; // Will be overwritten if it goes out of bounds
        this.vx = (Math.random() - 0.5) * 0.5; 
        this.vy = (Math.random() - 0.5) * 0.5; 
        this.size = Math.random() * 2 + 0.5;
        this.baseAlpha = Math.random() * 0.5 + 0.2;
    }

    update() {
        // Base movement
        this.x += this.vx;
        this.y += this.vy;

        // --- KINETIC SCROLL EFFECT ---
        // Move particles based on scroll velocity.
        // The minus sign causes particles to move up when scrolling down (parallax effect)
        this.y -= scrollVelocity * 0.2; 
        // console.log("update")

        // Horizontal bounce
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;

        // Vertical Wrapping (Infinite Loop)
        // If the particle goes out above, it reappears below and vice versa
        if (this.y < 0) {
            this.y = canvas.height;
            this.x = Math.random() * canvas.width; // Change X position for variety
        }
        if (this.y > canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.fillStyle = `rgba(187, 41, 255, ${this.baseAlpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    for(let i=0; i<particleCount; i++) {
        particles.push(new Particle());
    }
}

/* --- MOUSE INTERACTION SETUP --- */
let mouse = { x: null, y: null, radius: 150 }; // Slightly larger connection radius

let isTouchInteraction = false;

function isTouchDevice() {
    return (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0));
}

window.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    mouse.x = (event.clientX - rect.left) * scaleX;
    mouse.y = (event.clientY - rect.top) * scaleY;
});

// Stop drawing lines when mouse leaves the window
window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
});

let maxV = 0.5

touchDevice = isTouchDevice()

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Scroll velocity damping (Friction)
    // At each frame, velocity gradually returns to 0
    if(Math.abs(scrollVelocity) < maxV) {
        scrollVelocity = maxV * Math.sign(scrollVelocity);
    }
    else if (Math.abs(scrollVelocity) > maxV*1.001) {
        scrollVelocity *= 0.9; 
    }

    particles.forEach((p, index) => {
        p.update();
        p.draw();
        // --- 1. POINT-MOUSE CONNECTIONS (NEW) ---
        if (mouse.x != null && !touchDevice) {
            let dx = p.x - mouse.x;
            let dy = p.y - mouse.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {
                ctx.beginPath();
                // Opacity calculation: the closer the point, the stronger the line
                // Using a slightly brighter color (white/purple mix) for cursor interaction
                let opacity = 1 - (distance / mouse.radius); 
                ctx.strokeStyle = `rgba(187, 41, 255, ${Math.min(0.1, opacity)})`; 
                ctx.lineWidth = 1; // Slightly thicker line for mouse connections
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
        }

        // --- 2. NEURAL CONNECTIONS (BETWEEN POINTS) ---
        for (let j = index; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const distance = Math.sqrt(dx*dx + dy*dy);
            
            if (distance < 150) {
                ctx.beginPath();
                // Line opacity depends on distance
                ctx.strokeStyle = `rgba(187, 41, 255, ${0.15 - distance/1000})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        }
    });
    requestAnimationFrame(animate);
}

initParticles();
animate();

window.addEventListener('beforeprint', function() {
    printPDF();
});

window.addEventListener('keydown', function(e) {
    // Intercept CTRL+P (Windows/Linux) or CMD+P (Mac)
    if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault(); // Block standard printing
        printPDF()
    }
});
let isPrinting = false;
function printPDF() {
    if (isPrinting) return; // Avoid double launch
    isPrinting = true;
    
    const url = `cv_${currentLang}.pdf`;
    console.log(`> Initiating print sequence for: ${url}...`);

    const iframe = document.createElement('iframe');
    iframe.style.cssText = 'position:fixed; right:0; bottom:0; width:0; height:0; border:0;';
    iframe.src = url;
    
    document.body.appendChild(iframe);
    
    iframe.onload = function() {
        try {
            iframe.contentWindow.focus();
            iframe.contentWindow.print();
        } catch (e) {
            window.open(url, '_blank');
        }
        
        isPrinting = false; // Reset flag
    };
}