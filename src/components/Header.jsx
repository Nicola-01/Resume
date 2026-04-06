import React, { useEffect, useState } from 'react';
import { useTranslation } from '../TranslationContext';

const Header = () => {
    const { currentLang, toggleLang } = useTranslation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-primary/10 ${scrolled ? 'backdrop-blur-md bg-bgMain/60 py-4 shadow-lg shadow-primary/5' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-4 max-w-5xl flex justify-between items-center">
                <h1 className="text-xl font-bold uppercase whitespace-nowrap min-w-[200px] text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary transition-all">
                    {/* The logo morph logic could be handled here or inside Hero. Since we used scroll, let's keep it simple or implement the morph using Framer-motion/tailwind */}
                    Nicola Busato
                </h1>
                <button 
                    onClick={toggleLang}
                    className="bg-transparent border border-primary text-primary px-4 py-1.5 rounded transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-[0_0_15px_#bb29ff] font-mono uppercase text-sm"
                >
                    {currentLang === 'en' ? 'IT' : 'EN'}
                </button>
            </div>
        </header>
    );
};

export default Header;
