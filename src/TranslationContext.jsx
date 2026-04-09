import React, { createContext, useState, useContext } from 'react';

const translations = {
    en: {
        greeting: "Hello World, I am",
        roles: ["Cybersecurity Engineer", "Software Engineer", "Ethical Hacker", "Full Stack Developer", "Problem Solver"],
        cta: "Get In Touch",
        about_title: "About Me",
        about_desc: "Hi, I am a Computer Engineer specializing in Cybersecurity.\nWith a technical background ranging from low-level systems to modern web architectures, I combine a deep understanding of cybersecurity principles and DevOps practices with a keen interest in UI/UX design.\n\nThrough practical experiences such as the national CyberChallenge.IT program and my role as a Cyber Security Intern at Servintek S.r.l., I have learned how to analyze vulnerabilities to build stronger defenses, solidifying my skills in Ethical Hacking, Application Security, and WAF configuration.\n\nCurrently, I am focused on integrating security, automation, and development. My goal is to contribute to ambitious projects by delivering scalable, intrinsically secure ('secure by design') software solutions that offer an excellent user experience.",
        skills_title: "Tech Stack",
        view_on_github: "View on GitHub",

        // Skills categories
        skills_cat_languages: "Languages",
        skills_cat_web: "Web",
        skills_cat_frameworks: "Frameworks & Libraries",
        skills_cat_devops: "DevOps & Infrastructure",
        skills_cat_tools: "Tools & Methods",
        skills_cat_databases: "Databases",
        skills_cat_os: "Operating Systems",

        // Experience
        exp_title: "Work Experience",

        exp_reply_role: "Consultant, Full Stack Developer",
        exp_reply_company: "Cluster Reply Financial Services",
        exp_reply_location: "Padova, Italy",
        exp_reply_date: "Jan 2026 – Present",
        exp_reply_desc: "Development and consulting for Full Stack web applications in the banking and insurance sectors.",
        exp_reply_stack: "Microsoft Azure, .NET, React, AWS, Angular, Java Spring.",
        exp_reply_skills: "Agile Methodology, Teamwork, Cloud Fundamentals.",

        exp_servintek_role: "Cyber Security Intern",
        exp_servintek_company: "Servintek S.r.l.",
        exp_servintek_location: "Thiene, Italy",
        exp_servintek_date: "Mar 2025 – Jul 2025",
        exp_servintek_desc: "Analysis and implementation of Web Application Firewalls (WAF) using Citrix NetScaler. Creation of technical documentation and vendor support management.",
        exp_servintek_stack: "Citrix NetScaler (ADC), Proxmox VE.",

        exp_mirive_role: "Programmer (PCTO Internship)",
        exp_mirive_company: "Mirive",
        exp_mirive_location: "Thiene, Italy",
        exp_mirive_date: "Jun 2019 – Jul 2020",
        exp_mirive_desc: "Application development in C#.",

        // Projects
        projects_title: "Selected Projects",

        proj_finance_title: "Personal Finance Web App",
        proj_finance_subtitle: "demo.busato.dev",
        proj_finance_desc: "A comprehensive platform for personal finance management with transaction tracking, spending analysis, and real-time dashboards. Development assisted by AI (Gemini 1.5 Pro, Claude 3.5).",
        proj_finance_details: [
            "On-premise hosting (HomeLab) with CI/CD via GitHub Actions",
            "Encrypted backups on Cloudflare R2, local .env management",
            "Premium UI with interactive data visualizations (Sankey, Pie Charts)"
        ],

        proj_homelab_title: "HomeLab & Server Hosting",
        proj_homelab_desc: "Home server running on Proxmox VE with VMs and LXC containers, powering personal cloud services and infrastructure.",
        proj_homelab_details: [
            "Nginx Reverse Proxy (acting as WAF, leveraging Citrix NetScaler experience)",
            "Technitium DNS (Ad-blocker)",
            "Cloudflare Tunnel with GitHub SSO"
        ],

        proj_thesis_master_title: "Master's Thesis: LLM-Based Triaging",
        proj_thesis_master_desc: "Automation of Android vulnerability triaging post-fuzzing through LLMs and the MCP protocol.",
        proj_thesis_master_details: [
            "Integration with Ghidra and JadX for binary analysis",
            "Custom MCP protocol implementation for LLM orchestration"
        ],

        proj_exo_title: "Bachelor's Thesis: GUI for Robotic Exoskeleton",
        proj_exo_desc: "Development of a graphical interface for controlling 'Alice', a robotic assistive exoskeleton. Multi-user management and data logging for rehabilitation staff.",

        proj_lupus_title: "LupusInFabula",
        proj_lupus_subtitle: "lupus.busato.dev",
        proj_lupus_desc: "Web application supporting Game Masters in managing the social deduction game.",
        proj_lupus_details: [
            "REST API architecture & Docker infrastructure",
            "Servlet-based authentication system",
            "UI/UX design"
        ],

        proj_camerapaw_title: "CameraPaw (Android)",
        proj_camerapaw_desc: "Advanced camera application with smart zoom lens switching, contextual QR scanning, tap-to-focus, and computational photography modes (HDR, Bokeh, Night).",
        proj_camerapaw_details: [
            "Core camera logic with CameraX APIs",
            "UI design and interaction patterns"
        ],

        proj_portfolio_title: "Portfolio Website",
        proj_portfolio_subtitle: "nicola.busato.dev",
        proj_portfolio_desc: "Interactive and responsive digital CV with animated particle background, bilingual support (IT/EN), and scroll-linked title animation.",

        // Education
        edu_title: "Education & Theses",
        edu_cert_label: "Certificate",
        edu_master_title: "Master's Degree in Cybersecurity",
        edu_master_date: "Sep 2023 - Dec 2025",
        edu_master_uni: "University of Padua",
        edu_master_desc: "Grade: 110/110 cum laude. Focus on Mobile Security, Ethical Hacking, Machine Learning, and Web Application Security.",
        edu_master_thesis_title: "LLM-Based Triaging of Vulnerabilities in Android Native Libraries",
        edu_master_thesis_paper: "Read Thesis",
        edu_master_thesis_github: "View on GitHub",

        edu_cyber_title: "CyberChallenge.IT",
        edu_cyber_date: "2024",
        edu_cyber_uni: "University of Padua",
        edu_cyber_desc: "National CTF training program: Cryptography, Web Security, Network Security, Software Security.",

        edu_bach_title: "Bachelor's Degree in Computer Engineering",
        edu_bach_date: "Sep 2020 - Jul 2023",
        edu_bach_uni: "University of Padua",
        edu_bach_desc: "Grade: 108/110. Focused on Java, C++, Python, ROS, and Android development.",
        edu_bach_thesis_title: "GUI for assistive robotic exoskeleton control: User profiling and data logging",
        edu_bach_thesis_paper: "Read Thesis",
        edu_bach_thesis_github: "View on GitHub",

        edu_high_title: "High School Diploma in Computer Science",
        edu_high_date: "Sep 2015 - Jul 2020",
        edu_high_uni: "ITT 'G. Chilesotti' Thiene",
        edu_high_desc: "C#, Java, Web Technologies, Multithreading. Final Project: Video streaming platform.",

        contact_title: "Get In Touch",
        contact_desc: "My inbox is always open. Whether you have a question, a project idea, or just want to discuss cybersecurity, I'll try my best to get back to you!"
    },
    it: {
        greeting: "Hello World, sono",
        roles: ["Cybersecurity Engineer", "Software Engineer", "Ethical Hacker", "Full Stack Developer", "Problem Solver"],
        cta: "Contattami",
        about_title: "Chi Sono",
        about_desc: "Buongiorno, sono un Ingegnere Informatico specializzato in Cybersecurity.\nCon un background tecnico che spazia dai sistemi a basso livello fino alle moderne architetture web, unisco le conoscenze dei principi di sicurezza informatica e del mondo DevOps ad un interesse per l'UI/UX design.\n\nGrazie a esperienze pratiche come il programma nazionale CyberChallenge.IT e il lavoro sul campo come Cyber Security Intern presso Servintek S.r.l., ho imparato ad analizzare le vulnerabilità per costruire difese migliori, consolidando le mie competenze in Ethical Hacking, Application Security e configurazione WAF.\n\nAttualmente mi dedico a integrare sicurezza, automazione e sviluppo. Il mio obiettivo è contribuire a progetti ambiziosi, realizzando soluzioni software scalabili, intrinsecamente sicure ('secure by design') e capaci di offrire un'esperienza utente eccellente.",
        skills_title: "Stack Tecnologico",
        view_on_github: "Vedi su GitHub",

        // Skills categories
        skills_cat_languages: "Linguaggi",
        skills_cat_web: "Web",
        skills_cat_frameworks: "Frameworks & Librerie",
        skills_cat_devops: "DevOps & Infrastruttura",
        skills_cat_tools: "Strumenti & Metodi",
        skills_cat_databases: "Database",
        skills_cat_os: "Sistemi Operativi",

        // Experience
        exp_title: "Esperienza Professionale",

        exp_reply_role: "Consultant, Full Stack Developer",
        exp_reply_company: "Cluster Reply Financial Services",
        exp_reply_location: "Padova, Italia",
        exp_reply_date: "Gen 2026 – Presente",
        exp_reply_desc: "Sviluppo e consulenza per applicazioni web Full Stack in settori bancario e assicurativo.",
        exp_reply_stack: "Microsoft Azure, .NET, React, AWS, Angular, Java Spring.",
        exp_reply_skills: "Metodologia Agile, Team work, Cloud fundamentals.",

        exp_servintek_role: "Stagista Cyber Security",
        exp_servintek_company: "Servintek S.r.l.",
        exp_servintek_location: "Thiene, Italia",
        exp_servintek_date: "Mar 2025 – Lug 2025",
        exp_servintek_desc: "Analisi e implementazione di Web Application Firewall (WAF) tramite Citrix NetScaler. Creazione documentazione tecnica e gestione assistenza fornitori.",
        exp_servintek_stack: "Citrix NetScaler (ADC), Proxmox VE.",

        exp_mirive_role: "Programmatore (PCTO)",
        exp_mirive_company: "Mirive",
        exp_mirive_location: "Thiene, Italia",
        exp_mirive_date: "Giu 2019 – Lug 2020",
        exp_mirive_desc: "Sviluppo applicazioni in C#.",

        // Projects
        projects_title: "Progetti Selezionati",

        proj_finance_title: "Web App Gestione Finanze Personali",
        proj_finance_subtitle: "demo.busato.dev",
        proj_finance_desc: "Piattaforma completa per la gestione delle finanze personali, con tracciamento transazioni, analisi spese e dashboard in tempo reale. Sviluppo assistito da AI (Gemini 1.5 Pro, Claude 3.5).",
        proj_finance_details: [
            "Hosting on-premise (HomeLab) con CI/CD via GitHub Actions",
            "Backup crittografati su Cloudflare R2, gestione .env locale",
            "UI premium con visualizzazioni dati interattive (Sankey, Pie Charts)"
        ],

        proj_homelab_title: "HomeLab & Self-Hosting",
        proj_homelab_desc: "Server domestico su Proxmox VE con VM e LXC containers per servizi cloud personali e infrastruttura.",
        proj_homelab_details: [
            "Nginx Reverse Proxy (in veste di WAF, sfruttando esperienza Citrix NetScaler)",
            "Technitium DNS (Ad-blocker)",
            "Cloudflare Tunnel con SSO GitHub"
        ],

        proj_thesis_master_title: "Tesi Magistrale: LLM-Based Triaging",
        proj_thesis_master_desc: "Automazione del triaging di vulnerabilità Android post-fuzzing tramite LLM e protocollo MCP.",
        proj_thesis_master_details: [
            "Integrazione con Ghidra e JadX per analisi dei binari",
            "Implementazione personalizzata del protocollo MCP per orchestrazione LLM"
        ],

        proj_exo_title: "Tesi Triennale: GUI per Esoscheletro Robotico",
        proj_exo_desc: "Sviluppo di un'interfaccia grafica per controllare 'Alice', un esoscheletro assistivo robotico. Gestione multi-utente e logging dati per il personale di riabilitazione.",

        proj_lupus_title: "LupusInFabula",
        proj_lupus_subtitle: "lupus.busato.dev",
        proj_lupus_desc: "Applicazione web per supportare il Game Master nel noto gioco di deduzione sociale.",
        proj_lupus_details: [
            "Architettura REST API & infrastruttura Docker",
            "Sistema di autenticazione basato su Servlet",
            "Progettazione UI/UX"
        ],

        proj_camerapaw_title: "CameraPaw (Android)",
        proj_camerapaw_desc: "App fotocamera avanzata con cambio obiettivo zoom intelligente, lettura QR contestuale, tap-to-focus e modalità fotografiche computazionali (HDR, Bokeh, Notte).",
        proj_camerapaw_details: [
            "Core camera logic con CameraX API",
            "Design UI e pattern di interazione"
        ],

        proj_portfolio_title: "Sito Web Portfolio",
        proj_portfolio_subtitle: "nicola.busato.dev",
        proj_portfolio_desc: "CV digitale interattivo e responsive con sfondo a particelle animate, supporto bilingue (IT/EN) e animazione titolo collegata allo scroll.",

        // Education
        edu_title: "Studi & Tesi",
        edu_cert_label: "Certificato",
        edu_master_title: "Laurea Magistrale in Cybersecurity",
        edu_master_date: "Set 2023 - Dic 2025",
        edu_master_uni: "Università degli Studi di Padova",
        edu_master_desc: "Voto: 110/110 e Lode. Focus su Mobile Security, Ethical Hacking, Machine Learning e Sicurezza Web.",
        edu_master_thesis_title: "LLM-Based Triaging of Vulnerabilities in Android Native Libraries",
        edu_master_thesis_paper: "Leggi Tesi",
        edu_master_thesis_github: "Vedi su GitHub",

        edu_cyber_title: "CyberChallenge.IT",
        edu_cyber_date: "2024",
        edu_cyber_uni: "Università degli Studi di Padova",
        edu_cyber_desc: "Programma nazionale di formazione CTF: Crittografia, Web Security, Network Security, Software Security.",

        edu_bach_title: "Laurea Triennale in Ingegneria Informatica",
        edu_bach_date: "Set 2020 - Lug 2023",
        edu_bach_uni: "Università degli Studi di Padova",
        edu_bach_desc: "Voto: 108/110. Focalizzato su Java, C++, Python, ROS e sviluppo Android.",
        edu_bach_thesis_title: "Sviluppo di una GUI per il controllo di un esoscheletro assistivo per il cammino: Profilazione utente e log dei dati",
        edu_bach_thesis_paper: "Leggi Tesi",
        edu_bach_thesis_github: "Vedi su GitHub",

        edu_high_title: "Diploma Informatico",
        edu_high_date: "Set 2015 - Lug 2020",
        edu_high_uni: "ITT 'G. Chilesotti' Thiene",
        edu_high_desc: "C#, Java, Tecnologie Web, Multithreading. Progetto Finale: Piattaforma di Video Streaming.",

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
