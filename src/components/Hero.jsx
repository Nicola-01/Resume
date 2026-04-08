import React, { useState, useEffect } from 'react';
import { useTranslation } from '../TranslationContext';
import { motion } from 'framer-motion';

const Hero = () => {
    const { t, getRoles } = useTranslation();
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const roles = getRoles();
    const currentRole = roles[Math.min(roleIndex, roles.length - 1)] || "";

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



    return (
        <div className="h-[80vh] flex flex-col justify-center items-start relative pt-20">
            <div className="relative min-h-[60px] md:min-h-[85px] mb-6 flex items-center">
                {/* Glow effect behind title - mapped to scroll via opacity later if needed, but for now static */}
                <div className="absolute top-0 left-0 w-full h-full blur-[100px] -z-10 rounded-full"></div>
                
                {/* Invisible placeholder to measure the exact coordinates for the Header's scroll-linked title */}
                <h1 
                    id="hero-title-placeholder"
                    className="text-4xl md:text-7xl font-bold uppercase tracking-widest opacity-0 m-0 pointer-events-none"
                >
                    Nicola Busato
                </h1>
            </div>
            
            <p className="text-textMuted text-xl md:text-2xl mb-8 flex items-center">
                <span className="text-secondary mr-2">&lt; </span>
                <span>{currentRole.substring(0, charIndex)}</span>
                <span className="inline-block w-[8px] md:w-[10px] text-primary animate-pulse ml-1">|</span>
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
