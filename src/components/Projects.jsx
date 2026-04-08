import React from 'react';
import { useTranslation } from '../TranslationContext';

const ExternalLinkIcon = () => (
    <svg className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors duration-300 transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
);

const ChevronIcon = () => (
    <svg className="w-3.5 h-3.5 text-primary/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
);

const GitHubIcon = () => (
    <svg className="w-4 h-4 mr-1.5 inline-block" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
);

const Projects = () => {
    const { t } = useTranslation();

    const projects = [
        {
            titleKey: "proj_finance_title",
            subtitleKey: "proj_finance_subtitle",
            descKey: "proj_finance_desc",
            detailsKey: "proj_finance_details",
            link: "https://demo.busato.dev",
            github: "https://github.com/Nicola-01/FinanceWebApp",
            tags: ["Java Spring", "React", "TypeScript", "PostgreSQL", "Nginx", "Docker", "Google Antigravity", "AI Agent"],
            accent: "primary"
        },
        {
            titleKey: "proj_homelab_title",
            descKey: "proj_homelab_desc",
            detailsKey: "proj_homelab_details",
            tags: ["Proxmox VE", "Docker", "Linux", "Nginx", "Cloudflare"],
            accent: "secondary"
        },
        {
            titleKey: "proj_lupus_title",
            subtitleKey: "proj_lupus_subtitle",
            descKey: "proj_lupus_desc",
            detailsKey: "proj_lupus_details",
            link: "https://lupus.busato.dev",
            github: "https://github.com/Nicola-01/LupusInFabula",
            tags: ["Java Servlet", "Maven", "PostgreSQL", "Docker"],
            accent: "primary"
        },
        {
            titleKey: "proj_camerapaw_title",
            descKey: "proj_camerapaw_desc",
            detailsKey: "proj_camerapaw_details",
            github: "https://github.com/Nicola-01/CameraPaw",
            tags: ["Kotlin", "Android SDK", "CameraX API"],
            accent: "secondary"
        }
        // ,
        // {
        //     titleKey: "proj_portfolio_title",
        //     subtitleKey: "proj_portfolio_subtitle",
        //     descKey: "proj_portfolio_desc",
        //     link: "https://nicola.busato.dev",
        //     tags: ["React", "Tailwind CSS", "Vite"],
        //     accent: "primary"
        // }
    ];

    return (
        <section id="projects" className="py-12 md:py-20 animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
            <h2 className="text-primary border-l-4 border-primary pl-4 uppercase tracking-widest text-xl md:text-2xl mb-8">
                {t('projects_title')}
            </h2>
            <div className="space-y-6">
                {projects.map((proj, idx) => {
                    const details = t(proj.detailsKey);
                    const hasDetails = Array.isArray(details);
                    const isPrimary = proj.accent === 'primary';

                    return (
                        <div
                            key={idx}
                            className={`group block bg-cardBg border border-white/10 rounded-2xl transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(187,41,255,0.1)] hover:-translate-y-0.5 relative overflow-hidden backdrop-blur-md`}
                        >
                            {/* Subtle gradient accent */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${isPrimary ? 'from-[rgba(187,41,255,0.06)]' : 'from-[rgba(94,23,235,0.06)]'} to-transparent opacity-60 z-0`}></div>

                            {/* Left accent bar */}
                            <div className={`absolute left-0 top-0 w-1 h-full ${isPrimary ? 'bg-gradient-to-b from-primary to-primary/20' : 'bg-gradient-to-b from-secondary to-secondary/20'} opacity-40 group-hover:opacity-80 transition-opacity duration-500`}></div>

                            <div className="relative z-10 p-5 md:p-8">
                                {/* Invisible Full Card Link */}
                                {proj.link && (
                                    <a 
                                        href={proj.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="absolute inset-0 z-20"
                                        aria-label={`View project details for ${t(proj.titleKey)}`}
                                    ></a>
                                )}

                                {/* Header row */}
                                <div className="flex flex-row items-center justify-between gap-4 mb-4 relative z-30 pointer-events-none">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white flex items-center">
                                            {t(proj.titleKey)}
                                        </h3>
                                        {proj.subtitleKey && (
                                            <span className="text-primary/60 font-mono text-sm mt-1 inline-block">
                                                {t(proj.subtitleKey)}
                                            </span>
                                        )}
                                    </div>
                                    {proj.link && (
                                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:shadow-[0_0_15px_rgba(187,41,255,0.2)] transition-all duration-300">
                                            <ExternalLinkIcon />
                                        </div>
                                    )}
                                </div>

                                {/* Description */}
                                <p className="text-textMuted text-sm md:text-base leading-relaxed mb-4">
                                    {t(proj.descKey)}
                                </p>

                                {/* Detail bullets */}
                                {hasDetails && (
                                    <ul className="space-y-2 mb-5">
                                        {details.map((detail, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                                                <ChevronIcon />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 relative z-30 text-white/50">
                                    {proj.tags.map(tag => (
                                        <span key={tag} className={`text-xs font-mono px-2.5 py-1 rounded-md ${isPrimary ? 'text-primary bg-primary/10 border border-primary/20' : 'text-secondary bg-secondary/10 border border-secondary/20'}`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* GitHub Link */}
                                {proj.github && (
                                    <div className="mt-5 relative z-30">
                                        <a
                                            href={proj.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-mono text-white/70 hover:text-white transition-colors duration-300"
                                        >
                                            <GitHubIcon /> {t('view_on_github')}
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* Animated Bottom Glow Line */}
                            <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent ${isPrimary ? 'via-primary' : 'via-secondary'} to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out`}></div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
