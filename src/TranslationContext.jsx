import React, { createContext, useState, useContext } from 'react';

const translations = {
    en: {
        greeting: "Hello World, I am",
        roles: ["Cybersecurity Student", "Software Engineer", "Ethical Hacker", "Full Stack Developer", "Problem Solver"],
        cta: "Get In Touch",
        about_title: "About Me",
        about_desc: "I am a Computer Engineer holding a Master's degree in Cybersecurity from the University of Padua, graduating in December 2025 with 110/110 cum laude.\n\nWith a strong academic background ranging from low-level systems programming (C/C++) to modern web architectures, my core focus is building secure, efficient, and accessible software.\n\nAs a participant in the national CyberChallenge.IT program and leveraging my experience as a Cyber Security Intern at Servintek S.r.l., I've honed my skills in Ethical Hacking, application security, and WAF implementation.",
        skills_title: "Tech Stack",
        projects_title: "Selected Projects",
        
        proj_finance_title: "Personal Finance App",
        proj_finance_desc: "A comprehensive Personal Finance web application designed for tracking transactions and analyzing spending habits. Features an intricate dashboard offering real-time insights and a premium user interface.",
        
        proj_lupus_title: "Lupus In Fabula (Game Master UI)",
        proj_lupus_desc: "A web application supporting Game Masters in managing the 'Lupus in Fabula' social deduction game. Features secure user authentication, seamless multi-role management over a Dockerized PostgreSQL backend, and a responsive Java Servlet architecture.",
        
        proj_homelab_title: "HomeLab Infrastructure",
        proj_homelab_desc: "My personal self-hosting infrastructure powered by Proxmox VE. Managing a suite of Docker containers and VMs for networking, reverse proxy routing (acting as a WAF, similar to Citrix NetScaler), and deploying personal cloud services.",
        
        proj_exo_title: "GUI for Robotic Exoskeleton",
        proj_exo_desc: "Triennial Thesis project: Designed and developed a Qt/C++ graphical user interface for controlling 'Alice', a robotic assistive exoskeleton using ROS. Implemented user logging, profiling, and parameter auto-configuration for physical rehabilitation.",
        
        proj_camerapaw_title: "CameraPaw (Android)",
        proj_camerapaw_desc: "An Android application utilizing CameraX APIs, featuring automatic smart lens switching based on zoom, contextual QR scanning, tap-to-focus, and specialized computational photography modes (HDR, Bokeh, Night Mode).",

        edu_title: "Education",
        edu_master_title: "Master's Degree in Cybersecurity",
        edu_master_date: "Sep 2023 - Dec 2025",
        edu_master_uni: "University of Padua",
        edu_master_desc: "Grade: 110/110 cum laude. Focus on Mobile Security, Ethical Hacking, Machine Learning, and Web Application Security.",
        edu_master_thesis_title: "LLM-Based Triaging of Vulnerabilities in Android Native Libraries",
        edu_master_thesis_paper: "Read Paper",
        edu_master_thesis_github: "View on GitHub",
        
        edu_bach_title: "Bachelor's Degree in Computer Engineering",
        edu_bach_date: "Sep 2020 - Jul 2023",
        edu_bach_uni: "University of Padua",
        edu_bach_desc: "Grade: 108/110. Focused on low-level systems programming, algorithms, databases, and robotics.",
        edu_bach_thesis_title: "GUI for assistive robotic exoskeleton control: User profiling and data logging",
        edu_bach_thesis_paper: "Read Thesis",
        edu_bach_thesis_github: "View on GitHub",

        edu_high_title: "High School Diploma in Computer Science",
        edu_high_date: "Sep 2015 - Jul 2020",
        edu_high_uni: "ITT 'G. Chilesotti' Thiene",
        edu_high_desc: "Programming, SQL, Web Technologies. Final Project: Video streaming platform.",

        contact_title: "Get In Touch",
        contact_desc: "My inbox is always open. Whether you have a question, a project idea, or just want to discuss cybersecurity, I'll try my best to get back to you!"
    },
    it: {
        greeting: "Hello World, sono",
        roles: ["Studente in Cybersecurity", "Ingegnere del Software", "Ethical Hacker", "Sviluppatore Full Stack", "Problem Solver"],
        cta: "Contattami",
        about_title: "Chi Sono",
        about_desc: "Sono un Ingegnere Informatico laureato alla Magistrale in Cybersecurity presso l'Università degli Studi di Padova (Dicembre 2025) con votazione 110/110 e Lode.\n\nCon un solido background accademico che spazia dalla programmazione di sistemi a basso livello (C/C++) alle moderne architetture web, mi concentro sulla creazione di software sicuro, efficiente e accessibile.\n\nPartecipando al programma nazionale CyberChallenge.IT e sfruttando la mia esperienza come Tirocinante in Cyber Security presso Servintek S.r.l., ho affinato le mie competenze in Ethical Hacking, sicurezza applicativa e configurazione WAF.",
        skills_title: "Stack Tecnologico",
        projects_title: "Progetti Selezionati",
        
        proj_finance_title: "Personal Finance App",
        proj_finance_desc: "Un'applicazione web completa per la gestione delle finanze personali, progettata per tracciare transazioni e analizzare le abitudini di spesa. Presenta una dashboard ricercata per offrire report in tempo reale e un'interfaccia utente premium.",
        
        proj_lupus_title: "Lupus In Fabula (Game Master UI)",
        proj_lupus_desc: "Applicazione web per supportare il Game Master nel noto gioco di deduzione sociale. Include autenticazione sicura, gestione delle abilità dei ruoli in tempo reale, ed un'infrastruttura a container Docker con PostgreSQL e servlet Java.",
        
        proj_homelab_title: "HomeLab & Self-Hosting",
        proj_homelab_desc: "Infrastruttura personale ospitata in casa gestita tramite Proxmox VE. Amministro container Docker e macchine virtuali per servizi cloud personali, domini e reverse proxy (in veste di WAF, sfruttando l'esperienza pregressa su Citrix NetScaler).",
        
        proj_exo_title: "GUI per Esoscheletro Robotico",
        proj_exo_desc: "Progetto per la Tesi di Laurea Triennale: sviluppo di un'interfaccia grafica (Qt/C++) per governare 'Alice', un esoscheletro assistivo controllato via ROS. Supporto al personale di riabilitazione tramite profilazione dell'utente e regolazioni dinamiche dei parametri.",
        
        proj_camerapaw_title: "CameraPaw (Android)",
        proj_camerapaw_desc: "App nativa Android basata su CameraX API, con cambio obiettivo ultra-grandangolare dinamico, torcia, tap-to-focus, lettura del contesto QR ed abilitazione di algoritmi hardware avanzati (HDR, Notte, Ritratto).",

        edu_title: "Studi & Tesi",
        edu_master_title: "Laurea Magistrale in Cybersecurity",
        edu_master_date: "Set 2023 - Dic 2025",
        edu_master_uni: "Università degli Studi di Padova",
        edu_master_desc: "Voto: 110/110 e Lode. Focus su Mobile Security, Ethical Hacking, Machine Learning e Sicurezza Web.",
        edu_master_thesis_title: "LLM-Based Triaging of Vulnerabilities in Android Native Libraries",
        edu_master_thesis_paper: "Leggi Paper",
        edu_master_thesis_github: "Vedi su GitHub",
        
        edu_bach_title: "Laurea Triennale in Ingegneria Informatica",
        edu_bach_date: "Set 2020 - Lug 2023",
        edu_bach_uni: "Università degli Studi di Padova",
        edu_bach_desc: "Voto: 108/110. Focalizzato su sistemi a basso livello, algoritmi, basi di dati e robotica.",
        edu_bach_thesis_title: "Sviluppo di una GUI per il controllo di un esoscheletro assistivo per il cammino: Profilazione utente e log dei dati",
        edu_bach_thesis_paper: "Leggi Tesi",
        edu_bach_thesis_github: "Vedi su GitHub",

        edu_high_title: "Diploma Informatico",
        edu_high_date: "Set 2015 - Lug 2020",
        edu_high_uni: "ITT 'G. Chilesotti' Thiene",
        edu_high_desc: "Programmazione, SQL, Tecnologie Web. Progetto Finale: Piattaforma di Video Streaming.",

        contact_title: "Contatti",
        contact_desc: "La mia casella di posta è sempre aperta. Che tu abbia una domanda, un'opportunità lavorativa o voglia semplicemente discutere di sicurezza informatica, farò del mio meglio per risponderti!"
    }
};

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
    const browserLang = typeof navigator !== 'undefined' && navigator.language.startsWith('it') ? 'it' : 'en';
    const [currentLang, setCurrentLang] = useState(browserLang);

    const toggleLang = () => {
        setCurrentLang(prev => prev === 'en' ? 'it' : 'en');
    };

    const t = (key) => translations[currentLang][key] || key;
    const getRoles = () => translations[currentLang].roles;

    return (
        <TranslationContext.Provider value={{ currentLang, toggleLang, t, getRoles }}>
            {children}
        </TranslationContext.Provider>
    );
};

export const useTranslation = () => useContext(TranslationContext);
