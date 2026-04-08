import React from 'react';
import { useTranslation } from '../TranslationContext';

const LinkIcon = () => (
    <svg className="w-4 h-4 mr-1.5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
);

const GitHubIcon = () => (
    <svg className="w-4 h-4 mr-1.5 inline-block" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
);

const ChevronIcon = () => (
    <svg className="w-3.5 h-3.5 text-primary/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
);

const CertificateIcon = () => (
    <svg className="w-3.5 h-3.5 mr-1.5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
);

const Education = () => {
    const { t } = useTranslation();

    const eduItems = [
        {
            title: t('edu_master_title'),
            date: t('edu_master_date'),
            uni: t('edu_master_uni'),
            desc: t('edu_master_desc'),
            certLink: "https://bestr.it/award/show/IyIaCrtHQh6vWZwESPm8aQ",
            thesis: {
                title: t('edu_master_thesis_title'),
                desc: t('proj_thesis_master_desc'),
                detailsKey: "proj_thesis_master_details",
                tags: ["Python", "LLM", "MCP", "Ghidra", "JadX"],
                paperLabel: t('edu_master_thesis_paper'),
                githubLabel: t('edu_master_thesis_github'),
                paperLink: "#",
                githubLink: "#"
            }
        },
        {
            title: t('edu_cyber_title'),
            date: t('edu_cyber_date'),
            uni: t('edu_cyber_uni'),
            desc: t('edu_cyber_desc'),
            certLink: "https://openbadges.bestr.it/public/assertions/v-Q5ZYHoQ3-4izyfb_6FFA",
            highlight: true
        },
        {
            title: t('edu_bach_title'),
            date: t('edu_bach_date'),
            uni: t('edu_bach_uni'),
            desc: t('edu_bach_desc'),
            certLink: "https://openbadges.bestr.it/public/assertions/nYbDgpaSRdqE5d7y3C1MVQ",
            thesis: {
                title: t('edu_bach_thesis_title'),
                desc: t('proj_exo_desc'),
                tags: ["ROS", "Qt", "C++", "Linux"],
                paperLabel: t('edu_bach_thesis_paper'),
                githubLabel: t('edu_bach_thesis_github'),
                paperLink: "#",
                githubLink: "https://github.com/nicola-busato/GUI_robotic_exoskeleton"
            }
        },
        {
            title: t('edu_high_title'),
            date: t('edu_high_date'),
            uni: t('edu_high_uni'),
            desc: t('edu_high_desc')
        }
    ];

    return (
        <section id="education" className="py-20 animate-fade-in-up" style={{ animationDelay: '0.45s', opacity: 0, animationFillMode: 'forwards' }}>
            <h2 className="text-primary border-l-4 border-primary pl-4 uppercase tracking-widest text-2xl mb-8">
                {t('edu_title')}
            </h2>
            
            <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
                {eduItems.map((item, index) => (
                    <div key={index} className="relative">
                        {/* Timeline Node */}
                        <div className={`absolute -left-[41px] md:-left-[49px] top-1.5 w-5 h-5 rounded-full bg-bgMain border-2 z-10 ${
                            item.highlight 
                                ? 'border-secondary shadow-[0_0_10px_#5e17eb]' 
                                : 'border-primary shadow-[0_0_10px_#bb29ff]'
                        }`}></div>
                        
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                            <h3 className="text-xl font-bold text-white mb-1 md:mb-0">{item.title}</h3>
                            <span className="text-primary/80 font-mono text-sm bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap hidden md:inline-block">
                                {item.date}
                            </span>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                            <div className="text-secondary font-semibold">{item.uni} <span className="text-primary/80 font-mono text-sm md:hidden ml-2">({item.date})</span></div>
                            {item.certLink && (
                                <a 
                                    href={item.certLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-flex items-center text-xs font-mono text-primary/80 hover:text-primary transition-colors bg-primary/10 py-1 px-2.5 rounded-full border border-primary/20"
                                >
                                    <CertificateIcon /> {t('edu_cert_label')}
                                </a>
                            )}
                        </div>
                        <p className="text-textMuted leading-relaxed mb-4">{item.desc}</p>
                        
                        {item.thesis && (
                            <div className="bg-cardBg/60 border border-white/5 p-5 rounded-xl backdrop-blur-sm relative overflow-hidden group">
                                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                <h4 className="text-white font-semibold mb-2">Thesis / Project</h4>
                                <p className="text-textMuted font-medium mb-3">{item.thesis.title}</p>
                                
                                {item.thesis.desc && (
                                    <p className="text-textMuted text-sm mb-4 leading-relaxed">
                                        {item.thesis.desc}
                                    </p>
                                )}

                                {item.thesis.detailsKey && Array.isArray(t(item.thesis.detailsKey)) && (
                                    <ul className="space-y-2 mb-4">
                                        {t(item.thesis.detailsKey).map((detail, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                                                <ChevronIcon />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {item.thesis.tags && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {item.thesis.tags.map(tag => (
                                            <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded text-primary bg-primary/10 border border-primary/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-4 mt-2">
                                    <a 
                                        href={item.thesis.paperLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-mono text-white/70 hover:text-primary transition-colors"
                                    >
                                        <LinkIcon /> {item.thesis.paperLabel}
                                    </a>
                                    <a 
                                        href={item.thesis.githubLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-mono text-white/70 hover:text-primary transition-colors"
                                    >
                                        <GitHubIcon /> {item.thesis.githubLabel}
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
