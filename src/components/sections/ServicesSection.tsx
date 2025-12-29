import { Code2, Shield, Brain, Bot } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const services = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'End-to-end web solutions built with modern frameworks. From responsive frontends to scalable backends, delivering complete digital experiences.',
      color: 'primary',
    },
    {
      icon: Shield,
      title: 'Security Consulting',
      description: 'Penetration testing, vulnerability assessments, and security audits. Protecting your systems with battle-tested methodologies.',
      color: 'destructive',
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Custom AI integrations, intelligent chatbots, and ML models. Bringing cutting-edge artificial intelligence to your applications.',
      color: 'accent',
    },
    {
      icon: Bot,
      title: 'Bot & Automation',
      description: 'Trading bots, web scrapers, and workflow automation. Eliminating repetitive tasks and maximizing efficiency.',
      color: 'secondary',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { icon: string; border: string; hover: string }> = {
      primary: { icon: 'text-primary', border: 'border-primary/20', hover: 'hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--matrix-green)/0.2)]' },
      secondary: { icon: 'text-secondary', border: 'border-secondary/20', hover: 'hover:border-secondary/50 hover:shadow-[0_0_30px_hsl(var(--cyber-cyan)/0.2)]' },
      accent: { icon: 'text-accent', border: 'border-accent/20', hover: 'hover:border-accent/50 hover:shadow-[0_0_30px_hsl(var(--electric-purple)/0.2)]' },
      destructive: { icon: 'text-destructive', border: 'border-destructive/20', hover: 'hover:border-destructive/50 hover:shadow-[0_0_30px_hsl(var(--security-orange)/0.2)]' },
    };
    return colors[color] || colors.primary;
  };

  return (
    <section id="services" className="py-20 md:py-32 px-4">
      <div className="container max-w-6xl mx-auto">
        <SectionTitle command="services --available" />

        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            const Icon = service.icon;
            
            return (
              <div 
                key={service.title}
                className={`cyber-card group ${colorClasses.border} ${colorClasses.hover} transition-all duration-300`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-lg bg-muted/50 ${colorClasses.icon} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
