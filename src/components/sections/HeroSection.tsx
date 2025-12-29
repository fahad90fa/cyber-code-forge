import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import TerminalText from '../TerminalText';
import TypewriterText from '../TypewriterText';
import GlitchText from '../GlitchText';
import ScrollIndicator from '../ScrollIndicator';
import { Button } from '../ui/button';

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);

  const roles = [
    'Full Stack Developer',
    'Cybersecurity Expert',
    'AI Developer',
    'Bot Developer'
  ];

  const terminalLines = [
    'initializing portfolio...',
    'loading modules...',
    'access granted_'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Terminal Intro */}
        <div className="mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <TerminalText 
            lines={terminalLines} 
            typingSpeed={40}
            lineDelay={300}
            onComplete={() => setShowContent(true)}
            className="text-sm md:text-base"
          />
        </div>

        {/* Name */}
        <div 
          className={`transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.3s' }}
        >
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <GlitchText 
              text="FAHAD YOUSAF" 
              className="text-foreground"
              triggerOnMount={showContent}
            />
          </h1>
        </div>

        {/* Role Typewriter */}
        <div 
          className={`h-12 mb-8 transition-all duration-700 ${showContent ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '0.5s' }}
        >
          <div className="font-mono text-xl md:text-2xl lg:text-3xl text-secondary text-glow-cyan">
            <TypewriterText 
              texts={roles}
              typingSpeed={80}
              deletingSpeed={40}
              pauseTime={2000}
            />
          </div>
        </div>

        {/* Tagline */}
        <p 
          className={`text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '0.7s' }}
        >
          Building Secure Systems. Developing Smart Solutions. Automating Everything.
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '0.9s' }}
        >
          <Button 
            size="lg"
            className="font-mono bg-primary text-primary-foreground hover:bg-primary/90 glow-green px-8 group"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="mr-2 opacity-70 group-hover:opacity-100">&gt;</span>
            View My Work
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="font-mono border-secondary text-secondary hover:bg-secondary/10 hover:border-secondary px-8 group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="mr-2 opacity-70 group-hover:opacity-100">&gt;</span>
            Contact Me
          </Button>
        </div>

        {/* Social Icons */}
        <div 
          className={`flex gap-6 justify-center transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '1.1s' }}
        >
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-secondary hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:fahad1562009@gmail.com"
            className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
