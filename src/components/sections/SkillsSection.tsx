import SectionTitle from '../SectionTitle';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const skillCategories = [
    {
      title: 'Frontend Development',
      color: 'primary',
      skills: ['React.js', 'Angular', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Styled Components'],
    },
    {
      title: 'Backend Development',
      color: 'secondary',
      skills: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'GraphQL', 'WebSocket', 'Socket.io'],
    },
    {
      title: 'Database',
      color: 'accent',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQL', 'Redis', 'Database Design'],
    },
    {
      title: 'Cybersecurity',
      color: 'destructive',
      skills: ['Penetration Testing', 'Vulnerability Assessment', 'Network Security', 'Ethical Hacking', 'Security Auditing', 'Black Hat Techniques'],
    },
    {
      title: 'AI & Automation',
      color: 'accent',
      skills: ['OpenAI API', 'TensorFlow', 'PyTorch', 'Bot Development', 'Web Scraping', 'Process Automation', 'ML Models'],
    },
    {
      title: 'Tools & Platforms',
      color: 'secondary',
      skills: ['Git', 'GitHub', 'Docker', 'Webpack', 'Vite', 'Web3.js', 'Linux', 'WhatsApp API'],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; hover: string; text: string }> = {
      primary: { border: 'border-primary/30', hover: 'hover:border-primary hover:bg-primary/10', text: 'text-primary' },
      secondary: { border: 'border-secondary/30', hover: 'hover:border-secondary hover:bg-secondary/10', text: 'text-secondary' },
      accent: { border: 'border-accent/30', hover: 'hover:border-accent hover:bg-accent/10', text: 'text-accent' },
      destructive: { border: 'border-destructive/30', hover: 'hover:border-destructive hover:bg-destructive/10', text: 'text-destructive' },
    };
    return colors[color] || colors.primary;
  };

  return (
    <section id="skills" className="py-20 md:py-32 px-4 bg-card/30">
      <div className="container max-w-6xl mx-auto">
        <SectionTitle command="skills --list" subtitle="TECH ARSENAL" />

        <div 
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <div 
                key={category.title}
                className="cyber-card group"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <h3 className={`font-heading font-semibold text-lg mb-4 ${colorClasses.text}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className={`px-3 py-1.5 text-sm font-mono border rounded-md transition-all duration-300 cursor-default ${colorClasses.border} ${colorClasses.hover}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
