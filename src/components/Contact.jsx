import React from 'react';
import { useTranslation } from '../TranslationContext';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-20 animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
            <h2 className="text-primary border-l-4 border-primary pl-4 uppercase tracking-widest text-2xl mb-6">
                {t('contact_title')}
            </h2>
            <div className="bg-cardBg p-8 md:p-12 rounded-xl border border-white/10 backdrop-blur-sm shadow-xl w-full">
                <p className="text-textMuted text-lg mb-8 leading-relaxed w-full">
                    {t('contact_desc')}
                </p>
                <a 
                    href="mailto:email@example.com" 
                    className="inline-block bg-primary/10 border border-primary text-primary px-8 py-3 rounded hover:bg-primary hover:text-black hover:shadow-[0_0_20px_#bb29ff] transition-all duration-300 font-mono"
                >
                    email@example.com
                </a>
            </div>
        </section>
    );
};

export default Contact;
