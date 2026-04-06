import React from 'react';
import { useTranslation } from '../TranslationContext';

const ExternalLinkIcon = () => (
    <svg className="w-5 h-5 ml-2 inline-block opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
);

const Projects = () => {
    const { t } = useTranslation();

    const projects = [
        {
            titleKey: "proj_finance_title",
            descKey: "proj_finance_desc",
            link: "https://demo.busato.dev",
            tags: ["React", "TypeScript", "Tailwind", "Spring Boot", "Cron"],
            layout: "md:col-span-2 md:row-span-2", // Large feature project
            gradient: "from-[rgba(187,41,255,0.1)] to-transparent"
        },
        {
            titleKey: "proj_lupus_title",
            descKey: "proj_lupus_desc",
            link: "https://lupus.busato.dev",
            tags: ["Java", "Docker", "PostgreSQL", "HTML/CSS"],
            layout: "md:col-span-1 md:row-span-2", // Tall feature project
            gradient: "from-[rgba(94,23,235,0.15)] to-transparent"
        },
        {
            titleKey: "proj_homelab_title",
            descKey: "proj_homelab_desc",
            tags: ["Proxmox VE", "Docker", "Linux", "Networking", "WAF"],
            layout: "md:col-span-1", // Normal
            gradient: "from-transparent to-[rgba(187,41,255,0.05)]"
        },
        {
            titleKey: "proj_exo_title",
            descKey: "proj_exo_desc",
            tags: ["ROS", "C++", "Qt", "Linux"],
            layout: "md:col-span-2", // Wide feature
            gradient: "from-transparent to-[rgba(94,23,235,0.05)]"
        },
        {
            titleKey: "proj_camerapaw_title",
            descKey: "proj_camerapaw_desc",
            tags: ["Kotlin", "Android SDK", "CameraX API"],
            layout: "md:col-span-1", // Normal
            gradient: "from-[rgba(255,255,255,0.02)] to-transparent"
        }
    ];

    return (
        <section id="projects" className="py-20 animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
            <h2 className="text-primary border-l-4 border-primary pl-4 uppercase tracking-widest text-2xl mb-8">
                {t('projects_title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
                {projects.map((proj, idx) => (
                    <a
                        key={idx}
                        href={proj.link ? proj.link : undefined}
                        target={proj.link ? "_blank" : undefined}
                        rel={proj.link ? "noopener noreferrer" : undefined}
                        className={`group bg-cardBg border border-white/10 p-8 rounded-2xl transition-all duration-500 hover:border-primary hover:shadow-[0_0_30px_rgba(187,41,255,0.15)] hover:-translate-y-1 relative overflow-hidden backdrop-blur-md flex flex-col justify-between ${proj.layout} ${proj.link ? 'cursor-pointer' : 'cursor-default'}`}
                    >
                        {/* Background subtle gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${proj.gradient} opacity-50 z-0`}></div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center">
                                    {t(proj.titleKey)}
                                    {proj.link && <ExternalLinkIcon />}
                                </h3>
                                <p className="text-textMuted text-sm md:text-base leading-relaxed mb-6">
                                    {t(proj.descKey)}
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {proj.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Animated Bottom Glow Line */}
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;
