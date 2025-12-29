import { GraduationCap, Award } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const EducationSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const education = [
    {
      icon: GraduationCap,
      degree: 'Bachelor of Science in Information Technology',
      institution: 'University of Management and Technology (UMT)',
      location: 'Lahore, Pakistan',
      year: '2025',
      focus: 'Software Development, Database Systems, Web Technologies',
      color: 'primary',
    },
    {
      icon: Award,
      degree: 'Diploma in Cyber Security',
      institution: 'Arfa Software Technology Park (Arfa Tower)',
      location: 'Lahore, Pakistan',
      year: '2025',
      focus: 'Penetration Testing, Network Security, Ethical Hacking',
      color: 'destructive',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { icon: string; border: string }> = {
      primary: { icon: 'text-primary', border: 'border-l-primary' },
      destructive: { icon: 'text-destructive', border: 'border-l-destructive' },
    };
    return colors[color] || colors.primary;
  };

  return (
    <section id="education" className="py-20 md:py-32 px-4 bg-card/30">
      <div className="container max-w-4xl mx-auto">
        <SectionTitle command="education --list" />

        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {education.map((edu, index) => {
            const colorClasses = getColorClasses(edu.color);
            const Icon = edu.icon;
            
            return (
              <div 
                key={edu.degree}
                className={`cyber-card border-l-4 ${colorClasses.border}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-muted/50 ${colorClasses.icon}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
                      <span>{edu.location}</span>
                      <span>•</span>
                      <span className="text-secondary">{edu.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-mono">
                      <span className="text-primary">&gt;</span> {edu.focus}
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

export default EducationSection;
