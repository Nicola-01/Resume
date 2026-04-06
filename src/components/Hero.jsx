import React, { useState, useEffect } from 'react';
import { useTranslation } from '../TranslationContext';

const Hero = () => {
    const { t, getRoles } = useTranslation();
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const roles = getRoles();
    const currentRole = roles[Math.min(roleIndex, roles.length - 1)] || "";

    const [scale, setScale] = useState(1);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = currentRole === "Problem Creator" ? 50 : 2000;
            setTimeout(() => setIsDeleting(true), typeSpeed);
            return;
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
            return;
        }

        const timeout = setTimeout(() => {
            setCharIndex(prev => prev + (isDeleting ? -1 : 1));
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, currentRole, roles.length]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = 300;
            const offset = 50;
            const progress = Math.min(Math.max((scrollY - offset) / (maxScroll - offset), 0), 1);
            
            // Simplified scroll morph effect via CSS
            const ease = 1 - Math.pow(1 - progress, 3);
            const startScale = 1;
            const endScale = 0.4;
            setScale(startScale + (endScale - startScale) * ease);
            setOpacity(1 - progress * 1.5); // Fade out the hero text as it scrolls
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="h-[80vh] flex flex-col justify-center items-start relative pt-20">
            <div className="relative">
                {/* Glow effect behind title */}
                <div className="absolute top-0 left-0 w-full h-full bg-primary/20 blur-[100px] -z-10 rounded-full" style={{ opacity: opacity }}></div>
                
                <h1 
                    className="text-5xl md:text-7xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#b542eb] to-[#bc94cf] origin-top-left mb-6"
                    style={{
                        transform: `scale(${scale})`,
                        opacity: opacity,
                        willChange: 'transform, opacity'
                    }}
                >
                    Nicola Busato
                </h1>
            </div>
            
            <p className="text-textMuted text-2xl mb-8 flex items-center">
                <span className="text-secondary mr-2">&lt; </span>
                <span>{currentRole.substring(0, charIndex)}</span>
                <span className="inline-block w-[10px] text-primary animate-pulse ml-1">|</span>
                <span className="text-secondary ml-2"> /&gt;</span>
            </p>

            <div className="mt-5 animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
                <a 
                    href="#contact" 
                    className="inline-block bg-primary/10 border border-primary text-primary px-6 py-3 rounded hover:bg-primary hover:text-black hover:shadow-[0_0_20px_#bb29ff] hover:scale-105 transition-all duration-300"
                >
                    {t('cta')}
                </a>
            </div>
            
            {/* Embedded styles for keyframe animations if needed, though tailwind can do it. Let's add simple fade in */}
            <style>{`
                @keyframes fadeInUp {
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    transform: translateY(20px);
                    animation: fadeInUp 0.8s forwards;
                }
            `}</style>
        </div>
    );
};

export default Hero;
