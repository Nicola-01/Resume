import React from 'react';
import { useTranslation } from '../TranslationContext';

const CodeIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
);

const GlobeIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
);

const FrameworkIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
);

const CloudIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
);

const WrenchIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);

const DatabaseIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
);

const DesktopIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);

const Skills = () => {
    const { t } = useTranslation();

    const categories = [
        {
            labelKey: "skills_cat_languages",
            icon: <CodeIcon />,
            skills: ["C", "C++", "C#", "Java", "Python", "JavaScript", "TypeScript", "PHP", "SQL", "Kotlin"],
            color: "primary"
        },
        {
            labelKey: "skills_cat_web",
            icon: <GlobeIcon />,
            skills: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
            color: "secondary"
        },
        {
            labelKey: "skills_cat_frameworks",
            icon: <FrameworkIcon />,
            skills: ["React", "Angular", "Spring", ".NET", "ROS", "Android SDK"],
            color: "primary"
        },
        {
            labelKey: "skills_cat_devops",
            icon: <CloudIcon />,
            skills: ["Docker", "Docker Compose", "GitHub Actions", "Nginx", "Proxmox VE", "Azure", "AWS", "Cloudflare"],
            color: "secondary"
        },
        {
            labelKey: "skills_cat_tools",
            icon: <WrenchIcon />,
            skills: ["OOP", "Multithreading", "Git", "REST API", "Agile Methodology"],
            color: "primary"
        },
        {
            labelKey: "skills_cat_databases",
            icon: <DatabaseIcon />,
            skills: ["MySQL", "PostgreSQL"],
            color: "secondary"
        },
        {
            labelKey: "skills_cat_os",
            icon: <DesktopIcon />,
            skills: ["Windows", "Linux (Ubuntu)", "Android"],
            color: "primary"
        }
    ];

    return (
        <section id="skills" className="py-12 md:py-20 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
            <h2 className="text-primary border-l-4 border-primary pl-4 uppercase tracking-widest text-xl md:text-2xl mb-8">
                {t('skills_title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {categories.map((cat, catIdx) => {
                    const isPrimary = cat.color === 'primary';
                    return (
                        <div
                            key={catIdx}
                            className="bg-cardBg/60 border border-white/10 rounded-xl p-5 backdrop-blur-sm relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
                        >
                            {/* Subtle corner glow */}
                            <div className={`absolute top-0 right-0 w-32 h-32 ${isPrimary ? 'bg-primary/5' : 'bg-secondary/5'} rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 group-hover:opacity-150 transition-opacity`}></div>

                            {/* Category header */}
                            <div className={`flex items-center gap-2 mb-4 ${isPrimary ? 'text-primary' : 'text-secondary'}`}>
                                {cat.icon}
                                <h3 className="font-semibold uppercase tracking-wider text-sm">
                                    {t(cat.labelKey)}
                                </h3>
                            </div>

                            {/* Skill badges */}
                            <div className="flex flex-wrap gap-2 relative z-10">
                                {cat.skills.map((skill, skillIdx) => (
                                    <span
                                        key={skillIdx}
                                        className={`text-xs font-mono px-3 py-1.5 rounded-md transition-all duration-300 cursor-default
                                            ${isPrimary
                                                ? 'bg-primary/5 border border-primary/30 text-white hover:bg-primary hover:text-black hover:shadow-[0_0_15px_#bb29ff] hover:scale-105'
                                                : 'bg-secondary/5 border border-secondary/30 text-white hover:bg-secondary hover:text-white hover:shadow-[0_0_15px_#5e17eb] hover:scale-105'
                                            }`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
