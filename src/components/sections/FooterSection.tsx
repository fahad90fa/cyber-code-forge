import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-12 px-4 border-t border-border bg-card/50">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo/Name */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-primary text-glow-green mb-2">
              FAHAD YOUSAF
            </h3>
            <p className="text-sm text-muted-foreground font-mono">
              Full Stack Developer × Cybersecurity Expert
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-sm text-muted-foreground mb-4">
              <span className="text-primary">&gt;</span> navigation
            </h4>
            <nav className="flex flex-wrap gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-mono text-sm text-muted-foreground mb-4">
              <span className="text-primary">&gt;</span> connect
            </h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:fahad1562009@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-muted-foreground">
              © {currentYear} Fahad Yousaf. All Rights Reserved.
            </p>
            <p className="text-muted-foreground font-mono flex items-center gap-2">
              <span className="text-primary">&gt;</span>
              Designed & Developed with 
              <Heart className="w-4 h-4 text-primary fill-primary" />
              by Fahad Yousaf
            </p>
          </div>
          <p className="text-center mt-4 text-xs text-muted-foreground/60 font-mono">
            <span className="text-primary/60">&gt;</span> No templates. Pure code. Authentic craft.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
