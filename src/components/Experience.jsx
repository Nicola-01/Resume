import React from 'react';
import { useTranslation } from '../TranslationContext';

const BriefcaseIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0h5a2 2 0 012 2v6M3 8a2 2 0 012-2h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"></path></svg>
);

const MapPinIcon = () => (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);

const Experience = () => {
    const { t } = useTranslation();

    const experiences = [
        {
            roleKey: "exp_reply_role",
            companyKey: "exp_reply_company",
            locationKey: "exp_reply_location",
            dateKey: "exp_reply_date",
            descKey: "exp_reply_desc",
            stackKey: "exp_reply_stack",
            skillsKey: "exp_reply_skills",
            current: true
        },
        {
            roleKey: "exp_servintek_role",
            companyKey: "exp_servintek_company",
            locationKey: "exp_servintek_location",
            dateKey: "exp_servintek_date",
            descKey: "exp_servintek_desc",
            stackKey: "exp_servintek_stack"
        },
        {
            roleKey: "exp_mirive_role",
            companyKey: "exp_mirive_company",
            locationKey: "exp_mirive_location",
            dateKey: "exp_mirive_date",
            descKey: "exp_mirive_desc"
        }
    ];

    return (
        <section id="experience" className="py-20 animate-fade-in-up" style={{ animationDelay: '0.35s', opacity: 0, animationFillMode: 'forwards' }}>
            <h2 className="text-primary border-l-4 border-primary pl-4 uppercase tracking-widest text-2xl mb-8">
                {t('exp_title')}
            </h2>

            <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative group">
                        {/* Timeline Node */}
                        <div className={`absolute -left-[41px] md:-left-[49px] top-1.5 w-5 h-5 rounded-full bg-bgMain border-2 z-10 transition-all duration-300 ${
                            exp.current 
                                ? 'border-primary shadow-[0_0_10px_#bb29ff]' 
                                : 'border-secondary shadow-[0_0_8px_#5e17eb]'
                        }`}>
                            {exp.current && (
                                <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping"></span>
                            )}
                        </div>

                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                                    <BriefcaseIcon />
                                    {t(exp.roleKey)}
                                </h3>
                                <div className="text-secondary font-semibold flex items-center gap-1.5">
                                    {t(exp.companyKey)}
                                    <span className="text-textMuted mx-1">·</span>
                                    <span className="text-textMuted text-sm flex items-center gap-1">
                                        <MapPinIcon />
                                        {t(exp.locationKey)}
                                    </span>
                                </div>
                            </div>
                            <span className={`font-mono text-sm px-3 py-1 rounded-full whitespace-nowrap hidden md:inline-block mt-1 ${
                                exp.current 
                                    ? 'text-primary/90 bg-primary/10' 
                                    : 'text-primary/70 bg-primary/5'
                            }`}>
                                {t(exp.dateKey)}
                            </span>
                        </div>

                        <span className="text-primary/70 font-mono text-sm md:hidden mb-3 inline-block">
                            {t(exp.dateKey)}
                        </span>

                        <p className="text-textMuted leading-relaxed mb-4">{t(exp.descKey)}</p>

                        {/* Stack tags */}
                        {exp.stackKey && (
                            <div className="flex flex-wrap gap-2 mb-3">
                                {t(exp.stackKey).split(', ').map(tech => (
                                    <span key={tech} className="text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md">
                                        {tech.replace('.', '')}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Soft skills */}
                        {exp.skillsKey && (
                            <div className="flex flex-wrap gap-2">
                                {t(exp.skillsKey).split(', ').map(skill => (
                                    <span key={skill} className="text-xs font-mono text-secondary bg-secondary/10 border border-secondary/20 px-2.5 py-1 rounded-md">
                                        {skill.replace('.', '')}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
