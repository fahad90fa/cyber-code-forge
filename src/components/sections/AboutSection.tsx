import { User } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import AnimatedCounter from '../AnimatedCounter';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const stats = [
    { value: 4, suffix: '+', label: 'Years Experience' },
    { value: 40, suffix: '+', label: 'Projects Delivered' },
    { value: 1, suffix: ' Year', label: 'International Clients' },
    { value: 95, suffix: '+', label: 'Lighthouse Score' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-4">
      <div className="container max-w-6xl mx-auto">
        <SectionTitle command="about_me" subtitle="cat about_me.txt" />

        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 hexagon bg-gradient-to-br from-primary via-secondary to-accent p-1 animate-pulse-glow">
                <div className="w-full h-full hexagon bg-card flex items-center justify-center">
                  <User className="w-24 h-24 md:w-32 md:h-32 text-muted-foreground" />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-primary opacity-60" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-secondary opacity-60" />
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I'm <span className="text-primary font-semibold">Fahad Yousaf</span> — a Full Stack Developer and Cybersecurity Specialist based in Lahore, Pakistan. With <span className="text-secondary">4+ years</span> of hands-on development experience, including 1 year working with international clients, and <span className="text-accent">2+ years</span> diving deep into security research with black hat experience, I bring a unique perspective to every project.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              From e-commerce platforms to crypto dashboards, trading bots to AI systems, I've delivered 40+ projects that are as secure as they are powerful. I bridge the gap between development and security, ensuring every line of code is both functional and bulletproof.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              When I'm not shipping code, I'm breaking into systems (ethically), training AI models, or automating the mundane.
            </p>


          </div>
        </div>

        {/* Stats */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="cyber-card text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2 group-hover:text-glow-green transition-all">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
