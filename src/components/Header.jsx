import React, { useEffect, useState } from 'react';
import { useTranslation } from '../TranslationContext';
import { motion, useScroll, useTransform } from 'framer-motion';

const Header = () => {
    const { currentLang, toggleLang } = useTranslation();
    const { scrollY } = useScroll();
    const [startPos, setStartPos] = useState(300);

    useEffect(() => {
        const calculatePos = () => {
            const heroDummy = document.getElementById("hero-title-placeholder");
            const headerContainer = document.getElementById("header-title-wrapper");

            if (heroDummy && headerContainer) {
                const pRect = heroDummy.getBoundingClientRect();
                const hRect = headerContainer.getBoundingClientRect();
                // We want the text to drop down exactly pRect.top - hRect.top pixels when scroll is 0.
                setStartPos(pRect.top + window.scrollY - hRect.top);
            } else {
                setStartPos(window.innerHeight * 0.35); // fallback
            }
        };
        calculatePos();
        // Give fonts/layout a tiny bit of time to settle on initial load
        setTimeout(calculatePos, 100);
        window.addEventListener('resize', calculatePos);
        return () => window.removeEventListener('resize', calculatePos);
    }, []);

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        return scrollY.onChange((latest) => {
            setScrolled(latest > 50);
        });
    }, [scrollY]);

    // Map scrollY to y-offset
    const yTransform = useTransform(scrollY, [0, Math.max(startPos, 1)], [startPos, 0]);
    // Map scrollY to scale
    const scaleTransform = useTransform(scrollY, [0, Math.max(startPos, 1)], [window.innerWidth < 768 ? 1.8 : 3.6, 1]);

    return (
        <header className={`fixed top-0 w-full z-[100] transition-all duration-300 border-b ${scrolled ? 'backdrop-blur-xl bg-bgMain/70 py-3 shadow-lg shadow-primary/5 border-primary/20' : 'bg-transparent py-5 border-transparent'}`}>
            <div className="container mx-auto px-4 max-w-5xl flex justify-between items-center h-[40px]">
                <div id="header-title-wrapper" className="min-w-[200px] flex items-center">
                    <motion.div
                        style={{
                            y: yTransform,
                            scale: scaleTransform
                        }}
                        className="origin-left cursor-pointer inline-block"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <h1 className="text-xl font-bold uppercase whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#b542eb] to-[#bc94cf] m-0">
                            Nicola Busato
                        </h1>
                    </motion.div>
                </div>
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
