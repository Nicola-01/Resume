import React from 'react';
import { useTranslation } from '../TranslationContext';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-12 md:py-20 animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
            <h2 className="text-primary border-l-4 border-primary pl-4 uppercase tracking-widest text-xl md:text-2xl mb-6">
                {t('contact_title')}
            </h2>
            <div className="bg-cardBg p-6 md:p-12 rounded-xl border border-white/10 backdrop-blur-sm shadow-xl w-full">
                <p className="text-textMuted text-lg mb-8 leading-relaxed w-full">
                    {t('contact_desc')}
                </p>
                <a className="inline-block bg-primary/10 border border-primary text-primary px-4 md:px-8 py-3 rounded hover:bg-primary hover:text-black hover:shadow-[0_0_20px_#bb29ff] transition-all duration-300 font-mono text-[10px] sm:text-sm md:text-base break-all"
                href="mailto:&#110;&#105;&#99;&#111;&#108;&#97;&#46;&#98;&#117;&#115;&#97;&#116;&#111;&#46;&#50;&#48;&#48;&#49;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">
                    &#110;&#105;&#99;&#111;&#108;&#97;&#46;&#98;&#117;&#115;&#97;&#116;&#111;&#46;&#50;&#48;&#48;&#49;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
                </a>
            </div>
        </section>
    );
};

export default Contact;
