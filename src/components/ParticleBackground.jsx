import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        
        let particles = [];
        let scrollY = window.scrollY;
        let lastScrollY = scrollY;
        let scrollVelocity = 0;
        const isTouchInteraction = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));

        const CONFIG = {
            particlesPerSqCm: 0.4,
            connectionDistance: 150,
            mouseRadius: 150,
            particlesRadius: 150,
            friction: 0.9,
            maxVelocity: 0.5
        };

        let prevWidth = window.innerWidth;
        let prevHeight = window.innerHeight;

        let mouse = { x: null, y: null, radius: 150 };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 0.5;
                this.baseAlpha = Math.random() * 0.5 + 0.2;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.y -= scrollVelocity * 0.2;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0) {
                    this.y = canvas.height;
                    this.x = Math.random() * canvas.width;
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

        const calculateTargetCount = () => {
            const widthCm = (canvas.width / 96) * 2.54;
            const heightCm = (canvas.height / 96) * 2.54;
            const areaSqCm = widthCm * heightCm;
            return Math.floor(areaSqCm * CONFIG.particlesPerSqCm);
        };

        const manageParticles = (oldW, oldH) => {
            const targetCount = calculateTargetCount();
            const currentCount = particles.length;

            if (currentCount < targetCount) {
                const toAdd = targetCount - currentCount;
                const areaRight = Math.max(0, (canvas.width - oldW) * canvas.height);
                const areaBottom = Math.max(0, oldW * (canvas.height - oldH));
                const totalNewArea = areaRight + areaBottom;

                for (let i = 0; i < toAdd; i++) {
                    const p = new Particle();
                    if (totalNewArea <= 0) {
                        particles.push(p);
                        continue;
                    }
                    if (Math.random() * totalNewArea < areaRight) {
                        p.x = oldW + Math.random() * (canvas.width - oldW);
                        p.y = Math.random() * canvas.height;
                    } else {
                        p.x = Math.random() * oldW;
                        p.y = oldH + Math.random() * (canvas.height - oldH);
                    }
                    particles.push(p);
                }
            } else if (currentCount > targetCount) {
                const toRemove = currentCount - targetCount;
                particles.sort((a, b) => {
                    const scoreA = Math.min(canvas.width - a.x, canvas.height - a.y);
                    const scoreB = Math.min(canvas.width - b.x, canvas.height - b.y);
                    return scoreA - scoreB;
                });
                particles.splice(0, toRemove);
            }
        };

        const resize = () => {
            const oldW = prevWidth;
            const oldH = prevHeight;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            prevWidth = canvas.width;
            prevHeight = canvas.height;
            manageParticles(oldW, oldH);
        };

        const onScroll = () => {
            scrollY = window.scrollY;
            const delta = scrollY - lastScrollY;
            scrollVelocity += delta * 0.25;
            lastScrollY = scrollY;
        };

        const onMouseMove = (event) => {
            if (isTouchInteraction) return;
            const rect = canvas.getBoundingClientRect();
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
            mouse.x = (event.clientX - rect.left) * scaleX;
            mouse.y = (event.clientY - rect.top) * scaleY;
        };

        const onMouseOut = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseout', onMouseOut);

        resize(); // Initial resize to populate particles

        let animationFrameId;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if(Math.abs(scrollVelocity) < CONFIG.maxVelocity) {
                scrollVelocity = CONFIG.maxVelocity * Math.sign(scrollVelocity);
            } else if (Math.abs(scrollVelocity) > CONFIG.maxVelocity*1.001) {
                scrollVelocity *= CONFIG.friction;
            }

            particles.forEach((p, index) => {
                p.update();
                p.draw();

                if (mouse.x != null) {
                    let dx = p.x - mouse.x;
                    let dy = p.y - mouse.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        ctx.beginPath();
                        let opacity = Math.min(1 - (distance / mouse.radius), 0.1);
                        ctx.strokeStyle = `rgba(187, 41, 255, ${opacity})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }

                for (let j = index; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx*dx + dy*dy);
                    
                    if (distance < 150) {
                        ctx.beginPath();
                        const alpha = 0.15 - (distance / 1000);
                        ctx.strokeStyle = `rgba(187, 41, 255, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseout', onMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="canvas-bg"
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        ></canvas>
    );
};

export default ParticleBackground;
