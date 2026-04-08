import React, { useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import { useTranslation } from './TranslationContext';

function App() {
  const { currentLang } = useTranslation();
  const isPrintingMode = useRef(false);

  useEffect(() => {
    const handlePrint = () => {
      if (isPrintingMode.current) return;
      isPrintingMode.current = true;
      
      const url = `/cv_${currentLang}.pdf`;
      console.log(`> Initiating print sequence for: ${url}...`);

      const iframe = document.createElement('iframe');
      iframe.style.cssText = 'position:fixed; right:0; bottom:0; width:0; height:0; border:0;';
      iframe.src = url;
      
      document.body.appendChild(iframe);
      
      iframe.onload = function() {
          try {
              iframe.contentWindow.focus();
              iframe.contentWindow.print();
          } catch (e) {
              window.open(url, '_blank');
          }
          isPrintingMode.current = false;
      };
    };

    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        handlePrint();
      }
    };

    window.addEventListener('beforeprint', handlePrint);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('beforeprint', handlePrint);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentLang]);

  return (
    <div className="min-h-screen">
      <ParticleBackground />
      
      <div className="relative z-10 w-full">
        <Header />
        
        <main className="container mx-auto px-4 max-w-5xl pb-20">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        
        <footer className="text-center py-10 text-textMuted text-sm border-t border-white/10 mt-10 backdrop-blur-sm bg-bgMain/30">
          <p>Built with React, Vite & Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
