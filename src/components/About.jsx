import React from 'react';
import { useTranslation } from '../TranslationContext';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-12 md:py-20 animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
            <h2 className="text-primary border-l-4 border-primary pl-4 uppercase tracking-widest text-xl md:text-2xl mb-6">
                {t('about_title')}
            </h2>
            <div className="bg-cardBg/80 p-6 md:p-12 rounded-2xl border border-white/10 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
                {/* Subtle Glow inside the card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                
                <p className="text-textMuted max-w-4xl leading-relaxed text-lg relative z-10 whitespace-pre-wrap">
                    {t('about_desc')}
                </p>
            </div>
        </section>
    );
};

export default About;
