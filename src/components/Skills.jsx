import React from 'react';
import { useTranslation } from '../TranslationContext';

const Skills = () => {
    const { t } = useTranslation();
    
    const skills = [
        "Java", "C/C++/C#", "Python", "JavaScript", "SQL", "Docker", "Git", "React / Vite", "TailwindCSS"
    ];

    return (
        <section id="skills" className="py-20 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
            <h2 className="text-primary border-l-4 border-primary pl-4 uppercase tracking-widest text-2xl mb-8">
                {t('skills_title')}
            </h2>
            <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                    <span 
                        key={index}
                        className="bg-primary/5 border border-primary/50 text-white px-5 py-2.5 rounded-lg transition-all duration-300 hover:bg-primary hover:text-black hover:shadow-[0_0_20px_#bb29ff] hover:scale-110 cursor-default"
                        style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Skills;
