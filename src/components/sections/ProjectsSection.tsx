import { ShoppingCart, Bitcoin, TrendingUp, Dice5, Bug, Brain } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import AnimatedCounter from '../AnimatedCounter';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const projectCategories = [
    {
      icon: ShoppingCart,
      count: 10,
      title: 'E-Commerce',
      description: 'Full-featured online stores with payment integration',
      color: 'primary',
    },
    {
      icon: Bitcoin,
      count: 4,
      title: 'Crypto',
      description: 'Blockchain dashboards & DeFi applications',
      color: 'destructive',
    },
    {
      icon: TrendingUp,
      count: 5,
      title: 'Trading Bots',
      description: 'Automated trading with real-time execution',
      color: 'secondary',
    },
    {
      icon: Dice5,
      count: 3,
      title: 'Casino',
      description: 'Real-time gaming with secure transactions',
      color: 'accent',
    },
    {
      icon: Bug,
      count: 3,
      title: 'Web Scrapers',
      description: 'Data extraction & automation systems',
      color: 'trust',
    },
    {
      icon: Brain,
      count: 5,
      title: 'AI Products',
      description: 'Intelligent ML-powered solutions',
      color: 'accent',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { icon: string; border: string; glow: string }> = {
      primary: { icon: 'text-primary', border: 'hover:border-primary/50', glow: 'group-hover:glow-green' },
      secondary: { icon: 'text-secondary', border: 'hover:border-secondary/50', glow: 'group-hover:glow-cyan' },
      accent: { icon: 'text-accent', border: 'hover:border-accent/50', glow: 'group-hover:glow-purple' },
      destructive: { icon: 'text-destructive', border: 'hover:border-destructive/50', glow: '' },
      trust: { icon: 'text-trust', border: 'hover:border-trust/50', glow: '' },
    };
    return colors[color] || colors.primary;
  };

  return (
    <section id="projects" className="py-20 md:py-32 px-4 bg-card/30">
      <div className="container max-w-6xl mx-auto">
        <SectionTitle command="projects --stats" subtitle="MY WORK" />

        <div ref={ref} className="text-center mb-16">
          {/* Main Counter */}
          <div 
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          >
            <div className="text-7xl md:text-9xl font-heading font-bold text-primary text-glow-green mb-4">
              <AnimatedCounter end={40} suffix="+" duration={2500} />
            </div>
            <p className="text-xl md:text-2xl font-mono text-muted-foreground tracking-wider">
              PROJECTS DELIVERED
            </p>
          </div>
        </div>

        {/* Category Grid */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-3 gap-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {projectCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            const Icon = category.icon;
            
            return (
              <div 
                key={category.title}
                className={`cyber-card group cursor-default ${colorClasses.border} ${colorClasses.glow}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <Icon className={`w-10 h-10 mb-4 ${colorClasses.icon} transition-transform group-hover:scale-110`} />
                  <div className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-1">
                    <AnimatedCounter end={category.count} />
                  </div>
                  <h3 className="font-mono text-sm text-foreground mb-2">{category.title}</h3>
                  <p className="text-xs text-muted-foreground">{category.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div 
          className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <p className="font-mono text-muted-foreground">
            <span className="text-primary">&gt;</span> Detailed case studies available upon request
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
